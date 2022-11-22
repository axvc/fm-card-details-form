import React, { FC } from 'react';
import * as ST from './styled';
import BackCardBackground from 'assets/images/bg-card-back.png';

interface Props {
  cvc?: string;
}

const BackCard: FC<Props> = ({ cvc }) => (
  <ST.BackCard image={BackCardBackground}>
    <ST.CVV>{cvc}</ST.CVV>
  </ST.BackCard>
);

export default BackCard;
