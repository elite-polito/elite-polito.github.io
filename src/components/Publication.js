// Format the citation of a single publication, according to the ACM style (https://www.acm.org/publications/authors/reference-formatting)

import React from "react";


export function Publication({ publication }) {

    const p = publication; // shortname
    const lu = p.lookupValues; // short name
    const title = lu.title;
    const year = p.year == 9999 ? 'In press' : p.year;
    const authors = lu.contributors;
    const doi = lu.doi
    const handle = p.handle;
    const volume_issue = lu.volume ? (lu.volume + (lu.issue ? ', ' + lu.issue : '')) : '';
    const pages = lu.spage ? lu.spage + '-' + lu.epage : '';


    let cite = '';
    switch (p.type.name) {
        case 'Journal Paper':
        case 'Journal Abstract':
            // [1] Patricia S. Abril and Robert Plant. 2007. The patent holder's dilemma: Buy, sell, or troll? Commun. ACM 50, 1 (Jan. 2007), 36-44. https://doi.org/10.1145/1188913.1188915
            cite = <>{authors}. {year}. {title} <em>{publication.lookupValues.jtitle}</em> {volume_issue}, {pages}</>;
            break;

        case 'Book':
            // [1] David Kosiur. 2001. Understanding Policy-Based Networking (2nd. ed.). Wiley, New York, NY.
            cite = <>{authors}. {year}. {title}.</>;
            break;

        case 'Book Chapter':
            // Donald E. Knuth. 2007. Computer programming as an art. ACM Turing award lectures. Association for Computing Machinery, New York, NY, USA, 1974. https://doi.org/10.1145/1283920.1283929

            // Stefan Kopp and Teena Hassan. 2022. The Fabric of Socially Interactive Agents: Multimodal Interaction Architectures. The Handbook on Socially Interactive Agents: 20 years of Research on Embodied Conversational Agents, Intelligent Virtual Agents, and Social Robotics Volume 2: Interactivity, Platforms, Application (1st ed.). Association for Computing Machinery, New York, NY, USA, 77–112. https://doi.org/10.1145/3563659.3563664
            cite = <>{authors}. {year}. {title}. <em>{lu.book}</em>, {pages}</>;
            break;

        default:
            cite = lu.citation;
    }


    return <li>{cite}
        <br />
        <a href={`http://hdl.handle.net/${handle}`}>IRIS Page</a>
        {doi && <> &ndash; DOI: <a href={`http://dx.doi.org/${doi}`}>{publication.lookupValues.doi}</a></>}
    </li>

}
