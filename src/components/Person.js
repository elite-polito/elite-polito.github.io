import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/free-solid-svg-icons'
import { faGithub, faTelegram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'


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
                            {props.email && <address><a href={"mailto:" + props.email}>{props.email}</a><br /></address>}
                        </small>
                    </div>
                </div>
            </div>
            <div className='card__footer' align='center'>


                {props.github &&
                    <>&nbsp;<a href={"http://github.com/" + props.github} title='GitHub'>
                        <FontAwesomeIcon icon={faGithub} className='fa-xl' /></a>&nbsp;</>}
                {props.telegram &&
                    <>&nbsp;<a href={"https://t.me/" + props.telegram} title='Telegram'>
                        <FontAwesomeIcon icon={faTelegram} className='fa-xl' /></a>&nbsp;</>}
                {props.linkedin &&
                    <>&nbsp;<a href={"https://www.linkedin.com/in/" + props.linkedin} title='LinkedIn'>
                        <FontAwesomeIcon icon={faLinkedin} className='fa-xl' /></a>&nbsp;</>}
                {props.twitter &&
                    <>&nbsp;<a href={"https://twitter.com/" + props.twitter} title='Twitter'>
                        <FontAwesomeIcon icon={faTwitter} className='fa-xl' /></a>&nbsp;</>}
                &nbsp;
            </div>
        </div>
    </div>
)
