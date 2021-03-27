import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Sidebar from '../components/sidebar/Sidebar';

import Developing from '../components/Developing';

const Intro = () => (
  <Layout>
    <SEO title="Intro" />
    <div className="index-main">
      <div className="sidebar px-4 py-2">
        <Sidebar />
      </div>
      <div className="post-list-main">
        <Developing />
      </div>
    </div>
  </Layout>
);

export default Intro;
