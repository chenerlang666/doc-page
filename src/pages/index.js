import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import './style.css'

// TODO: To be modified.
const features = [
  {
    title: <>合肥一六八中学 (2013-2016)</>,
    imageUrl: 'img/schools/168_logo.png',
    description: (
      <>
        <a href="http://www.hf168.net/Home/NewIndex">合肥一六八中学</a>创办于2002年，是一所年轻而充满活力、享誉省内外的现代化寄宿制学校，隶属合肥市教育局。占地300亩，13.6644万平米。布局合理，环境优美，设计理念新，分区科学，设施一流。<br/>
        <div style={{'text-align':'center','font-style':'italic'}}>
        <br/> 以诚以坚，惟志惟勤。<br/>
        <br/> 择善修身，立学济世。<br/>
        <br/> 乐道守正，励行致远。<br/>
        <br/> 博学笃志，切问近思。<br/>
        </div>
      </>
    ),
  },
  {
    title: <>南方科技大学 (2016-2020)</>,
    imageUrl: 'img/schools/SUSTech_University_Logo.png',
    description: (
      <>
        <a href="https://www.sustech.edu.cn">南方科技大学</a>（简称：南科大，英语：Southern University of Science and Technology，缩写：SUSTech）是一所建校于2012年，被确定为国家高等教育综合改革试验校，位于中国广东省深圳市的全日制公立高等院校，致力于成为世界一流研究型大学。其创校之初目的在于提升地区科技水平，探索中国教育改革的道路，创建具有中国特色的现代大学制度，培养创新型人才，适配特区经济发展。南方科技大学是当代中国大陆第一所自授文凭（仅第一年招生）的大学，同时也是大陆地区最早探索将大学章程写入法律的高等院校（类似香港法定大学的做法）。
      </>
    ),
  },
  {
    title: <>National University of Singapore, School of Computing (2020-?)</>,
    imageUrl: 'img/schools/soc_logo.png',
    description: (
      <>
        The NUS <a href="https://www.comp.nus.edu.sg">School of Computing</a> traces its roots back to the Nanyang University Department of Computer Science that was established in 1975 – the first of its kind in Singapore. Since then, we have developed into one of the leading computing schools in the world, with faculty members who are both internationally recognised researchers and inspiring teachers.
        <br/><br/>
        <b>I'm currently in <a href="https://www.comp.nus.edu.sg/~ngne/">NGNE</a> program under School of Computing. If everything goes fine, I gonna continue my master degree in Computing here.</b>
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 aria-label="CodePen">
            {Array.from(siteConfig.title).map(char=>(
              <span data-text={char} className="big--char">{char}</span>
            ))}
          </h1>
          <p className={classnames('hero__subtitle neon')}>{siteConfig.tagline}</p>
          
          <div className={styles.buttons}>
            <Link
              className={classnames('element--hover',
                'button',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/about')}>
              README
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
