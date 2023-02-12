import React from "react";
import {createContext, useContext} from 'react';

import {ensureArray} from "../utils/utils";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faYoutube, faGithub, faPython} from '@fortawesome/free-brands-svg-icons'
import {faFilePdf, faFileZipper} from '@fortawesome/free-solid-svg-icons'

const defaultTableContext = {
    defaultTeacher: undefined,
    defaultType: undefined,
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
    let i = 0;
    return (
        links ?
            ensureArray(links).map(item =>
                <a key={i++} href={item} title={label}><FontAwesomeIcon icon={icon} size="2x"/> </a>)
            : null
    )
}


/**
 * Generates a single row of the course schedule.
 *
 * Accepts, as props (*all optional*):
 * - `date`
 * - `time`
 * - `type` (or defaults to `defaultType` set in `LectureTable` -- to suppress the default use `''`)
 * - `topic` (alternatively the topic can be defined as the CHILDREN of the component)
 * - `pdf`, `python`, `zip`, `github`: link(s) to resources to go into the "Materiale" column (if enabled)
 * - `video`: link(s) to video lecture
 * - `teacher` (or defaults to `defaultTeacher` set in `LectureTable` -- to suppress the default set `''`)
 *
 * Note: *link(s)* refers to a single link (string) or a list of links (array of strings)
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function LectureRow(props) {
    const tableContext = useContext(TableContext);
    const teacher = props.teacher == undefined ? tableContext.defaultTeacher : props.teacher
    const type = props.type == undefined ? tableContext.defaultType : props.type

    return (<tr>
        <td>{props.date}</td>
        <td>{props.time}</td>
        <td>{type}</td>
        <td>{props.topic}{props.children}</td>
        {tableContext.showMaterial &&
            <td style={{textAlign: 'center'}}>
                <IconicLinks links={props.pdf} icon={faFilePdf} label={"PDF"}/>
                <IconicLinks links={props.github} icon={faGithub} label={"GitHub"}/>
                <IconicLinks links={props.python} icon={faPython} label={"Python"}/>
                <IconicLinks links={props.zip} icon={faFileZipper} label={"Zip"}/>
            </td>
        }
        <td style={{textAlign: 'center'}}><IconicLinks links={props.video} icon={faYoutube} label={"Video"}/></td>
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