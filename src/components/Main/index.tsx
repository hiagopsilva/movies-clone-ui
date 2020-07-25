import React from 'react';

import avatar from '../../assets/avatar.jpg';
import Facebook from '../../assets/icons-light-theme/facebook.svg';
import Instagram from '../../assets/icons-light-theme/instagram.svg';
import Linkedin from '../../assets/icons-light-theme/linkedin.svg';
import Github from '../../assets/icons-light-theme/github.svg';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <header>
        <img src={avatar} alt="" />
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

      <footer>
        <img src={Facebook} alt="icon" />
        <img src={Instagram} alt="icon" />
        <img src={Linkedin} alt="icon" />
        <img src={Github} alt="icon" />
      </footer>
    </Container>
  );
};

export default Main;
