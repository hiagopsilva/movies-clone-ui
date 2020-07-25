import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 380px;
  background: ${props => props.theme.colors.background};
  color: #111011;
  display: flex;
  flex-direction: column;

  header {
    border-bottom: 0.1px solid rgb(17, 16, 17, 0.2);
    padding: 32px;

    img {
      width: 110px;
      height: 92px;

      border-radius: 15px;
    }

    h1.name {
      font-size: 28px;
    }

    h1.email {
      font-size: 16px;
      color: ${props => props.theme.colors.textSecundary};
    }
  }

  div {
    padding: 32px 32px 90px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex: 1;

    color: ${props => props.theme.colors.textSecundary};

    h1 {
      font-size: 24px;
      cursor: pointer;

      transition: font-size 0.2s linear 0.1s;
    }

    h1.activated {
      color: ${props => props.theme.colors.textPrimary};
    }

    h1:hover {
      color: ${props => props.theme.colors.textPrimary};
      font-size: 32px;
    }
  }

  footer {
    padding: 32px;
    display: flex;
    justify-content: space-between;

    img {
      width: 38px;
      height: 38px;

      transition: width 0.2s linear 0.1s, height 0.2s linear 0.1s;
      cursor: pointer;
    }

    img:hover {
      width: 48px;
      height: 48px;
    }
  }
`;
