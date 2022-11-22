import React, { useState } from 'react';
import * as ST from './styled';
import Background from 'assets/images/bg-main-desktop.png';
import FrontCard from 'components/front-card';
import BackCard from 'components/back-card';
import Form from 'components/form';
import { Requisites } from 'constants/Requisites';

const App = () => {
  const [cardNumber, setCardNumber] = useState<string>(Requisites.CARD_NUMBER);
  const [cardholderName, setCardholderName] = useState<string>(
    Requisites.CARDHOLDER_NAME,
  );
  const [expDateMM, setExpDateMM] = useState<string>(Requisites.EXP_DATE_MM);
  const [expDateYY, setExpDateYY] = useState<string>(Requisites.EXP_DATE_YY);
  const [cvc, setCvc] = useState<string>(Requisites.CVC);

  return (
    <ST.App className="App">
      <ST.Background image={Background} />
      <FrontCard
        cardNumber={cardNumber}
        cardholderName={cardholderName}
        expDateMM={expDateMM}
        expDateYY={expDateYY}
      />
      <BackCard cvc={cvc} />
      <ST.FormWrapper>
        <Form
          handleCardNumber={setCardNumber}
          handleCardholderName={setCardholderName}
          handleExpDateMM={setExpDateMM}
          handleExpDateYY={setExpDateYY}
          handleCvc={setCvc}
        />
      </ST.FormWrapper>
    </ST.App>
  );
};

export default App;
