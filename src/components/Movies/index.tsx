import React from 'react';

import Image1 from '../../assets/img1.jpg';
import Image2 from '../../assets/img2.jpg';
import Image3 from '../../assets/img3.jpg';
import Image4 from '../../assets/img4.jpg';
import Image5 from '../../assets/img5.jpg';
import Image6 from '../../assets/img6.jpg';
import Image7 from '../../assets/img7.jpg';
import Image8 from '../../assets/img8.jpg';
import Image9 from '../../assets/img9.jpg';

import { Container } from './styles';

const Movies: React.FC = () => {
  return (
    <Container>
      <div className="row">
        <div>
          <img src={Image1} alt="movie" />
        </div>
        <div>
          <img src={Image2} alt="movie" />
        </div>
        <div>
          <img src={Image3} alt="movie" />
        </div>
      </div>

      <div className="row">
        <div>
          <img src={Image4} alt="movie" />
        </div>
        <div>
          <img src={Image5} alt="movie" />
        </div>
        <div>
          <img src={Image6} alt="movie" />
        </div>
      </div>

      <div className="row">
        <div>
          <img src={Image7} alt="movie" />
        </div>
        <div>
          <img src={Image8} alt="movie" />
        </div>
        <div>
          <img src={Image9} alt="movie" />
        </div>
      </div>
    </Container>
  );
};

export default Movies;
