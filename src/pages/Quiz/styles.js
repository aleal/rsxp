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
  margin-top: 50px;
`;

export const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #4682b4;
  min-height: 200px;
  max-width: 700px;
  border-radius: 25px;
  align-self: center;
  padding: 20px;
  justify-content: space-around;
`;
