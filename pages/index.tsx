import React from 'react';
import { BsFacebook, BsLinkedin, BsInstagram } from 'react-icons/bs';

const iconSize = 40;

const main = () => (
    <div className="layout">
        <div className="title">Vladimír Volek</div>
        <div className="socials">
            <a target="_blank" href="https://www.instagram.com/vladimirvolek/">
                <div className="icon">
                    <BsInstagram size={iconSize} color={'white'} />
                </div>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/vladimirvolek">
                <div className="icon">
                    <BsLinkedin size={iconSize} color={'white'} />
                </div>
            </a>
            <a target="_blank" href="https://www.facebook.com/vladimirvolek/">
                <div className="icon">
                    <BsFacebook size={iconSize} color={'white'} />
                </div>
            </a>
        </div>
        <style jsx>{`
            .layout {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100%;
            }
            .socials {
                display: flex;
            }
            .icon {
                padding: 10px;
            }
            .title {
                text-transform: uppercase;
                font-weight: bold;
                font-size: 50pt;
            }
        `}</style>
        <style jsx global>{`
            body,
            h1,
            h2,
            h3,
            h4,
            h5 {
                color: white;
            }
            html {
                color: white;
                background: blue;
                font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue',
                    'Helvetica', 'Arial', sans-serif;
                margin: 0 auto;
                padding: 10px;
                color: blue;
            }
        `}</style>
    </div>
);

export default main;
