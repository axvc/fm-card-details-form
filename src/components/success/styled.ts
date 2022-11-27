import styled from 'styled-components';
import { Colors } from 'constants/Colors';
import { Widths } from 'constants/Widths';

export const Success = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  animation: fade-in 0.3s linear;

  @media (max-width: ${Widths.DESKTOP}) {
    width: 90%;
  }
`;

export const Title = styled.span`
  font-size: 30px;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin-top: 30px;
`;

export const Details = styled.span`
  margin-top: 20px;
  color: ${Colors.DARK_GRAYISH_VIOLET};
`;
