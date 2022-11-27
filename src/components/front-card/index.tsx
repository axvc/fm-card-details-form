import React, { FC } from 'react';
import * as ST from './styled';
import { ReactComponent as CardLogo } from 'assets/images/card-logo.svg';
import FrontCardBackground from 'assets/images/bg-card-front.png';

interface Props {
  cardNumber: string;
  cardholderName: string;
  expDateMM: string;
  expDateYY: string;
}

const FrontCard: FC<Props> = ({
  cardNumber,
  cardholderName,
  expDateMM,
  expDateYY,
}) => (
  <ST.FrontCard image={FrontCardBackground}>
    <CardLogo />
    <ST.CardNumber>{cardNumber}</ST.CardNumber>
    <ST.SecondInfoRow>
      <ST.CardholderName>{cardholderName}</ST.CardholderName>
      <ST.ExpDate>
        {expDateMM}/{expDateYY}
      </ST.ExpDate>
    </ST.SecondInfoRow>
  </ST.FrontCard>
);

export default FrontCard;
