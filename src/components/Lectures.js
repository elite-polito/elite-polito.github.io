import React, { createContext, useContext, useMemo } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faGithub, faPython } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf, faFileZipper } from '@fortawesome/free-solid-svg-icons'

const defaultTableContext = {
    defaultTeacher: undefined,
    defaultType: undefined,
    showMaterial: true,
    language: 'IT'
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
function IconicLinks({ links, label, icon }) {
    let i = 0;
    return (
        links ?
            ensureArray(links).map(item =>
                <a key={i++} href={item} title={label}><FontAwesomeIcon icon={icon} size="2x" className="icon-padding" /></a>)
            : null
    )
}


/**
 * Generates a single row of the course schedule.
 *
 * Accepts, as props (*all optional*):
 * - `date`
 * - `time`
 * - `type` (or defaults to `defaultType` set in `LectureTable` -- to suppress the default set to `''`)
 * - `topic` (alternatively the topic can be defined as the CHILDREN of the component)
 * - `pdf`, `python`, `zip`, `github`: link(s) to resources to go into the "Materiale" column (if enabled)
 * - `video`: link(s) to video lecture
 * - `teacher` (or defaults to `defaultTeacher` set in `LectureTable` -- to suppress the default set to `''`)
 * - `variant`: ovverrides the row background color, may be one of: primary, secondary, info, success, warning, danger (see https://infima.dev/docs/utilities/colors)
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

    return (<tr className={props.variant}>
        <td>{props.date}</td>
        <td>{props.time}</td>
        <td>{type}</td>
        <td>{props.topic}{props.children}</td>
        {tableContext.showMaterial &&
            <td className="text--center">
                <IconicLinks links={props.pdf} icon={faFilePdf} label={"PDF"} />
                <IconicLinks links={props.github} icon={faGithub} label={"GitHub"} />
                <IconicLinks links={props.python} icon={faPython} label={"Python"} />
                <IconicLinks links={props.zip} icon={faFileZipper} label={"Zip"} />
            </td>
        }
        <td className="text--center"><IconicLinks links={props.video} icon={faYoutube} label={"Video"} /></td>
        <td>{teacher}</td>
    </tr>)
}

function LectureDivider(props) {
    const tableContext = useContext(TableContext)
    const spanSize = tableContext.showMaterial ? 7 : 6

    return <tr className={props.variant}>
        <th colSpan={spanSize} className="text--left">{props.topic}{props.children}</th>
    </tr>
}

/**
 * Creates a table containing a sequence of `LectureRow` or `LectureDivider` elements.
 * 
 * May accept some optional props to set the defaults for table display:
 * - `language`: `'IT'` or `'EN'` used to localize strings
 * - `showMaterial` (default: `true`) if the 'Materiale/Resources' column should be shown
 * - `defaultTeacher`
 * - `defaultType`
 * 
 * @param {*} props 
 * @returns {JSX.Element}
 */
function LectureTable(props) {
    const tableOptions = useMemo(()=>({ ...defaultTableContext, ...props }), [defaultTableContext, props]) ;
    return (
        <TableContext.Provider value={tableOptions}>
            <LectureTableContent {...props} />
        </TableContext.Provider>
    )
}

function LectureTableContent(props) {
    const tableContext = useContext(TableContext)
    return <table>
        <thead>
            {tableContext.language.toUpperCase() == 'EN' ?
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
        <tbody>{props.children}</tbody>
    </table>

}

function ensureArray(x) {
    if (Array.isArray(x))
        return x
    else
        return [x]
}

export { LectureRow, LectureDivider, LectureTable }