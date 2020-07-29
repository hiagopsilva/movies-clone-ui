import React, { useContext, useState } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Container, NavigationContainer, Menu, Item } from './styles';

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
      <NavigationContainer>
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
      </NavigationContainer>

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
