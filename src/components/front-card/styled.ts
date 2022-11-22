import styled from 'styled-components';
import { Colors } from 'constants/Colors';

export const FrontCard = styled.div<{ image: string }>`
  position: absolute;
  width: 447px;
  height: 245px;
  margin-left: 10%;
  margin-top: 10%;
  background: url(${(props) => props.image});
  color: ${Colors.WHITE};
  letter-spacing: 2px;
  display: flex;
  flex-direction: column;
`;

export const CardNumber = styled.span`
  margin-top: 130px;
  margin-left: 30px;
  font-size: 32px;
  width: 100%;
`;

export const SecondInfoRow = styled.div`
  display: flex;
  padding: 0 30px;
  justify-content: space-between;
  margin-top: 30px;
  font-size: 16px;
`;

export const CardholderName = styled.span`
  text-transform: uppercase;
`;

export const ExpDate = styled.span``;
