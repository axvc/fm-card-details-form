import styled from 'styled-components';
import { Colors } from 'constants/Colors';

export const BackCard = styled.div<{ image: string }>`
  position: absolute;
  width: 447px;
  height: 245px;
  margin-left: 15%;
  margin-top: 30%;
  background: url(${(props) => props.image});
  color: ${Colors.WHITE};
  letter-spacing: 2px;
`;

export const CVV = styled.span`
  margin-top: 111px;
  margin-left: 360px;
  font-size: 16px;
  width: 100%;
  position: absolute;
`;
