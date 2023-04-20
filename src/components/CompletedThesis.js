import fetchJsonp from "fetch-jsonp";
import {useEffect, useState} from "react";
import React from "react";
import Details from '@theme/MDXComponents/Details';


const supervisors = [
    'De_Russis=3ALuigi=3A=3A',
    'Corno=3AFulvio=3A=3A',
    'Farinetti=3ALaura=3A=3A',
    'Monge_Roffarello=3AAlberto=3A=3A',
    'Saenz_Moreno=3AJuan_Pablo=3A=3A'
]

const makeUrl = (supervisor) => `https://webthesis.biblio.polito.it/cgi/exportview/relators/${supervisor}/JSON/${supervisor}.js`

export function CompletedThesisList(props) {

    const [allThesis, setAllThesis] = useState([]);

    useEffect(() => {
        const callLoad = async () => {
            const list = await loadAll();
            setAllThesis(list);
        }
        callLoad();
    }, []);

    if(allThesis.length)
        return allThesis.map((t) => <CompletedThesis key={t.eprintid} {...t}/>);
    else
        return <p>Loading...</p>
}

function CompletedThesis({date, relators, annoacc, creators, title, abstract, uri, cdl}) {
    return <Details>
        <summary mdxType='summary'>
            <div><b>{title.replace('=', '/')}</b></div>
            <div><em>{creators[0].name.given + ' ' + creators[0].name.family}</em></div>
            <div><small>{annoacc} &ndash; {cdl[0].replaceAll('+', ' ').toUpperCase()}</small></div>
            <div><small>Advisors: {relators.map(a => a.name.family + ' ' + a.name.given).join(', ')}</small></div>
        </summary>
        <div className='fix-new-lines'>{abstract}</div>
        <hr/>
        <div><a href={uri}>See all details and download the thesis</a></div>
    </Details>
}

async function loadAll() {
    // create promises to load in parallel each supervisor's thesis
    const allLists = await Promise.all(supervisors.map((sup) => loadThesis(sup)))
    // we have a list of promise results, that contain the JSON responses for each author

    // create one single merged list
    let mergedList = allLists.reduce((prev, curr)=>(prev.concat(curr)), [])

    // copy the elements into one Map, to de-duplicate
    let uniqueMap = new Map();
    mergedList.forEach((item) => uniqueMap.set(item.eprintid, item));

    // copy the de-duplicated items back to a list, for ease of sorting
    mergedList = [...uniqueMap.values()];

    // sort by date (reversed)
    mergedList.sort((a, b) => a.date < b.date ? 1 : -1);

    return mergedList;
}

async function loadThesis(supervisor) {

    const response = await fetchJsonp(makeUrl(supervisor));
    const thesisList = await response.json();

    // console.log(supervisor, thesisList.length);
    return thesisList;
}


// http://webthesis.biblio.polito.it/cgi/exportview/relators/De_Russis=3ALuigi=3A=3A/Atom/De_Russis=3ALuigi=3A=3A.xml