import styled from 'styled-components';
import { Colors } from 'constants/Colors';

export const BackCard = styled.div<{ image: string }>`
  position: relative;
  margin-top: 7%;
  margin-left: 15%;
  width: 447px;
  height: 245px;
  background: url(${(props) => props.image});
  color: ${Colors.WHITE};
  letter-spacing: 2px;
  animation: fade-in 0.3s linear;
  box-shadow: 0 0 100px 2px rgba(0, 0, 0, 0.29);
  border-radius: 10px;
`;

export const CVV = styled.span`
  margin-top: 111px;
  margin-left: 360px;
  font-size: 16px;
  width: 100%;
  position: absolute;
`;
