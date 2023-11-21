import { createGlobalStyle } from "styled-components";

const size = {
  mobile: "768px",
};

const device = {
  mobile: `(max-width: ${size.mobile})`,
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Instrument Serif', serif;
    overflow-x: hidden;

  }
`;

export { device };
export default GlobalStyle;
