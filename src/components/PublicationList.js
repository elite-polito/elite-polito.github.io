import React, { useEffect, useState } from "react";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TOCCollapsible from '@theme/TOCCollapsible';
import TOCInline from '@theme/TOCInline';
import { Publication } from "./Publication";

import { allMembers } from "../data/IRISAuthors";

// Decode the IDs of the publication types
const allTypes = {
    0: new Type("Pending validation...", 999),
    1: new Type("Journal Paper", 1),
    5: new Type("Journal Abstract", 4), // 1.5 Abstract in rivista
    7: new Type("Book Chapter", 3), // 2.1 Contributo in volume (Capitolo o Saggio)
    14: new Type("Book", 2),
    21: new Type("Other", 99), // 3.8 Traduzione di libro
    22: new Type("Conference Proceedings", 5), // 4.1 Contributo in Atti di convegno
    23: new Type("Conference Proceedings", 5), // 4.2 Abstract in Atti di convegno
    35: new Type("Other", 99), // 5.11 Software
    36: new Type("Other", 99), // 5.12 Altro
    38: new Type("Patent", 50), // 6.1 Brevetto
    39: new Type("Editorial", 7), // 7.1 Curatela
    40: new Type("Doctoral Thesis", 6), // 8.1 Doctoral thesis Polito
    61: new Type("Editorial", 7), // 1.7 Editoriale in rivista
}

function Type(name, order) {
    this.name = name;
    this.order = order;
}

// Main component for generating the publication list
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

        const tocYears = years.map(y => ({ value: (y == 9999 ? 'In press' : y), id: y, level: 2 }));
        const tocTypes = types.map(t => ({ value: t.name, id: t.order, level: 2 }));

        return <>

            <div className="row row--no-gutters">
                <div className="col ">
                    <p>Total number of publications: {allPublications.length}</p>
                </div>
            </div>

            <Tabs queryString="publication_order">
                <TabItem value="by_year" label="By Year">
                    <div className="row ">
                        <div className="col">
                            {years.map(year => <PublicationListYear
                                key={year}
                                allPublications={allPublications}
                                year={year}
                                types={types} />)}
                        </div>
                        <div className="col col--2">
                            <TOCInline toc={tocYears} />
                        </div>
                    </div>
                </TabItem>
                <TabItem value="by_type" label="By Type">
                    <div className="row ">
                        <div className="col">
                            {types.map(type => <PublicationListType
                                key={type.name}
                                allPublications={allPublications}
                                type={type}
                                years={years} />)}
                        </div>
                        <div className="col col--2">
                            <TOCInline toc={tocTypes} />
                        </div>
                    </div>

                </TabItem>
            </Tabs>

        </>;
    } else if (allPublications)
        return <p>Loading...</p>
    else
        return <p>Error loading publications</p>
}

// all -> Year
function PublicationListYear({ allPublications, year, types }) {
    const yearPublications = allPublications.filter(p => p.year === year);

    return <>
        <h3 id={year} style={{ borderBottom: "1px solid var(--ifm-toc-border-color)" }}>{year === '9999' ? 'In press' : `Year ${year}`} <small><small>({yearPublications.length} papers)</small></small></h3>
        {types.map(t => <PublicationListYearType key={t.name} yearPublications={yearPublications} type={t} />)}
    </>
}

// all -> Type
function PublicationListType({ allPublications, type, years }) {
    const typePublications = allPublications.filter(p => p.type.name === type.name);

    return <>
        <h3 id={type.order} style={{ borderBottom: "1px solid var(--ifm-toc-border-color)" }}>{type.name} <small><small>({typePublications.length} papers)</small></small></h3>
        {years.map(y => <PublicationListTypeYear key={y} typePublications={typePublications} year={y} />)}
    </>
}

// all -> Year -> Type
function PublicationListYearType({ yearPublications, type }) {
    const yearTypePublications = yearPublications.filter(p => p.type.name === type.name);

    if (yearTypePublications.length)
        return <>
            <h4 style={{ borderBottom: "1px dotted var(--ifm-toc-border-color)" }}>{type.name} <small>({yearTypePublications.length})</small></h4>
            <ul>
                {yearTypePublications.map(p => <Publication key={p.handle} publication={p} />)}
            </ul>
        </>;
    else
        return null;
}

// all -> Type -> Year
function PublicationListTypeYear({ typePublications, year }) {
    const typeYearPublications = typePublications.filter(p => p.year === year);

    if (typeYearPublications.length)
        return <>
            <h4 style={{ borderBottom: "1px dotted var(--ifm-toc-border-color)" }}>{year === '9999' ? 'To Appear' : `Year ${year}`} <small><small>({typeYearPublications.length} papers)</small></small></h4>
            <ul>
                {typeYearPublications.map(p => <Publication key={p.handle} publication={p} />)}
            </ul>
        </>;
    else
        return null;
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
    const setTypeNames = new Set();
    const types = [];
    for (const item of publications) {
        // Articles not yet validated by the university have a "null" collection, even if all the other info are ok
        const typeId = item.collection?.id ?? 0

        const type = allTypes[typeId];
        item.type = type;

        if (!setTypeNames.has(type.name)) {
            setTypeNames.add(type.name);
            types.push(item.type);
        }

    }
    types.sort((a, b) => a.order - b.order);
    return types;
}