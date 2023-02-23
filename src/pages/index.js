import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Admonition from '@theme/Admonition';

import styles from './index.module.css';
// import logoFull from '@site/static/img/logo_elite_full.png';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero shadow--lw', styles.heroBanner)}>
            <div className="container">
                <div className="row">
                    <div className="col col--9">
                        {/*<p><img src={logoFull}/></p>*/}
                        <h1 className="hero__title">{siteConfig.title}</h1>
                        <p className="hero__subtitle">{siteConfig.tagline}</p>

                        <blockquote>The e-Lite research group develops and studies innovative technologies applied to interactive
                            applications. The spirit of the research is the integration of complex systems, based on the
                            interaction between humans and technology, in which the complexity gap is managed by
                            intelligent
                            software components.</blockquote>

                        <p>The main <Link to='/research/topics'>research areas</Link> are on the crossing of <b>Human-Computer
                            Interaction</b>, <b>Ubiquitous Computing</b>, and <b>Artificial Intelligence</b>.</p>
                        {/*<div className={styles.buttons}>*/}
                        {/*    <Link*/}
                        {/*        className="button button--secondary button--lg"*/}
                        {/*        to="/research">*/}
                        {/*        e-Lite Research*/}
                        {/*    </Link>*/}
                        {/*</div>*/}
                    </div>
                    <div className="col col--3">
                        <Admonition type="info" title={'Quick links'}>
                            <a href='/teaching/01txy-wa1-aj'>Web Applications I (A-J)</a><br/>
                            <a href='/teaching/01txy-wa1-kz'>Web Applications I (K-Z)</a><br/>
                            <a href='/teaching/03fyz-tdp'>Tecniche di Programmazione</a><br/>
                            <br/>
                            <a href='/thesis-offers'>Thesis offers</a>
                        </Admonition>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description={siteConfig.tagline}>
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
