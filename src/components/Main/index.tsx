import React, { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import avatar from '../../assets/avatar.jpg';
import FacebookLight from '../../assets/icons-light-theme/facebook.svg';
import InstagramLight from '../../assets/icons-light-theme/instagram.svg';
import LinkedinLight from '../../assets/icons-light-theme/linkedin.svg';
import GithubLight from '../../assets/icons-light-theme/github.svg';

import FacebookDark from '../../assets/icons-dark-theme/facebook.svg';
import InstagramDark from '../../assets/icons-dark-theme/instagram.svg';
import LinkedinDark from '../../assets/icons-dark-theme/linkedin.svg';
import GithubDark from '../../assets/icons-dark-theme/github.svg';

import { Container, Header, Menu, Item, Footer } from './styles';

const Main: React.FC = () => {
  const { title } = useContext(ThemeContext);
  const [menu, setMenu] = useState({
    active: 'Action',
    items: ['Action', 'Comedy', 'Animated Movies', 'Drama', 'Horror'],
  });

  const handleMenu = (name: string) => {
    setMenu({ ...menu, active: name });
  };

  return (
    <Container>
      <Header>
        <img src={avatar} alt="avatar" />
        <h1 className="name">Sabrina Santos</h1>
        <h1 className="email">sabrinasantos@gmail.com</h1>
      </Header>

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

      {title === 'light' ? (
        <Footer>
          <a
            href="https://github.com/hiagopsilva"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={FacebookLight} alt="icon" />
          </a>
          <a
            href="https://github.com/hiagopsilva"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={InstagramLight} alt="icon" />
          </a>
          <a
            href="https://github.com/hiagopsilva"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedinLight} alt="icon" />
          </a>
          <a
            href="https://github.com/hiagopsilva"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GithubLight} alt="icon" />
          </a>
        </Footer>
      ) : (
        <Footer>
          <a
            href="https://github.com/hiagopsilva"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={FacebookDark} alt="icon" />
          </a>

          <a
            href="https://github.com/hiagopsilva"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={InstagramDark} alt="icon" />
          </a>

          <a
            href="https://github.com/hiagopsilva"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedinDark} alt="icon" />
          </a>

          <a
            href="https://github.com/hiagopsilva"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GithubDark} alt="icon" />
          </a>
        </Footer>
      )}
    </Container>
  );
};

export default Main;
