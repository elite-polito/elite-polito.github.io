// Format the citation of a single publication, according to the ACM style (https://www.acm.org/publications/authors/reference-formatting)

import Link from "@docusaurus/Link";
import React from "react";

export function Publication({ publication }) {

    const p = publication; // shortname
    const lu = p.lookupValues; // short name
    const title = sanitizeText(lu.title);
    const year = p.year == 9999 ? 'In press' : p.year;

    // we must do ugly staff with the 'contributors' string, because 'external' authors are not listed in any other part.
    let authors = lu.contributors.toLowerCase().replace(/(?<=^|[^\p{L}])\p{L}/gu, (x) => x.toUpperCase());
    authors = authors.split(';').map(s => s.trim().replace(',', ''))
    if (authors.length == 1)
        authors = authors[0]
    else if (authors.length == 2)
        authors = authors.join(' and ')
    else if (authors.length > 2) {
        authors[authors.length - 1] = 'and ' + authors[authors.length - 1]
        authors = authors.join(', ')
    }

    const doi = lu.doi
    const handle = p.handle;
    const volume_issue = lu.volume ? (lu.volume + (lu.issue ? ', ' + lu.issue : '')) : '';
    const pages = lu.spage ? lu.spage + '-' + lu.epage : '';
    const congress = lu.book != 'Titolo volume non avvalorato' ? lu.book : 'Conference Proceedings';


    let cite = '';
    switch (p.type.name) {
        case 'Journal Paper':
        case 'Journal Abstract':
            // [1] Patricia S. Abril and Robert Plant. 2007. The patent holder's dilemma: Buy, sell, or troll? Commun. ACM 50, 1 (Jan. 2007), 36-44. https://doi.org/10.1145/1188913.1188915
            cite = <>{authors}. {year}. {title}. <em>{publication.lookupValues.jtitle}</em> {volume_issue}, {pages}</>;
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

        case 'Conference Proceedings':
            // [1] Sten Andler. 1979. Predicate path expressions. In Proceedings of the 6th. ACM SIGACT-SIGPLAN Symposium on Principles of Programming Languages (POPL '79), January 29 - 31, 1979,  San Antonio, Texas. ACM Inc., New York, NY, 226-236. https://doi.org/10.1145/567752.567774
            cite = <>{authors}. {year}. {title}. In <em>{congress}</em>, {pages}</>;
            // note: missing: location and congress dates (they are not in the JSON)
            break;

        case 'Doctoral Thesis':
            cite = <>{authors}. {year}. <em>{title}</em>. Ph.D. Dissertation. Politecnico di Torino, Italy.</>
            break;

        default:
            cite = lu.citation;
    }


    return <li>{cite}
        <br />
        <Link href={`http://hdl.handle.net/${handle}`}>IRIS Page</Link>
        {doi && <> &ndash; DOI: <Link href={`http://dx.doi.org/${doi}`}>{publication.lookupValues.doi}</Link></>}
    </li>

}


/**
 * Sostitusce alcuni gruppi di caratteri o sequenze di escape nel titolo (o in altre stringhe), che erroneamente vengono proposte da IRIS.
 * L'implementazione è molto cruda per il momento. Se le sostituzioni dovessero diventare molte, sarà opportuno ristrutturare meglio la funzione
 * evitando la cascata di replace.
 * 
 * @param {string} title 
 * @returns 
 */
function sanitizeText(title) {
    return title.replace('&amp;', '&').replace('&nbsp;', ' ') ;
}