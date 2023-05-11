import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Admonition from '@theme/Admonition';
import { useWindowSize } from '@docusaurus/theme-common';

import styles from './index.module.css';

function NewsCard({postInfo}) {
    return(
        <div className="col col--4">
            <div className={clsx('card', styles.newsItem)}>
            {postInfo.assets.image && <div className="card__image">
            <Link to={postInfo.metadata.permalink}><img
                src={postInfo.assets.image}
                alt={postInfo.metadata.frontMatter.image_alt}
                /></Link>
            </div>}
            <div className="card__body">
                <h4><Link to={postInfo.metadata.permalink}>{postInfo.metadata.title}</Link></h4>
                <small>{postInfo.metadata.description}</small>
            </div>
            <div className="card__footer">
                <Link className="button button--primary button--outline button--block" to={postInfo.metadata.permalink}>Read more</Link>
            </div>
            </div>
        </div>
    );
}

function NewsContainer({recentPosts}) {
    return (
        <>
            <div className="row">
                <div className="col col--9">
                    <h1 className={clsx(styles.newsCards)}><Link to='/news'>Latest News</Link></h1>
                </div>
            </div>
            <div className={clsx('row', styles.newsCards)}>
                {recentPosts.map(({ content: postInfo }) => (
                    <NewsCard postInfo={postInfo} key={postInfo.metadata.permalink}/>
                ))}
            </div>
        </>
    );
}

function NewsContainerMobile({recentPosts}) {
    return(
        <div className="row">
            <div className="col col--9">
                <Admonition type='note' icon='📰' title={'Latest News'}>
                    <ul>
                    {recentPosts.map(({ content: postInfo }) => (
                        <li key={postInfo.metadata.permalink}><Link to={postInfo.metadata.permalink}>{postInfo.metadata.title}</Link></li>
                    ))}
                    </ul>
                    <Link to='/news' className='text--right'>All the news...</Link>
                </Admonition>
            </div>
        </div>
    );
}

function HomepageHeader({recentPosts}) {
    const windowSize = useWindowSize();

    // Desktop news visible on hydration: need SSR rendering 
    const isDesktop = windowSize === 'desktop' || windowSize === 'ssr'; 

    // Mobile news not visible on hydration: can avoid SSR rendering 
    const isMobile = windowSize === 'mobile';

    return(
        <header className={clsx('shadow--lw padding-vert--lg', styles.heroBanner)}>
        <div className="container">
            {isDesktop && <NewsContainer recentPosts={recentPosts} />}
            {isMobile && <NewsContainerMobile recentPosts={recentPosts} />}
        </div>
    </header>
    );
}


export default function Home({recentPosts}) {
    const {siteConfig} = useDocusaurusContext();
   
    return (
        <Layout
            title='Home'
            description={siteConfig.tagline}>
            <HomepageHeader recentPosts={recentPosts}/>
            <main>
                <div className="container">
                    <div className="row margin-top--lg padding-vert--lg">
                        <div className="col col--9">
                            <h1>{siteConfig.tagline}</h1>

                            <blockquote>The e-Lite research group develops and studies innovative technologies applied to interactive
                                applications. The spirit of the research is the integration of complex systems, based on the
                                interaction between humans and technology, in which the complexity gap is managed by
                                intelligent
                                software components.</blockquote>

                            <p>The main <Link to='/research/topics'>research areas</Link> are on the crossing of <b>Human-Computer
                                Interaction</b>, <b>Ubiquitous Computing</b>, and <b>Artificial Intelligence</b>.</p>
                        </div>
                        <div className="col col--3">
                            <Admonition type="info" title={'Quick links'}>
                                <a href='/teaching/01txy-wa1-ah'>Web Applications I (A-H)</a><br/>
                                <a href='/teaching/01txy-wa1-iz'>Web Applications I (I-Z)</a><br/>
                                <a href='/teaching/03fyz-tdp'>Tecniche di Programmazione</a><br/>
                                <br/>
                                <a href='/thesis-offers'>Thesis offers</a>
                            </Admonition>
                        </div>
                    </div>
                </div>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
