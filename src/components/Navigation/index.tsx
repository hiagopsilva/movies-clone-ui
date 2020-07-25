import React from 'react';
import Switch from 'react-switch';
import { Container } from './styles';

const Navigation: React.FC = () => {
  return (
    <Container>
      <div className="navigation">
        <div className="title">
          <h1>Action</h1>
        </div>

        <div className="sub-navigation">
          <h1>All</h1>
          <h1>Movies</h1>
          <h1>Series</h1>
        </div>
      </div>

      <Switch
        onChange={() => {}}
        checked
        checkedIcon={false}
        uncheckedIcon={false}
        // offColor={shade(0.1, colors.primary)}
        // onColor={colors.secundary}
      />
    </Container>
  );
};

export default Navigation;
