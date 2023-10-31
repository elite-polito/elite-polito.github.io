import React from 'react'

export const ProjectCard = ({title, icon, url, children, period}) => {
    return (
        <div className="card margin-bottom--sm" >
            <div className="card__header">
                <div className="avatar">
                    {icon && url && <a href={url}><img alt={`${title} logo`} title={`${title} logo`}
                        width="120px"
                        src={require(`@site/docs/research/00-Projects-Logos/${icon}`).default}/></a>}
                    {icon && !url && <img alt={`${title} logo`} title={`${title} logo`}
                        width="120px"
                        src={require(`@site/docs/research/00-Projects-Logos/${icon}`).default}/>}
                    <div className="avatar__intro">
                        {url ? <div className="avatar__name"><a href={url}>{title}</a></div>
                            : <div className="avatar__name">{title}</div>}
                    </div>
                </div>
            </div>
            <div className="card__body">{children}</div>
            <div className="card__footer badge badge--secondary">{period}</div>
        </div>
    )
}
