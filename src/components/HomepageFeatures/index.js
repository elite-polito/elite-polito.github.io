import React from 'react';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";

const FeatureList = [
    {
        title: 'Publications',
        icon: '📚',
        description: (<>
            Our publications are available through <Link to={'https://iris.polito.it/'}>PORTO@Iris</Link>, the open repository of publications produced by the
            scientific community of Politecnico di Torino.
        </>),
        link: '/research/Publications'
    },
    {
        title: 'Projects and Collaborations',
        icon: '🚀',
        description: (<>
            We actively collaborate with international associations, non-profit and public institutions, as well as industrial partners. Have a look at our current and past collaborations!
        </>),
        link: '/research/Projects'

    },
    {
        title: 'Research Topics',
        icon: '💡',
        description: (<>
            Discover our research topics and our commitment to the Open Source community, throught the software tool we realize. Check out our research!
        </>),
        link: '/research/Topics'

    },
];

function Feature({title, icon, description, link}) {
    return (
        <div className='col col--4'>
            <div className="card responsive-card">
                <div className="text--center padding--md">
                    <h1 className="margin--none">{icon}</h1>
                    <h3 className="card__header"><Link to={link}><span style={{textTransform: 'uppercase'}}>{title}</span></Link></h3>
                    <p className="card__body">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
