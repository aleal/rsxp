import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Questao = styled.h1`
  font-size: 40px;
  color: #fff;
  text-align: center;
  margin-top: 10px;
`;

export const Alternativa = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /*align-items: center;*/

  span {

    color: #fff;
    font-size: 20px;
    margin: 25px 10px 10px 10px;
  }

  input {
    color: #fff;
    margin-left: 5px;
  }
`;

export const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #4682b4;
  min-height: 200px;
  min-width: 500px;
  max-width: 700px;
  border-radius: 25px;
  align-self: center;
  padding: 20px;
  justify-content: space-around;
  margin-top: 30px;
`;

export const ButtonSubmit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 45px;
  border-radius: 10px;
  margin: 20px;

  h4 {
    justify-content: center;
    /*align-self: center;*/
    color: #4682b4;
    font-size: 24px;
  }
`;