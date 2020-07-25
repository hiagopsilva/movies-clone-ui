import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.secundary};
    font-size: 14px;
    color: ${props => props.theme.colors.textPrimary};
    font-family: Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;

    div.App {
      display: flex;
    }

    div.App div.content {
      padding: 32px 32px 0px;
      flex: 1;
    }
  }
`;
