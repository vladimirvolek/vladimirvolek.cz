import React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader/root';

const Wrapper = styled.button`
    border: 1px solid red;
`;

const App = () => (
    <Wrapper>
        Page
    </Wrapper>
);

export default hot(App);