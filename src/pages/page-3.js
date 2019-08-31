import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import styled from 'styled-components';

const FancyH1 = styled.h1`
  color: purple;
  text-transform: uppercase;
`;

const ThirdPage = () => (
  <Layout>
    <SEO title="TeMeMo is our highly interactive digital companion platform that provides older adults with customizable resources, entreteiment and connections"  />
    <FancyH1>POTENTIAL HEALTH RISKS OF SOCIAL ISOLATION INCLUDE:</FancyH1>
    <p>-Higher risk of Heart Disease
       - Cognitive Decline
       -Higher risk of Anxiety and Depression.</p>
     <p>MANTAINING AN ACTIVE SOCIAL LIFE COULD HELP YOU STAY HEALTHY.</p>
     <p>SO HOW CAN YOU STAY SOCIAL</p>
     <p>- Join a coffee group or book club
        - Stay in touch with friends and family, and try to visit them regularly.
        - Volunteer in your community.
        - Take a class
        - Dont't forget the importance of phone calls, snails mails and chats.
       </p>

    <Link to="/page-4">Go to page 4</Link>
  </Layout>
);

export default ThirdPage;
