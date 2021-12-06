import { createGlobalStyle } from "styled-components";
import NotoSans300Woff2 from "../fonts/noto-sans-kr-v21-korean-300.woff2";
import NotoSans300Woff from "../fonts/noto-sans-kr-v21-korean-300.woff";
import NotoSans400Woff2 from "../fonts/noto-sans-kr-v21-korean-regular.woff2";
import NotoSans400Woff from "../fonts/noto-sans-kr-v21-korean-regular.woff";
import NotoSans500Woff2 from "../fonts/noto-sans-kr-v21-korean-500.woff2";
import NotoSans500Woff from "../fonts/noto-sans-kr-v21-korean-500.woff";
import ReadexPro300Woff2 from "../fonts/readex-pro-v5-latin-300.woff2";
import ReadexPro300Woff from "../fonts/readex-pro-v5-latin-300.woff";
import ReadexPro400Woff2 from "../fonts/readex-pro-v5-latin-regular.woff2";
import ReadexPro400Woff from "../fonts/readex-pro-v5-latin-regular.woff";
import ReadexPro500Woff2 from "../fonts/readex-pro-v5-latin-500.woff2";
import ReadexPro500Woff from "../fonts/readex-pro-v5-latin-500.woff";

const FontStyles = createGlobalStyle`
    @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 300;
    unicode-range: U+AC00-D7A3, U+0020-002F, U+003A-0040, U+005B-0060, U+007B-007E;
    src: local(''),
        url(${NotoSans300Woff2}) format('woff2'),
        url(${NotoSans300Woff}) format('woff');
    }
    
    @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    unicode-range: U+AC00-D7A3, U+0020-002F, U+003A-0040, U+005B-0060, U+007B-007E;
    src: local(''),
        url(${NotoSans400Woff2}) format('woff2'),
        url(${NotoSans400Woff}) format('woff');
    }
    
    @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    unicode-range: U+AC00-D7A3, U+0020-002F, U+003A-0040, U+005B-0060, U+007B-007E;
    src: local(''),
        url(${NotoSans500Woff2}) format('woff2'),
        url(${NotoSans500Woff}) format('woff');
    }
    
    @font-face {
    font-family: 'Readex Pro';
    font-style: normal;
    font-weight: 300;
    src: local(''),
        url(${ReadexPro300Woff2}) format('woff2'),
        url(${ReadexPro300Woff}) format('woff');
    }
    
    @font-face {
    font-family: 'Readex Pro';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url(${ReadexPro400Woff2}) format('woff2'),
        url(${ReadexPro400Woff}) format('woff');
    }
    
    @font-face {
    font-family: 'Readex Pro';
    font-style: normal;
    font-weight: 500;
    src: local(''),
        url(${ReadexPro500Woff2}) format('woff2'),
        url(${ReadexPro500Woff}) format('woff');
    }
`;

export default FontStyles;
