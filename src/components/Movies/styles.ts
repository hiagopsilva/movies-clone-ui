import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  div.row {
    width: 100%;
    display: flex;
    justify-content: space-between;

    padding-top: 28px;
  }
  div {
    width: 280px;

    img {
      width: 100%;
      height: 125px;
      border-radius: 15px;

      cursor: pointer;
    }
  }

  div img:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    transition: 0.5s;
  }
`;
