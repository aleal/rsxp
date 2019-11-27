import React from 'react';

<<<<<<< HEAD
import { FaFacebookSquare, FaYoutubeSquare, FaGamepad } from 'react-icons/fa';

=======
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
>>>>>>> 69cc20925593c3e9f2e92a34c3a6d46ef0888da1
import Header from '../../components/Header';
import {
  Container,
  Title,
  SubTitle,
  JornadaContainer,
  JornadaButton,
<<<<<<< HEAD
=======
  Teste,
>>>>>>> 69cc20925593c3e9f2e92a34c3a6d46ef0888da1
} from './styles';

import { setData } from '../../redux/actions';

function Home(props) {
  const { data } = props;
  return (
    <Container>
      <Header />
      <Title>Vamos começar nossa jornada?</Title>
      <SubTitle>Escolha sua jornada!</SubTitle>
      <JornadaContainer>
<<<<<<< HEAD
        <JornadaButton onClick={() => handleJornada('facebook')}>
          <FaFacebookSquare />
          <h4>Facebook</h4>
        </JornadaButton>
        <JornadaButton onClick={() => handleJornada('youtube')}>
          <FaYoutubeSquare />
          <h4>Youtube</h4>
        </JornadaButton>
        <JornadaButton onClick={() => handleJornada('flapbird')}>
          <FaGamepad />
          <h4>Flapbird</h4>
        </JornadaButton>
=======
        <Link to="/Jornada/1">
          <JornadaButton>Facebook</JornadaButton>
        </Link>
        <Link to="/Jornada/2">
          <JornadaButton>Facebook</JornadaButton>
        </Link>
        <Link to="/Jornada/3">
          <JornadaButton>Facebook</JornadaButton>
        </Link>
>>>>>>> 69cc20925593c3e9f2e92a34c3a6d46ef0888da1
      </JornadaContainer>
    </Container>
  );
}
function mapStateToProps({ data }) {
  console.log(data);
  return {
    data,
  };
}
export default connect(mapStateToProps, { setData })(Home);
