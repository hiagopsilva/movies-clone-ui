import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

interface Props {
  toogleTheme(): void;
}

const Navigation: React.FC<Props> = ({ toogleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  return (
    <Container>
      <div className="navigation">
        <div className="title">
          <h1>Action</h1>
        </div>

        <div className="sub-navigation">
          <h1 className="activated">All</h1>
          <h1>Movies</h1>
          <h1>Series</h1>
        </div>
      </div>

      <Switch
        onChange={toogleTheme}
        checked={title === 'light'}
        checkedIcon={false}
        uncheckedIcon={false}
        offColor={colors.offColorSwitch}
        onColor={colors.onColorSwitch}
      />
    </Container>
  );
};

export default Navigation;
