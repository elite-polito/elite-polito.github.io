import React, {useEffect, useState} from "react";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


const allMembers = [
    {first: "Fulvio", last: "Corno", id: "002154"},
    {first: "Dario", last: "Bonino", id: "012325"},
    {first: "Luigi", last: "De Russis", id: "025734"},
    {first: "Sebastian", last: "Aced Lopez", id: "027070"},
    {first: "Faisal", last: "Razzak", id: "023127"},
    {first: "Muhammad", last: "Sanaullah", id: "024462"},
    {first: "Laura", last: "Farinetti", id: "002236"},
    {first: "Teodoro", last: "Montanaro", id: "036541"},
    {first: "Alberto", last: "Monge Roffarello", id: "040637"},
    {first: "Juan Pablo", last: "Saenz", id: "042870"},
    {first: "Fabio", last: "Ballati", id: "037716"},
    {first: "Lorenzo", last: "Canale", id: "041708"},
    {first: "Luisa Fernanda", last: "Barrera Leon", id: "050419"},
    {first: "Luca", last: "Mannella", id: "040887"},
    {first: "Tommaso", last: "Calò", id: "058407"}
];

export function PublicationList(props) {

    const [allPublications, setAllPublications] = useState([]);
    useEffect(() => {
        const loadPubs = async () => {
            try {
                const pubs = await loadAllPublications();
                setAllPublications(pubs);
            } catch (e) {
                setAllPublications(undefined)
            }
        }
        loadPubs();
    }, []);

    if (allPublications && allPublications.length) {

        const years = getYears(allPublications);
        const types = getTypes(allPublications);

        return <>
            <p>Total number of publications: {allPublications.length}</p>

            <Tabs queryString="publication_order">
                <TabItem value="by_year" label="By Year">
                    {years.map(year => <PublicationListYear key={year} allPublications={allPublications} year={year}
                                                            types={types}/>)}
                </TabItem>
                <TabItem value="by_type" label="By Type">
                    YYY
                </TabItem>
            </Tabs>


        </>;
    } else if (allPublications)
        return <p>Loading...</p>
    else
        return <p>Error loading publications</p>
}

function PublicationListYear({allPublications, year, types}) {
    const yearPublications = allPublications.filter(p => p.year === year);

    return <>
        <h3>{year === '9999' ? 'To Appear' : `Year ${year}`} <small><small>({yearPublications.length} papers)</small></small></h3>
        {types.map(t => <PublicationListYearType key={t} yearPublications={yearPublications} type={t}/>)}
    </>
}

function PublicationListYearType({yearPublications, type}) {
    const yearTypePublications = yearPublications.filter(p => p.collection.name === type);

    if (yearTypePublications.length)
        return <>
            <h4>{type.substring(4)} <small>({yearTypePublications.length})</small></h4>
            <ul>
                {yearTypePublications.map(p => <SinglePublication key={p.handle} publication={p}/>)}
            </ul>
        </>;
    else
        return null;
}

function SinglePublication({publication}) {
    const title = publication.name;
    const authors = publication.lookupValues.contributors;
    const doi = publication.lookupValues.doi
    const handle = publication.handle;

    // TODO: don't use 'citation', but format correctly the citation using the correct fields
    return <li>{publication.lookupValues.citation}
        <br/>
        <a href={`http://hdl.handle.net/${handle}`}>IRIS Page</a>
        {doi && <> &ndash; DOI: <a href={`http://dx.doi.org/${doi}`}>{publication.lookupValues.doi}</a></>}
    </li>
}

async function loadAllPublications() {
    // get all JSON for all authors, in parallel
    const allLists = await Promise.all(allMembers.map((m) => loadPublications(m.id)))

    // merge into a single list
    let mergedList = allLists.reduce((prev, curr) => (prev.concat(curr.records)), [])

    // copy the elements into one Map, to de-duplicate
    let uniqueMap = new Map();
    mergedList.forEach((item) => uniqueMap.set(item.handle, item));
    // copy the de-duplicated items back to a list, for ease of sorting
    mergedList = [...uniqueMap.values()];

    return mergedList;
}

async function loadPublications(id) {
    const response = await fetch(`/iris/${id}.json`);
    return await response.json();
}

function getYears(publications) {
    let yearSet = new Set();
    for (const item of publications) {
        let year = item.lookupValues.year.substring(0, 4)
        yearSet.add(year)
        item.year = year
    }
    let years = [...yearSet];
    years.sort().reverse();
    return years;
}

function getTypes(publications) {
    // TODO: collapse publication types into a smaller number, and translate to English
    let typeSet = new Set();
    for (const item of publications) {
        const type = item.collection.name
        typeSet.add(type)
    }
    let types = [...typeSet];
    types.sort();
    return types;
}