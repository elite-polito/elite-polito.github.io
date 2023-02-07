import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";

const FeatureList = [
    {
        title: 'Publications',
        description: (<>
            Our publications are available through <a href={'https://iris.polito.it/'}>PORTO@Iris</a>, the open repository of publications produced by the
            scientific community of Politecnico di Torino.
        </>),
        link: '/research/Publications'
    },
    {
        title: 'Projects and Collaborations',
        description: (<>
            We actively collaborate with international associations, non-profit and public institutions, as well as
            industrial partners. Have a look at our current and past collaborations!
        </>),
        link: '/research/Projects'

    },
    {
        title: 'Research Topics',
        description: (<>
            We are committed with the Open Source community. Most of our software is freely available under Open Source
            licenses. Check out our downloads area!
        </>),
        link: '/research/Topics'

    },
];

function Feature({title, description, link}) {
    return (
        <div className={clsx('col col--4 ')}>

            <div className={'card margin-md'}>
            <div className="text--center padding--md">
                <h3 className="card__header"><Link to={link}><span style={{textTransform: 'uppercase'}}>{title}</span></Link></h3>
                <p className="card__body">{description}</p>
            </div>
            <div className="card__footer text--right">
                <button className="button button--link"><Link to={link}>Read more...</Link></button>
            </div>
            </div>
        </div>
    )
        ;
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
