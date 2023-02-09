import React from "react";
import {createContext, useContext} from 'react';

import {ensureArray} from "../utils/utils";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faYoutube, faGithub, faPython} from '@fortawesome/free-brands-svg-icons'
import {faFilePdf, faFileZipper} from '@fortawesome/free-solid-svg-icons'

const defaultTableContext = {
    defaultTeacher: undefined,
    showMaterial: true
}
const TableContext = createContext(defaultTableContext);

/**
 *
 * @param {string|[string]} links
 * @param {string} label
 * @param {IconDefinition} icon
 * @returns {unknown[]}
 * @constructor
 */
function IconicLinks({links, label, icon}) {
    return (
        links ?
            ensureArray(links).map(item =>
                <a href={item} title={label}><FontAwesomeIcon icon={icon} size="xl"/> </a>)
            : null
    )
}


/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function LectureRow(props) {
    const tableContext = useContext(TableContext);
    const teacher = props.teacher || tableContext.defaultTeacher
    return (<tr>
        <td>{props.date}</td>
        <td>{props.time}</td>
        <td>{props.type || "Lezione"}</td>
        <td>{props.topic}{props.children}</td>
        {tableContext.showMaterial &&
            <td style={{textAlign: 'center'}}>
                <IconicLinks links={props.pdfLink} icon={faFilePdf} label={"PDF"}/>
                <IconicLinks links={props.githubLink} icon={faGithub} label={"GitHub"}/>
                <IconicLinks links={props.pythonLink} icon={faPython} label={"Python"}/>
                <IconicLinks links={props.zipLink} icon={faFileZipper} label={"Zip"}/>
            </td>
        }
        <td style={{textAlign: 'center'}}><a href="{props.videoLink}}" title={"Video"}><FontAwesomeIcon icon={faYoutube}
                                                                                                        size="xl"/></a>
        </td>
        <td>{teacher}</td>
    </tr>)
}

function LectureDivider(props) {
    const tableContext = useContext(TableContext)
    const spanSize = tableContext.showMaterial ? 7 : 6

    return <tr>
        <th colSpan={spanSize} style={{textAlign: 'left'}}>{props.topic}{props.children}</th>
    </tr>
}

function LectureTable(props) {
    return (
        <TableContext.Provider value={{...defaultTableContext, ...props}}>
            <LectureTableContent {...props}/>
        </TableContext.Provider>
    )
}

function LectureTableContent(props) {
    const tableContext = useContext(TableContext)
    return <table>
        <thead>
        {props.language && props.language.toUpperCase() == 'EN ' ?
            <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Type</th>
                <th>Topic</th>
                {tableContext.showMaterial && <th>Resources</th>}
                <th>Video</th>
                <th>Teacher</th>
            </tr>
            :
            <tr>
                <th>Data</th>
                <th>Ora</th>
                <th>Tipo</th>
                <th>Argomento</th>
                {tableContext.showMaterial && <th>Materiale</th>}
                <th>Video</th>
                <th>Docente</th>
            </tr>}
        </thead>
        <tbody>
        {props.children}
        </tbody>
    </table>

}

export {LectureRow, LectureDivider, LectureTable}