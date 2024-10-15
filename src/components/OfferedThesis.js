import React from "react";
import {useState, useEffect} from "react";
import fetchJsonp from "fetch-jsonp";
import Details from '@theme/MDXComponents/Details';
import Link from "@docusaurus/Link";

export function OfferedThesisList() {

    const [allThesis, setAllThesis] = useState([]);
    useEffect(() => {
        const callLoad = async () => {
            const json = await loadEliteThesis();
            setAllThesis(json.thesis);
        }
        callLoad();
    }, []);

    if (allThesis.length) {
        const today = (new Date()).toISOString().substring(0,10);
        
        return <>
            {allThesis.filter(t => t.exp_date >= today).map(t => (
                <OfferedThesis key={t.ID} {...t} />))}
        </>;
    } else
        return <p>Loading...</p>
}

function OfferedThesis({
                           ID,
                           topic,
                           keywords,
                           description,
                           link,
                           required_skills,
                           additional_notes,
                           exp_date,
                           advisors,
                           external_advisors,
                           thesis_types,
                           where,
                           foreign,
                           cds_type
                       }) {
    let display_advisors = [...advisors];
    if(where==='P' && external_advisors.length!==0)
        display_advisors = [...display_advisors, {name:external_advisors}]
    return <Details>
        <summary mdxType='summary'>
            <div><b>{topic}</b></div>
            <div><small>Advisors: {display_advisors.map(a => a.name).join(', ')}</small></div>
            <div><small>Valid until: {exp_date}</small></div>
            {where == 'A' && <div><small>Thesis with an external company. {external_advisors ? `Advisor: ${external_advisors}` : ''}</small></div>}
        </summary>
        <div className='fix-new-lines'>{description}</div>
        <hr/>
        {keywords.length > 0 && <div><strong>Keywords: </strong>{keywords.join(', ')}</div>}
        <div><Link to={`https://didattica.polito.it/pls/portal30/sviluppo.tesiv.elenchi?idt=${ID}&lang=EN`}>View the proposal on Portale della Didattica</Link></div>
        <div><Link to={`https://didattica.polito.it/pls/portal30/sviluppo.tesiv.candidati?id=${ID}`}>Submit your application</Link></div>
    </Details>
}

async function loadEliteThesis() {
    const baseUrl = 'https://didattica.polito.it/pls/portal30/sviluppo.tesiv.jsn?dgrp=';
    const lang = '&lang=EN';
    const group = 'DAUIN%20%2D%20GR%2D10%20%2D%20Intelligent%20and%20Interactive%20Systems%20%2D%20ELITE';

    const resource = baseUrl + group + lang;

    const response = await fetchJsonp(resource);
    if (response.ok) {
        const json = await response.json();
        return json;
    }
};

// https://didattica.polito.it/pls/portal30/sviluppo.tesiv.elenchi?idt=12453&lang=EN

// https://didattica.polito.it/pls/portal30/sviluppo.tesiv.jsn?dgrp=DAUIN%20%2D%20GR%2D10%20%2D%20Intelligent%20and%20Interactive%20Systems%20%2D%20e%2DLITE&lang=EN
