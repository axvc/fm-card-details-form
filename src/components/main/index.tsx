import React, { useState } from 'react';
import * as ST from './styled';
import Background from 'assets/images/bg-main-desktop.png';
import BackgroundMobile from 'assets/images/bg-main-mobile.png';
import FrontCard from 'components/front-card';
import BackCard from 'components/back-card';
import Form from 'components/form';
import { Requisites } from 'constants/Requisites';
import Success from '../success';

const App = () => {
  const [cardNumber, setCardNumber] = useState<string>(Requisites.CARD_NUMBER);
  const [cardholderName, setCardholderName] = useState<string>(
    Requisites.CARDHOLDER_NAME,
  );
  const [expDateMM, setExpDateMM] = useState<string>(Requisites.EXP_DATE_MM);
  const [expDateYY, setExpDateYY] = useState<string>(Requisites.EXP_DATE_YY);
  const [cvc, setCvc] = useState<string>(Requisites.CVC);
  const [success, setSuccess] = useState<boolean>(false);

  return (
    <ST.App className="App">
      <ST.Background image={Background} imageMobile={BackgroundMobile} />
      <ST.Cards>
        <FrontCard
          cardNumber={cardNumber}
          cardholderName={cardholderName}
          expDateMM={expDateMM}
          expDateYY={expDateYY}
        />
        <BackCard cvc={cvc} />
      </ST.Cards>
      <ST.FormWrapper success={success}>
        {success ? (
          <Success />
        ) : (
          <Form
            handleCardNumber={setCardNumber}
            handleCardholderName={setCardholderName}
            handleExpDateMM={setExpDateMM}
            handleExpDateYY={setExpDateYY}
            handleCvc={setCvc}
            handleSuccess={setSuccess}
          />
        )}
      </ST.FormWrapper>
      <ST.Attribution>
        <ST.AttributionRow>
          Challenge by{' '}
          <ST.Link href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </ST.Link>
        </ST.AttributionRow>
        <ST.AttributionRow>
          Coded by <ST.Link href="https://github.com/axvc">@axvc</ST.Link>
        </ST.AttributionRow>
      </ST.Attribution>
    </ST.App>
  );
};

export default App;
