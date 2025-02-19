import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="ENGAGING OLDER ADULTS" />
    <h1>HELLO! THIS IS YOUR COMPANION SITE</h1>
    <p>Welcome to your new Digital Friend: TeMeMo -Tell Me More.</p>
    <p>We are a VIRTUAL community building a series of cloud-based innovative API's to promote social engagement, lifestyle decisions and supported health service solutions</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
