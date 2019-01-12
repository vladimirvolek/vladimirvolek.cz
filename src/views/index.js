import React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader/root';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
`;

const Panel = styled.div`
    display: flex;
    flex-direction: column;
`;

const Link = styled.a`
    padding: 20px;
`;

const App = () => (
    <Wrapper>
        <Panel>
            <Link target="_blank" href="https://twitter.com/vladimirvolek">Twitter</Link>
            <Link target="_blank" href="https://www.linkedin.com/in/vladimirvolek">LinkedIn</Link>
            <Link target="_blank" href="https://github.com/vladimirvolek">Github</Link>
            <Link target="_blank" href="https://instagram.com/vladimirvolek/">Instagram</Link>
            <Link target="_blank" href="https://www.facebook.com/vladimirvolek">Facebook</Link>
        </Panel>
    </Wrapper>
);

export default hot(App);