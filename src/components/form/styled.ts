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
  font-size: 12px;
  font-weight: 600;
  margin-top: 20px;
`;

export const FieldWrapper = styled.div<{ error: boolean }>`
  display: flex;

  input {
    border: 1px solid
      ${(props) => (props.error ? Colors.RED : Colors.LIGHT_GRAYISH_VIOLET)};
    border-radius: 10px;
    padding: 8px 16px;
    outline: none;
    font-family: 'Space Grotesk', monospace;
    font-size: 18px;
    margin-top: 8px;
    transition: 0.2s linear;
    width: 100%;
    font-weight: 600;

    ::placeholder {
      color: ${Colors.LIGHT_GRAYISH_VIOLET};
    }

    &:focus {
      border: 1px solid ${Colors.DARK_GRAYISH_VIOLET};
    }
  }
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
  transition: 0.2s linear;

  &:focus {
    border: 1px solid ${Colors.DARK_GRAYISH_VIOLET};
  }
`;

export const ExtraInfo = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
`;

export const Expiration = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Dates = styled.div`
  display: flex;
  gap: 10px;

  input {
    width: 50px;
  }
`;

export const CVC = styled.div`
  display: flex;
  flex-direction: column;
  width: 51%;
`;

export const ErrorMessage = styled.span`
  color: ${Colors.RED};
  font-size: 12px;
  font-weight: 600;
  margin-top: 4px;
  margin-left: 2px;
`;

export const Button = styled.button`
  font-family: 'Space Grotesk', monospace;
  padding: 10px;
  color: ${Colors.WHITE};
  background: ${Colors.VERY_DARK_VIOLET};
  border-radius: 8px;
  margin-top: 40px;
  font-size: 18px;
  cursor: pointer;
`;
