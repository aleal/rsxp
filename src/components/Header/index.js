import React from 'react';
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
