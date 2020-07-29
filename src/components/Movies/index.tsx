import React from 'react';

import Image1 from '../../assets/movies/img1.jpg';
import Image2 from '../../assets/movies/img2.jpg';
import Image3 from '../../assets/movies/img3.jpg';
import Image4 from '../../assets/movies/img4.jpg';
import Image5 from '../../assets/movies/img5.jpg';
import Image6 from '../../assets/movies/img6.jpg';
import Image7 from '../../assets/movies/img7.jpg';
import Image8 from '../../assets/movies/img8.jpg';
import Image9 from '../../assets/movies/img9.jpg';

import { Container } from './styles';

const Movies: React.FC = () => {
  return (
    <Container>
      <div className="row">
        <div>
          <img src={Image1} alt="movie1" />
        </div>
        <div>
          <img src={Image2} alt="movie2" />
        </div>
        <div>
          <img src={Image3} alt="movie3" />
        </div>
      </div>

      <div className="row">
        <div>
          <img src={Image4} alt="movie4" />
        </div>
        <div>
          <img src={Image5} alt="movie5" />
        </div>
        <div>
          <img src={Image6} alt="movie6" />
        </div>
      </div>

      <div className="row">
        <div>
          <img src={Image7} alt="movie7" />
        </div>
        <div>
          <img src={Image8} alt="movie8" />
        </div>
        <div>
          <img src={Image9} alt="movie9" />
        </div>
      </div>
    </Container>
  );
};

export default Movies;
