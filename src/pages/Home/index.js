import React from 'react';

import { FaFacebookSquare, FaYoutubeSquare, FaGamepad } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import {
  Container,
  Title,
  SubTitle,
  JornadaContainer,
  JornadaButton,
  Teste,
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
        <Link to="/Jornada/0">
          <JornadaButton>
            <FaFacebookSquare />
            <h4>Facebook</h4>
          </JornadaButton>
        </Link>
        <Link to="/Jornada/1">
          <JornadaButton>
            <FaYoutubeSquare />
            <h4>Youtube</h4>
          </JornadaButton>
        </Link>
        <Link to="/Jornada/2">
          <JornadaButton>
            <FaGamepad />
            <h4>Flapbird</h4>
          </JornadaButton>
        </Link>
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
