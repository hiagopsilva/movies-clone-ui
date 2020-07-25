import React, { useContext } from 'react';
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

import { Container } from './styles';

const Main: React.FC = () => {
  const { title } = useContext(ThemeContext);

  return (
    <Container>
      <header>
        <img src={avatar} alt="avatar" />
        <h1 className="name">Sabrina Santos</h1>
        <h1 className="email">sabrinasantos@gmail.com</h1>
      </header>
      <div>
        <h1 className="activated">Action</h1>
        <h1>Comedy</h1>
        <h1>Animated Movies</h1>
        <h1>Drama</h1>
        <h1>Horror</h1>
      </div>

      {title === 'light' ? (
        <footer>
          <img src={FacebookLight} alt="icon" />
          <img src={InstagramLight} alt="icon" />
          <img src={LinkedinLight} alt="icon" />
          <img src={GithubLight} alt="icon" />
        </footer>
      ) : (
        <footer>
          <img src={FacebookDark} alt="icon" />
          <img src={InstagramDark} alt="icon" />
          <img src={LinkedinDark} alt="icon" />
          <img src={GithubDark} alt="icon" />
        </footer>
      )}
    </Container>
  );
};

export default Main;
