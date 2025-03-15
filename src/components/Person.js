import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/free-solid-svg-icons'
import { faGithub, faTelegram, faXTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import Link from "@docusaurus/Link";


export const Person = (props) => (

    <div className="col col--4 padding--none">
        <div className={'card margin--xs'}>
            <div className="card__body">
                <div className="avatar avatar--vertical">
                    <img className="avatar__photo avatar__photo--xl"
                        src={props.img || "/img/people/VOID.webp"}
                        alt={'Picture of ' + props.name}
                    />
                    <div className="avatar__intro">
                        <div className="avatar__name">{props.name}</div>
                        <small className="avatar__subtitle">{props.role}<br />
                            {props.email && <address><Link to={"mailto:" + props.email}>{props.email}</Link><br /></address>}
                        </small>
                    </div>
                </div>
            </div>
            <div className='card__footer' align='center'>


                {props.github &&
                    <>&nbsp;<Link to={"http://github.com/" + props.github} title='GitHub'>
                        <FontAwesomeIcon icon={faGithub} className='fa-xl' /></Link>&nbsp;</>}
                {props.linkedin &&
                    <>&nbsp;<Link to={"https://www.linkedin.com/in/" + props.linkedin} title='LinkedIn'>
                        <FontAwesomeIcon icon={faLinkedin} className='fa-xl' /></Link>&nbsp;</>}
                {props.youtube &&
                    <>&nbsp;<Link to={"https://www.youtube.com/" + props.youtube} title='YouTube'>
                        <FontAwesomeIcon icon={faYoutube} className='fa-xl' /></Link>&nbsp;</>}
                {props.telegram &&
                    <>&nbsp;<Link to={"https://t.me/" + props.telegram} title='Telegram'>
                        <FontAwesomeIcon icon={faTelegram} className='fa-xl' /></Link>&nbsp;</>}
                {props.twitter &&
                    <>&nbsp;<Link to={"https://twitter.com/" + props.twitter} title='Twitter'>
                        <FontAwesomeIcon icon={faXTwitter} className='fa-xl' /></Link>&nbsp;</>}
                {props.website &&
                    <>&nbsp;<Link to={props.website} title='Website'>
                        <FontAwesomeIcon icon={faGlobe} className='fa-xl' /></Link>&nbsp;</>}
                &nbsp;
            </div>
        </div>
    </div>
)
