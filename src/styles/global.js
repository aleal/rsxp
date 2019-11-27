import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
  margin: 0px;
  padding: 0px;
  outline: 0px;
  box-sizing: border-box;
}

html, body, #app {
  min-height: 100%;
  
}

body {
  background-color: #3999;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
}

body, input, button {
  color: #222;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
}

button {
  cursor: pointer;
}
`;
