import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import {
  Container,
  Contend,
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
        <Link to="/Jornada/1">
          <JornadaButton>Facebook</JornadaButton>
        </Link>
        <Link to="/Jornada/2">
          <JornadaButton>Facebook</JornadaButton>
        </Link>
        <Link to="/Jornada/3">
          <JornadaButton>Facebook</JornadaButton>
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
