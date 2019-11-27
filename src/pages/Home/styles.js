import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 30px;
  color: #fff;
  text-align: center;
  margin-top: 40px;
`;

export const SubTitle = styled.h3`
  font-size: 24px;
  color: #fff;
  text-align: center;
  margin: 30px 0px 30px 0px;
`;

export const Teste = styled.div`
  background-color: #f00;
  min-height: 200px;
  max-width: 700px;
  align-self: center;
`;

export const JornadaContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  min-height: 200px;
  max-width: 700px;
  border-radius: 25px;
  align-self: center;
  padding: 20px;
  justify-content: space-around;
`;

export const JornadaButton = styled.button.attrs({
  type: 'submit',
})`
  background-color: #3999;
  border: 0;
  padding: 0 15px;
  margin: 30px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    margin: 10px;
    color: #fff;
  }

  svg {
    margin-top: 10px;
    color: #fff;
    width: 100px;
    height: auto;
  }
`;
