import React, { Dispatch, FC, SetStateAction } from 'react';
import * as ST from './styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Placeholders } from 'constants/Placeholders';

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
          .required('Card number required')
          .matches(/^[0-9]*$/i, 'Use numbers'),
        cardholderName: Yup.string()
          .required('Cardholder name required')
          .matches(/^[a-z]*$/i, 'Use latin'),
        expDate: Yup.string().required('Укажите имя.'),
        cvc: Yup.string().required('CVV required'),
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
        onBlur={() => handleCardholderName(values.cardholderName)}
      />
      <ST.Label>Card number</ST.Label>
      <ST.Field
        type="text"
        id="cardNumber"
        name="cardNumber"
        placeholder={Placeholders.CARD_NUMBER}
        value={values.cardNumber}
        onChange={handleChange}
        onBlur={() => handleCardNumber(values.cardNumber)}
      />
      <ST.Label>Exp. date (mm/yy)</ST.Label>
      <ST.Field
        type="text"
        id="expDateMM"
        name="expDateMM"
        placeholder={Placeholders.EXP_DATE_MM}
        value={values.expDateMM}
        onChange={handleChange}
        onBlur={() => handleExpDateMM(values.expDateMM)}
      />
      <ST.Field
        type="text"
        id="expDateYY"
        name="expDateYY"
        placeholder={Placeholders.EXP_DATE_YY}
        value={values.expDateYY}
        onChange={handleChange}
        onBlur={() => handleExpDateYY(values.expDateYY)}
      />
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
        onBlur={() => handleCvc(values.cvc)}
      />
      <ST.Button type="submit" onSubmit={() => handleSubmit()}>
        Confirm
      </ST.Button>
    </ST.Form>
  );
};

export default Form;
