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
  const {
    data: { jornadas },
  } = props;
  return (
    <Container>
      <Header />
      <Title>Vamos começar nossa jornada?</Title>
      <SubTitle>Escolha sua jornada!</SubTitle>
      <JornadaContainer>
        <JornadaButton>
          <Link to="/Jornada/0" title={jornadas[0].descricao}>
            <FaFacebookSquare />
            <h4>Facebook</h4>
          </Link>
        </JornadaButton>
        <JornadaButton>
          <Link to="/Jornada/1" title={jornadas[1].descricao}>
            <FaYoutubeSquare />
            <h4>Youtube</h4>
          </Link>
        </JornadaButton>
        <JornadaButton>
          <Link to="/Jornada/2" title={jornadas[2].descricao}>
            <FaGamepad />
            <h4>Flapbird</h4>
          </Link>
        </JornadaButton>
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
