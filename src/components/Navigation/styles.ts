import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  div.navigation {
    height: 100px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  div.title {
    display: flex;
    align-items: center;
  }

  div.sub-navigation {
    display: flex;

    h1 {
      margin-right: 32px;
    }
  }
`;
