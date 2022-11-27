import styled from 'styled-components';
import { Widths } from 'constants/Widths';

export const App = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Background = styled.div<{ image: string; imageMobile: string }>`
  position: absolute;
  height: 100%;
  width: 483px;
  background: url(${(props) => props.image});
  background-size: cover;
  
  @media(max-width: ${Widths.DESKTOP}) {
    width: 100%;
    height: 240px;
    background: url(${(props) => props.imageMobile});
  }
}
`;

export const Cards = styled.div`
  position: absolute;
  height: 100%;
  width: 35%;
  left: 10%;

  @media (max-width: ${Widths.DESKTOP}) {
    width: 100%;
    height: 270px;
    left: 0;
  }
`;

export const FormWrapper = styled.div<{ success: boolean }>`
  margin-left: 483px;
  width: calc(100vw - 483px);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${Widths.DESKTOP}) {
    margin-left: 0;
    width: 100%;
    height: calc(100vh - 245px);
    padding-top: 245px;
    align-items: ${(props) => (props.success ? 'center' : 'start')};
  }
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
