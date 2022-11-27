import React, { FC, MouseEventHandler } from 'react';
import * as ST from './styled';

interface Props {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<Props> = ({ label, onClick }) => (
  <ST.Button type="button" onClick={onClick}>
    {label}
  </ST.Button>
);

export default Button;
