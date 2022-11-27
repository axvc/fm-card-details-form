import styled from 'styled-components';
import { Colors } from 'constants/Colors';

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
`;

export const CardNumber = styled.span`
  margin-top: 60px;
  margin-left: 30px;
  font-size: 30px;
  width: 100%;
  letter-spacing: 2.5px;
`;

export const SecondInfoRow = styled.div`
  display: flex;
  padding: 0 30px;
  justify-content: space-between;
  margin-top: 25px;
  font-size: 14px;
`;

export const CardholderName = styled.span`
  text-transform: uppercase;
`;

export const ExpDate = styled.span``;
