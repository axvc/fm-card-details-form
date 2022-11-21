import styled from 'styled-components';

export const App = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Background = styled.div<{ image: string }>`
  position: absolute;
  height: 100%;
  width: 483px;
  background: url(${(props) => props.image});
  background-size: cover;
`;

export const FrontCard = styled.div<{ image: string }>`
  position: absolute;
  width: 447px;
  height: 245px;
  margin-left: 10%;
  margin-top: 10%;
  background: url(${(props) => props.image});
`;

export const BackCard = styled.div<{ image: string }>`
  position: absolute;
  width: 447px;
  height: 245px;
  margin-left: 15%;
  margin-top: 25%;
  background: url(${(props) => props.image});
`;
