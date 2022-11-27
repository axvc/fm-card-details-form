import styled from 'styled-components';
import { Colors } from 'constants/Colors';

export const Button = styled.button`
  font-family: 'Space Grotesk Medium', monospace;
  padding: 10px;
  color: ${Colors.WHITE};
  background: ${Colors.VERY_DARK_VIOLET};
  border-radius: 8px;
  margin-top: 40px;
  font-size: 18px;
  cursor: pointer;
  width: 100%;
`;
