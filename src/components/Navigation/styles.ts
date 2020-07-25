import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  div.navigation {
    height: 120px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  div.title {
    display: flex;
    align-items: center;

    font-size: 20px;
  }

  div.sub-navigation {
    display: flex;

    h1 {
      margin-right: 32px;
      padding-bottom: 6px;
      color: ${props => props.theme.colors.textSecundary};

      cursor: pointer;
    }

    h1.activated {
      color: ${props => props.theme.colors.textPrimary};
      border-bottom: 8px solid ${props => props.theme.colors.textPrimary};
    }
  }
`;
