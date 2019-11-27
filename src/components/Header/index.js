import React from 'react';

import { FaUserCircle, FaStar, FaTrophy } from 'react-icons/fa';

import { GiCutDiamond } from 'react-icons/gi';

import { connect } from 'react-redux';
import {
  Container,
  UserContainer,
  UserCategoria,
  UserPontuacao,
  UserXp,
  RankingContainer,
  RankingButton,
} from './styles';

function Header(props) {
  function handleRanking() {
    console.log('Go to Ranking!');
  }
  const { user } = props;
  return (
    <Container>
      <UserContainer>
        <FaUserCircle />
        <h4>{user.nome}</h4>
        <UserPontuacao>
          <UserCategoria>
            <GiCutDiamond />
            <h3>Prata</h3>
          </UserCategoria>
          <UserXp>
            <FaStar />
            <h3>XP {user.xp}</h3>
          </UserXp>
        </UserPontuacao>
      </UserContainer>
     
        <RankingButton>
          <FaTrophy />
          <h4>Ranking</h4>
        </RankingButton>
      {/*  
        <RankingContainer>
      </RankingContainer>*/}
    </Container>
  );
}
function mapStateToProps({ data: { user } }) {
  return {
    user,
  };
}

export default connect(mapStateToProps)(Header);
