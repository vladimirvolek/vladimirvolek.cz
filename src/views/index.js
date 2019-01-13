import React, { Component } from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader/root';
import colors from 'config/colors';

const Wrapper = styled.div`
    background: ${colors.pink};
    display: flex;
    min-height: 100vh;
    flex-direction: column;
`;

const Panel = styled.div`
    height: 70px;
    font-size: 4rem;
    background: red;
    overflow: hidden;
`;

const Marquee = styled.div`
    display: block;
    width: 200%;
    display: flex;
    position: relative;
    animation: marquee 10s linear infinite;

    &:hover {
        animation-play-state: paused;
    }
`;

const Link = styled.a`
    color: black;
    line-height: 55px;
    padding-bottom: 10px;
    
    &:hover {
        color: white
    }

    @media (max-width: 900px) {
        font-size: 3rem;
    }

    @media (max-width: 660px) {
        font-size: 2rem;
    }
`;

const Content = styled.div`
    flex: 1;
`;

const LinkWrapper = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    color: white;
`;

const App = () => (
    <Wrapper>
        <Content />
        <Panel>
            <Marquee>
                <LinkWrapper>
                    <Link target="_blank" href="https://github.com/vladimirvolek">Github</Link>
                </LinkWrapper>
                <LinkWrapper>
                    <Link target="_blank" href="https://instagram.com/vladimirvolek/">Instagram</Link>
                </LinkWrapper>
                <LinkWrapper>
                    <Link target="_blank" href="https://www.facebook.com/vladimirvolek">Facebook</Link>
                </LinkWrapper>
                <LinkWrapper>
                    <Link target="_blank" href="https://twitter.com/vladimirvolek">Twitter</Link>
                </LinkWrapper>
                <LinkWrapper>
                    <Link target="_blank" href="https://www.linkedin.com/in/vladimirvolek">LinkedIn</Link>
                </LinkWrapper>
                <LinkWrapper>
                    <Link target="_blank" href="https://github.com/vladimirvolek">Github</Link>
                </LinkWrapper>
                <LinkWrapper>
                    <Link target="_blank" href="https://instagram.com/vladimirvolek/">Instagram</Link>
                </LinkWrapper>
                <LinkWrapper>
                    <Link target="_blank" href="https://www.facebook.com/vladimirvolek">Facebook</Link>
                </LinkWrapper>
                <LinkWrapper>
                    <Link target="_blank" href="https://twitter.com/vladimirvolek">Twitter</Link>
                </LinkWrapper>
                <LinkWrapper>
                    <Link target="_blank" href="https://www.linkedin.com/in/vladimirvolek">LinkedIn</Link>
                </LinkWrapper>
            </Marquee>
        </Panel>
    </Wrapper>
);

export default hot(App);