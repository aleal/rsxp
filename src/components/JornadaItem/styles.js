import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 15px;
  margin: 5px 0px;

  svg {
    color: #4682B4;
    width: 52px;
    height: auto;
  }

  h3 {
    color: #4682B4;
  }
`;

export const JornadaContainer = styled.div`
  justify-content: center;
  align-self: center;
`;

export const JornadaItemTitle = styled.h4`
  text-align: center;
`;