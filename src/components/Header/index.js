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
import { connect } from 'react-redux';
import {
  Container,
  UserContainer,
  Avatar,
  UserPontuacao,
  RankingContainer,
} from './styles';

import avatar from '../../assets/images/avatar_icon.jpg';

function Header(props) {
  function handleRanking() {
    console.log('Go to Ranking!');
  }
  const { user } = props;
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
        <Avatar src={avatar} alt="User" />
        <h4>{user.nome}</h4>
        <UserPontuacao>Prata XP {user.xp}</UserPontuacao>
      </UserContainer>
      <RankingContainer>
        <button type="button" onClick={handleRanking}>
          Ranking
        </button>
      </RankingContainer>
    </Container>
  );
}
function mapStateToProps({ data: { user } }) {
  return {
    user,
  };
}

export default connect(mapStateToProps)(Header);
