import React, { useContext, useState } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Container, Menu, Item } from './styles';

interface Props {
  toogleTheme(): void;
}

const Navigation: React.FC<Props> = ({ toogleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  const [menu, setMenu] = useState({
    active: 'All',
    items: ['All', 'Movies', 'Series'],
  });

  const handleMenu = (name: string) => {
    setMenu({ ...menu, active: name });
  };

  return (
    <Container>
      <div className="navigation">
        <div className="title">
          <h1>Action</h1>
        </div>
        <Menu>
          {menu.items.map(item => (
            <Item
              onClick={() => handleMenu(item)}
              key={item}
              active={menu.active === item}
            >
              {item}
            </Item>
          ))}
        </Menu>
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
