import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: #4682B4;
  padding: 0px 20px;
  border-bottom-width: 20px;
  border-color: #fff;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h4 {
    color: #fff;
  }

  svg {
    color: #fff;
    width: 46px;
    height: auto;
    margin: 10px;
  }
`;

export const UserCategoria = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    color: #fff;
  }

  svg {
    color: #fff;
    width: 28px;
    height: auto;
    margin: 10px;
  }
`;

export const UserXp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    color: #fff;
  }

  svg {
    color: #fff;
    width: 28px;
    height: auto;
    margin: 10px;
  }
`;

export const Avatar = styled.img`
  height: 46px;
  width: 46px;
  margin: 0px 10px;
`;

export const UserPontuacao = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

export const RankingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    color: #fff;
    margin-bottom: 10px;
  }

  svg {
    color: #fff;
    width: 32px;
    height: auto;
    margin: 5px 0px;
  }
`;

export const RankingButton = styled.button.attrs({
  type: 'submit',
})``;
