import React, { FC } from 'react';
import * as ST from './styled';
import { ReactComponent as CompeteIcon } from 'assets/images/icon-complete.svg';
import Button from 'components/ui/button';

const Success: FC = () => (
  <ST.Success>
    <CompeteIcon />
    <ST.Title>Thank you!</ST.Title>
    <ST.Details>We&apos;ve added your card details</ST.Details>
    <Button label="Continue" onClick={() => console.log('continue')} />
  </ST.Success>
);

export default Success;
