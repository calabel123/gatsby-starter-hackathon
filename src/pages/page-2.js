import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import styled from 'styled-components';

const FancyH1 = styled.h1`
  color: purple;
  text-transform: uppercase;
`;

const SecondPage = () => (
  <Layout>
    <SEO title="ENGAGING OLDER ADULTS" />
    <FancyH1>TeMeMo Tell Me More</FancyH1>
    <p>STAY SOCIAL.  IT'S GOOD FOR YOU.</p>
    <p>Tell Me More our hightly interactive digital conpanion platform that improves user experience accesibility by proving older adults with customizable resources, entertaiment and social connections. </p>
    <Link to="/page-3">Go to page 3</Link>
  </Layout>
);

export default SecondPage;
