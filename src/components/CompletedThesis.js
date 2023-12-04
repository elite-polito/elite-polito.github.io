import fetchJsonp from "fetch-jsonp";
import {useEffect, useState} from "react";
import React from "react";
import Details from '@theme/MDXComponents/Details';
import Link from '@docusaurus/Link';


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

function CompletedThesis({date, relators, annoacc, creators, title, abstract, uri, cdl, aziende}) {
    return <Details>
        <summary mdxType='summary'>
            <div><b>{title.replace('=', '/')}</b></div>
            <div><em>{ creators[0].name.given + ' ' + creators[0].name.family.toUpperCase() }</em></div>
            <div><small><strong>{annoacc}</strong> &ndash; {cdl[0].replaceAll('+', ' ').toUpperCase()}</small></div>
            <div><small>Advisors: {relators.map(a => a.name.given + ' ' + a.name.family.toUpperCase() ).join(', ')}</small>
            {aziende && <small>, in collaboration with {aziende[0]}</small>}
            </div>
        </summary>
        <div className='fix-new-lines'>{abstract}</div>
        <hr/>
        <div><Link to={uri}>See all details and download the thesis</Link></div>
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

// https://webthesis.biblio.polito.it/cgi/exportview/relators/De_Russis=3ALuigi=3A=3A/JSON/De_Russis=3ALuigi=3A=3A.js

// Example response:

/*
    {
      "institution": "Politecnico di Torino",
      "md5_tesi": "e9915756db8a09b796aaec367a8ef3cc39808a485529ae1b23b518e7d2fd401194b7f32fe6d4e54550cc0fba2adbb7c471177ddac5c14a2360526f153aa25d63",
      "pages": 96,
      "classes": [
        "CLASSE_LM-32"
      ],
      "title": "Analisi e riprogettazione di una piattaforma di e-voting = Analysis and redesign of an e-voting platform",
      "userid": 10,
      "dir": "disk3\/00\/02\/68\/40",
      "publication_type": "electronic",
      "type": "thesis",
      "relators": [
        {
          "name": {
            "given": "Luigi",
            "honourific": null,
            "family": "De Russis",
            "lineage": null
          },
          "id": 25734
        },
        {
          "name": {
            "given": "Fulvio",
            "family": "Corno",
            "honourific": null,
            "lineage": null
          },
          "id": 2154
        }
      ],
      "eprintid": 26840,
      "datestamp": "2023-04-26 15:51:08",
      "ispublished": "unpub",
      "lastmod": "2023-05-02 14:03:23",
      "date_type": "published",
      "abstract": "La tesi ha avuto come obiettivo l’analisi dell’interfaccia di una piattaforma di voto online e la progettazione, implementazione e valutazione di una nuova interfaccia. Il lavoro è partito a fronte delle difficoltà riscontrate da diversi utenti del sistema nell’utilizzare il sito, che hanno quindi commesso diversi errori. Il dominio e gli utenti erano già ben definiti e il design della nuova interfaccia è stato portato avanti in modo incrementale, seguendo un approccio human-centered. Sono stati pertanto prodotti diversi prototipi prima di arrivare alla versione definitiva che è stata poi implementata. La versione finale dell’applicazione è stata utilizzata per condurre un test di usabilità; questo è stato utile a determinare se l’interfaccia progettata risultasse effettivamente usabile per gli utenti e per avere ulteriori spunti di miglioramento",
      "uri": "http:\/\/webthesis.biblio.polito.it\/id\/eprint\/26840",
      "full_text_status": "public",
      "annoacc": "2022\/23",
      "creators": [
        {
          "id": 290973,
          "name": {
            "family": "Romano",
            "honourific": null,
            "lineage": null,
            "given": "Gabriele"
          }
        }
      ],
      "aziende": [
        "PRO LOGIC INFORMATICA SRL"
      ],
      "gesd": 1,
      "metadata_visibility": "show",
      "date": "2023-04-21",
      "rev_number": 1,
      "eprint_status": "archive",
      "thesis_type": "laurea",
      "status_changed": "2023-05-02 14:03:22",
      "documents": [
          {
            "format": "application\/pdf",
            "security": "public",
            "language": "it",
            "docid": 188433,
            "license": "cc_by_nc_nd",
            "content": "thesis",
            "placement": 1,
            "uri": "http:\/\/webthesis.biblio.polito.it\/id\/document\/188433",
            "main": "tesi.pdf",
            "pos": 1,
            "files": [
                {
                  "mime_type": "application\/pdf",
                  "filename": "tesi.pdf",
                  "datasetid": "document",
                  "mtime": "2023-05-02 14:03:23",
                  "filesize": 7670892,
                  "fileid": 253299,
                  "objectid": 188433,
                  "hash_type": "MD5",
                  "uri": "http:\/\/webthesis.biblio.polito.it\/id\/file\/253299",
                  "hash": "73859fe18709476f203904892d141548"
                }
            ],
            "formatdesc": "Tesi_di_laurea",
            "rev_number": 1,
            "eprintid": 26840
          }
      ],
      "cdl": [
        "corso+di+laurea+magistrale+in+ingegneria+informatica+(computer+engineering)"
      ],
      "tesi_meritoria": "FALSE"
    },
*/