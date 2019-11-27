import React from 'react';
import { 
  Container, 
  UserContainer,
  Avatar,
  UserPontuacao, 
  RankingContainer, 
} from './styles';

import avatar from '../../assets/images/avatar_icon.jpg'

export default function Header() {

  function handleRanking() {
    console.log('Go to Ranking!')
  }
  return (
   <Container>
     <UserContainer>
        <Avatar src={avatar} alt='User' />
        <h4>Nome Completo</h4>
        <UserPontuacao>
          Prata
          XP 345
        </UserPontuacao>
     </UserContainer>
     <RankingContainer>
      <button type="button" onClick={handleRanking}>Ranking</button>
     </RankingContainer>
  </Container>
  );
}
