import Link from '@docusaurus/Link'

export const ProjectCard = ({title, icon, url, children, period}) => {
    return (
        <div className="card margin-bottom--md" >
            <div className="card__header">
                <div className="avatar">
                    {icon && url && <Link to={url}><img alt={`${title} logo`} title={`${title} logo`}
                        width="120px"
                        src={require(`@site/docs/research/00-collaborative-projects/00-logos/${icon}`).default}/></Link>}
                    {icon && !url && <img alt={`${title} logo`} title={`${title} logo`}
                        width="120px"
                        src={require(`@site/docs/research/00-collaborative-projects/00-logos/${icon}`).default}/>}
                    <div className="avatar__intro">
                        {url ? <div className="avatar__name"><Link to={url}>{title}</Link></div>
                            : <div className="avatar__name">{title}</div>}
                    </div>
                </div>
            </div>
            <div className="card__body">{children}</div>
            <div className="card__footer badge badge--secondary">{period}</div>
        </div>
    )
}
