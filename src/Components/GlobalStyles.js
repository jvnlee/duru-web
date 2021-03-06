import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    a {
        text-decoration: none;
        color: inherit;
    }
    input, textarea, button {
        all: unset;
    }
    * {
        box-sizing: border-box;
    }
    body {
        font-family: 'Noto Sans KR', 'Readex Pro';
        font-size: 14px;
        background-color: #0f111a;
        color: white;
    }
    p {
        font-weight: 300;
    }
    .active {
        border-bottom: 3px solid #00FF97;
    }
`;

export default GlobalStyles;
