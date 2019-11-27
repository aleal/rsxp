import React from 'react';

import Header from '../../components/Header';
import JornadaItem from '../../components/JornadaItem';

import { Container, JornadaTitle } from './styles';

import facebookIcon from '../../assets/images/facebook_icon.png';

export default function Jornada() {
  return (
    <Container>
      <Header />
      <JornadaItem iconSrc={facebookIcon} title="Facebook" />
    </Container>
  );
}
