import styled from 'styled-components';
import { Colors } from 'constants/Colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export const Label = styled.span`
  color: ${Colors.VERY_DARK_VIOLET};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 16px;
  margin-top: 24px;
`;

export const Field = styled.input`
  border: 1px solid ${Colors.LIGHT_GRAYISH_VIOLET};
  border-radius: 10px;
  padding: 8px 16px;
  outline: none;
  font-family: 'Space Grotesk', monospace;
  letter-spacing: 1px;
  font-size: 18px;
  margin-top: 8px;
`;

export const Button = styled.button`
  font-family: 'Space Grotesk', monospace;
  padding: 10px;
  color: ${Colors.WHITE};
  background: ${Colors.VERY_DARK_VIOLET};
  border-radius: 8px;
  margin-top: 40px;
  font-size: 18px;
`;
