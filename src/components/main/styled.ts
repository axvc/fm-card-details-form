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

export const FormWrapper = styled.div`
  margin-left: 483px;
  width: calc(100vw - 483px);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Attribution = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 12px;
`;

export const AttributionRow = styled.p`
  margin: 0;
`;

export const Link = styled.a`
  text-decoration: none;
`;
