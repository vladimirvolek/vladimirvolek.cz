import { createGlobalStyle } from 'styled-components';
import colors from 'config/colors';
import reset from 'styled-reset';

import cursor from './cursor.png';
import FireWoodWoff from './FleshWound.woff';
import FireWoodWoff2 from './FleshWound.woff2';

const baseStyles = createGlobalStyle`
    ${reset}
    
    @font-face {
        font-family: 'FleshWound';
        src: url(${FireWoodWoff2}) format('woff2'),
            url(${FireWoodWoff}) format('woff');
        font-weight: 100;
        font-style: normal;
    }
    
    html, body {
        cursor: url(${cursor}), auto;
        width: 100%;
        height: 100%;
        position: relative;
        font-size: 14px;
        font-family: 'FleshWound';
        color: ${colors.TEXT};
    }

    * , *:before , *:after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
        padding: 0;
    }

    *::selection, *::-moz-selection, *:focus, *:active, *:active:focus,  {
        outline: 0 !important;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    a:focus,
    button:focus,
    input:focus,
    textarea:focus {
        outline: 0;
    }

    @keyframes marquee {
        0% { left: 0; }
        100% { left: -100%; }
    }
`;

export default baseStyles;
