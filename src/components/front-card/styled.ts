import styled from 'styled-components';
import { Colors } from 'constants/Colors';
import { Widths } from 'constants/Widths';

export const FrontCard = styled.div<{ image: string }>`
  position: relative;
  width: 447px;
  height: 245px;
  margin-top: 35%;
  background: url(${(props) => props.image});
  color: ${Colors.WHITE};
  letter-spacing: 2px;
  display: flex;
  flex-direction: column;
  animation: fade-in 0.3s linear;
  font-family: 'Space Grotesk', monospace;
  box-shadow: 0 0 100px 2px rgba(0, 0, 0, 0.29);
  border-radius: 10px;

  svg {
    overflow: visible;
    margin-left: 35px;
    margin-top: 30px;
  }

  @media (max-width: ${Widths.DESKTOP}) {
    position: absolute;
    top: 45%;
    left: 3%;
    width: 250px;
    height: 135px;
    margin-top: 0;
    margin-left: 0;
    background-size: cover;
    z-index: 1;

    svg {
      transform: scale(0.5);
      margin-left: 0;
      margin-top: 0;
    }
  }
`;

export const CardNumber = styled.span`
  margin-top: 60px;
  margin-left: 30px;
  font-size: 30px;
  width: 100%;
  letter-spacing: 2.5px;

  @media (max-width: ${Widths.DESKTOP}) {
    margin-top: 30px;
    margin-left: 15px;
    font-size: 16px;
  }
`;

export const SecondInfoRow = styled.div`
  display: flex;
  padding: 0 30px;
  justify-content: space-between;
  margin-top: 25px;
  font-size: 14px;

  @media (max-width: ${Widths.DESKTOP}) {
    font-size: 10px;
    margin-top: 12px;
    padding: 0 15px;
  }
`;

export const CardholderName = styled.span`
  text-transform: uppercase;
`;

export const ExpDate = styled.span``;
