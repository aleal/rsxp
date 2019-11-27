import React from 'react';

import { FaUserCircle, FaStar, FaTrophy } from 'react-icons/fa';

import { GiCutDiamond } from 'react-icons/gi';

import {
  Container,
  UserContainer,
  UserCategoria,
  UserPontuacao,
  UserXp,
  RankingContainer,
  RankingButton,
} from './styles';

export default function Header() {
  function handleRanking() {
    console.log('Go to Ranking!')
  }
  return (
    <Container>
      <UserContainer>
        <FaUserCircle />
        <h4>Nome Completo</h4>
        <UserPontuacao>
          <UserCategoria>
            <GiCutDiamond />
            <h3>Prata</h3>
          </UserCategoria>
          <UserXp>
            <FaStar />
            <h3>XP 345</h3>
          </UserXp>
        </UserPontuacao>
      </UserContainer>
      <RankingContainer>
        <RankingButton onClick={handleRanking}>
          <FaTrophy />
          <h4>Ranking</h4>
        </RankingButton>
      </RankingContainer>
    </Container>
  );
}
