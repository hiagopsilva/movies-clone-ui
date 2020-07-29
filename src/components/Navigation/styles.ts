import styled from 'styled-components';

type PropType = {
  active?: boolean | undefined;
};

export const Container = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
`;

export const NavigationContainer = styled.div`
  height: 120px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div.title {
    display: flex;
    align-items: center;

    font-size: 20px;
  }
`;

export const Menu = styled.div`
  display: flex;
`;

export const Item = styled.h1.attrs((props: PropType) => ({
  active: props.active,
}))`
  margin-right: 32px;
  padding-bottom: 6px;
  color: ${props =>
    props.active === true
      ? props.theme.colors.textPrimary
      : props.theme.colors.textSecundary};

  border-bottom: ${props =>
    props.active === true
      ? `8px solid ${props.theme.colors.textPrimary}`
      : 'none'};

  cursor: pointer;
`;
