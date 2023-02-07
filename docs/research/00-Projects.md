---
description: 'Research Projects and Collaborations'
---

export const ProjectCard = ({title, icon, url, children, period}) => {
    return (
        <div className="card margin-bottom--sm" >
            <div className="card__header">
                <div className="avatar">
                    {icon && <img
                        className="avatar__photo avatar__photo--xl"
                        src={icon}/>}
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

## International Associations

<div className="card-projects">
<ProjectCard
    icon='https://elite.polito.it/images/stories/elite/Logos/acm-fca-logo.png'
    title='ACM-FCA'
    url='https://acm-fca.org/'
    period='2017-today'>
    <p>ACM <a href="https://acm-fca.org">Future of Computing Academy</a>&nbsp;(ACM-FCA)</p>
</ProjectCard>
<ProjectCard
    icon='http://elite.polito.it/images/stories/elite/Logos/COGAIN_logo_85x83.gif'
    title='COGAIN'
    url='http://www.cogain.org/'
    period='2008-2012'>
    <p>The <a href="http://www.cogain.org">COGAIN Association</a></p>
</ProjectCard>
<ProjectCard
    icon='http://elite.polito.it/images/stories/elite/Logos/KNX_scientific.gif'
    title='KNX Scientific'
    url='http://www.knx.org/knx-partners/scientific/about/'
    period='2010-2016'>
    <p><a href="http://www.knx.org/knx-partners/scientific/about/">KNX&nbsp;Scientific </a>Partnership</p>
</ProjectCard>
</div>

## European projects

<div className="card-projects">
<ProjectCard
    icon={undefined}
    title='SIFIS - HOME'
    url='https://www.sifis-home.eu/'
    period='2020 - today'>
    <p>The <a href="https://www.sifis-home.eu">SIFIS-Home</a>&nbsp;project (Secure Interoperable Full-stack Internet
        of things for smart Home)&nbsp;aims at providing a secure-by-design and consistent software framework for
        improving resilience of Interconnected Smart Home Systems at all stack levels.</p>
    <p>The project is coordinated by <a href="http://www.cnr.it/">CNR</a> (Consiglio Nazionale delle Ricerche) and
        the e-Lite group is participating as part of the Department of Control and Computer Engineering.</p>
</ProjectCard>
<ProjectCard
    icon='https://elite.polito.it/images/stories/elite/Logos/optimus_logo_420.png'
    title='OPTIMUS'
    url='http://optimus-smartcity.eu/'
    period='2014-2016'>
    <p>The <a href="http://optimus-smartcity.eu/">Optimus</a> project (OPTIMising the energy USe in cities with smart decision support systems) aims at developing methodologies and technologies for helping cities to make smart energy decisions. The role of the e-Lite group is to define the main IT Architecture of the data collection and processing infrastructure.</p>
    <p>The project is coordinated by <a href="http://www.epu.ntua.gr/">NTUA</a> (Greece) and is developed in collaboration with the Department of Energy of Politecnico di Torino.</p>
</ProjectCard>
</div>


## National or Regional projects

<div className="card-projects">
    <ProjectCard
        icon='https://elite.polito.it/images/stories/elite/Logos/logo-batti-72ppi.png'
        title='Batti il 5'
        url='https://percorsiconibambini.it/batti5/scheda-progetto/'
        period='2019-2021' >
        <p>The project "<a href="https://percorsiconibambini.it/batti5/scheda-progetto/">Batti il cinque</a>" (gimme a high-five) is a national initiative, funded by the Foundation <a href="https://www.conibambini.org/">Con i Bambini </a>and involving 47 partners around Italy, clustered in five different regions of activity.</p>
        <p>In the region of Torino, the activities are coordinated by <a href="https://www.fondazionemirafiori.it/">Fondazione della Comunità di Mirafiori ONLUS </a>and focus on innovative training for children of primary and middle schools. The role of the e-Lite group is to organize innovative teaching events (for teachers and for children) on the topics of <em>Introduction to coding</em>, <em>Robotics</em>, and <em>Advanced coding</em>.</p>
    </ProjectCard>
</div>

## Industry Collaborations

## Non-profit organizations

## Public Bodies and Institutions