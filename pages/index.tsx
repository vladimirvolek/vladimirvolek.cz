import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
    padding: 20px;
`;

const Title = styled.div`
    font-weight: bold;
    font-size: 20pt;
`;

const Link = styled.a``;

const bornYear = 1991;

const main = () => (
    <Layout>
        <Title>Vladimír Volek</Title>
        <Link href="https://www.instagram.com/vladimirvolek/">Instagram</Link>
        <Link href="https://www.linkedin.com/in/vladimirvolek">LinkedIn</Link>
        <Link href="https://www.facebook.com/vladimirvolek/">Facebook</Link>
    </Layout>
);

export default main;
