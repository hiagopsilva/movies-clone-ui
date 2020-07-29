import styled from 'styled-components';

type PropType = {
  active?: boolean | undefined;
};

export const Container = styled.div`
  height: 100vh;
  width: 380px;
  background: ${props => props.theme.colors.background};
  color: #111011;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  border-bottom: 0.1px solid rgb(17, 16, 17, 0.2);
  padding: 32px;

  img {
    width: 110px;
    height: 92px;

    border-radius: 15px;
  }

  h1.name {
    font-size: 28px;
    color: ${props => props.theme.colors.textPrimary};
  }

  h1.email {
    font-size: 16px;
    color: ${props => props.theme.colors.textSecundary};
  }
`;

export const Menu = styled.div`
  padding: 32px 32px 90px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex: 1;

  color: ${props => props.theme.colors.textSecundary};
`;

export const Item = styled.h1.attrs((props: PropType) => ({
  active: props.active,
}))`
  margin-right: 32px;
  padding-bottom: 6px;
  font-size: 24px;

  color: ${props =>
    props.active === true
      ? props.theme.colors.textPrimary
      : props.theme.colors.textSecundary};

  &:hover {
    color: ${props => props.theme.colors.textPrimary};
    font-size: 32px;

    -webkit-transform: scale(0.8);
    transform: scale(1);
    transition: 0.5s;
  }

  cursor: pointer;
`;

export const Footer = styled.div`
  padding: 32px;
  display: flex;
  justify-content: space-between;

  img {
    width: 38px;
    height: 38px;

    cursor: pointer;
  }

  img:hover {
    -webkit-transform: scale(1.4);
    transform: scale(1.4);
    transition: 0.5s;
  }
`;
