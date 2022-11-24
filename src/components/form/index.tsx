import React, { Dispatch, FC, SetStateAction } from 'react';
import * as ST from './styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import valid from 'card-validator';
import { Placeholders } from 'constants/Placeholders';
import { Messages } from 'constants/Messages';

interface Props {
  handleCardNumber: Dispatch<SetStateAction<string>>;
  handleCardholderName: Dispatch<SetStateAction<string>>;
  handleExpDateMM: Dispatch<SetStateAction<string>>;
  handleExpDateYY: Dispatch<SetStateAction<string>>;
  handleCvc: Dispatch<SetStateAction<string>>;
}

const Form: FC<Props> = ({
  handleCardNumber,
  handleCardholderName,
  handleExpDateMM,
  handleExpDateYY,
  handleCvc,
}) => {
  const { handleSubmit, handleBlur, values, errors, touched, handleChange } =
    useFormik({
      initialValues: {
        cardNumber: '',
        cardholderName: '',
        expDateMM: '',
        expDateYY: '',
        cvc: '',
      },
      validationSchema: Yup.object().shape({
        cardNumber: Yup.string()
          .test(
            'test-number',
            Messages.INVALID_CARD_NUMBER,
            (value) => valid.number(value).isValid,
          )
          .required(Messages.REQUIRED_CARD_NUMBER),
        cardholderName: Yup.string()
          .test(
            'test-name',
            Messages.INVALID_CARDHOLDER_NAME,
            (value) => valid.cardholderName(value).isValid,
          )
          .required(Messages.REQUIRED_CARDHOLDER_NAME),
        expDateMM: Yup.string()
          .test(
            'test-month',
            Messages.INVALID_EXPIRATION_DATE,
            (value) => valid.expirationMonth(value).isValid,
          )
          .required(Messages.REQUIRED_EXPIRATION_DATE),
        expDateYY: Yup.string()
          .test(
            'test-year',
            Messages.INVALID_EXPIRATION_DATE,
            (value) => valid.expirationYear(value).isValid,
          )
          .required(Messages.REQUIRED_EXPIRATION_DATE),
        cvc: Yup.string()
          .test(
            'test-cvc',
            Messages.INVALID_CVC,
            (value) => valid.cvv(value).isValid,
          )
          .required(Messages.REQUIRED_CVC),
      }),
      onSubmit: (values) => {},
    });

  return (
    <ST.Form>
      <ST.Label>Cardholder name</ST.Label>
      <ST.Field
        type="text"
        id="cardholderName"
        name="cardholderName"
        placeholder={Placeholders.CARDHOLDER_NAME}
        value={values.cardholderName}
        onChange={handleChange}
        onBlur={() =>
          !(touched.cardholderName && errors.cardholderName) &&
          handleCardholderName(values.cardholderName)
        }
      />
      {touched.cardholderName && errors.cardholderName}
      <ST.Label>Card number</ST.Label>
      <ST.Field
        type="text"
        id="cardNumber"
        name="cardNumber"
        placeholder={Placeholders.CARD_NUMBER}
        value={values.cardNumber}
        onChange={handleChange}
        onBlur={() =>
          !(touched.cardNumber && errors.cardNumber) &&
          handleCardNumber(values.cardNumber)
        }
      />
      {touched.cardNumber && errors.cardNumber}
      <ST.ExtraInfo>
        <ST.Expiration>
          <ST.Label>Exp. date (mm/yy)</ST.Label>
          <ST.Dates>
            <ST.Field
              type="text"
              id="expDateMM"
              name="expDateMM"
              placeholder={Placeholders.EXP_DATE_MM}
              value={values.expDateMM}
              onChange={handleChange}
              onBlur={() =>
                !(touched.expDateMM && errors.expDateMM) &&
                handleExpDateMM(values.expDateMM)
              }
            />
            <ST.Field
              type="text"
              id="expDateYY"
              name="expDateYY"
              placeholder={Placeholders.EXP_DATE_YY}
              value={values.expDateYY}
              onChange={handleChange}
              onBlur={() =>
                !(touched.expDateYY && errors.expDateYY) &&
                handleExpDateYY(values.expDateYY)
              }
            />
          </ST.Dates>
          {(touched.expDateMM || touched.expDateYY) &&
            (errors.expDateMM || errors.expDateYY)}
        </ST.Expiration>
        <ST.CVC>
          <ST.Label>CVC</ST.Label>
          <ST.Field
            type="number"
            max="999"
            pattern="([0-9]|[0-9]|[0-9])"
            id="cvc"
            name="cvc"
            placeholder={Placeholders.CVC}
            value={values.cvc}
            onChange={handleChange}
            onBlur={() => !(touched.cvc && errors.cvc) && handleCvc(values.cvc)}
          />
        </ST.CVC>
        {touched.cvc && errors.cvc}
      </ST.ExtraInfo>
      <ST.Button type="button" onClick={() => handleSubmit()}>
        Confirm
      </ST.Button>
    </ST.Form>
  );
};

export default Form;
