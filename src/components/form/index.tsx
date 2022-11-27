import React, { Dispatch, FC, SetStateAction } from 'react';
import * as ST from './styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import valid from 'card-validator';
import { Placeholders } from 'constants/Placeholders';
import { Messages } from 'constants/Messages';
import { Masks } from 'constants/Masks';
import CustomMaskedInput from 'components/ui/masked-input';
import Button from 'components/ui/button';

enum Fields {
  cardNumber = 'cardNumber',
  cardholderName = 'cardholderName',
  expDateMM = 'expDateMM',
  expDateYY = 'expDateYY',
  cvc = 'cvc',
}

enum Tests {
  number = 'test-number',
  name = 'test-name',
  month = 'test-month',
  year = 'test-year',
  cvc = 'test-cvc',
}

interface Props {
  handleCardNumber: Dispatch<SetStateAction<string>>;
  handleCardholderName: Dispatch<SetStateAction<string>>;
  handleExpDateMM: Dispatch<SetStateAction<string>>;
  handleExpDateYY: Dispatch<SetStateAction<string>>;
  handleCvc: Dispatch<SetStateAction<string>>;
  handleSuccess: Dispatch<SetStateAction<boolean>>;
}

const Form: FC<Props> = ({
  handleCardNumber,
  handleCardholderName,
  handleExpDateMM,
  handleExpDateYY,
  handleCvc,
  handleSuccess,
}) => {
  const {
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched,
    handleChange,
    validateField,
    isValid,
  } = useFormik({
    initialValues: {
      cardNumber: '',
      cardholderName: '',
      expDateMM: '',
      expDateYY: '',
      cvc: '',
    },
    validationSchema: Yup.object().shape({
      cardNumber: Yup.string().test(
        Tests.number,
        Messages.INVALID_CARD_NUMBER,
        (value) => valid.number(value).isValid,
      ),
      cardholderName: Yup.string().test(
        Tests.name,
        Messages.INVALID_CARDHOLDER_NAME,
        (value) => valid.cardholderName(value).isValid,
      ),
      expDateMM: Yup.string().test(
        Tests.month,
        Messages.INVALID_EXPIRATION_DATE,
        (value) => valid.expirationMonth(value).isValid,
      ),
      expDateYY: Yup.string().test(
        Tests.year,
        Messages.INVALID_EXPIRATION_DATE,
        (value) => valid.expirationYear(value).isValid,
      ),
      cvc: Yup.string().test(
        Tests.cvc,
        Messages.INVALID_CVC,
        (value) => valid.cvv(value).isValid,
      ),
    }),
    onSubmit: () => {
      handleSuccess(isValid);
    },
  });

  const onBlur = (
    e: React.FocusEvent<HTMLInputElement>,
    id: Fields,
    valueHandler: Dispatch<SetStateAction<string>>,
  ) => {
    handleBlur(e);
    validateField(id).then();
    !errors[id] && valueHandler(values[id]);
  };

  return (
    <ST.Form>
      <ST.Label>Cardholder name</ST.Label>
      <ST.FieldWrapper
        error={!!(touched.cardholderName && errors.cardholderName)}
      >
        <input
          type="text"
          id={Fields.cardholderName}
          name={Fields.cardholderName}
          placeholder={Placeholders.CARDHOLDER_NAME}
          value={values.cardholderName}
          onChange={handleChange}
          onBlur={(e) => onBlur(e, Fields.cardholderName, handleCardholderName)}
        />
      </ST.FieldWrapper>
      <ST.ErrorMessage>
        {touched.cardholderName && errors.cardholderName}
      </ST.ErrorMessage>
      <ST.Label>Card number</ST.Label>
      <ST.FieldWrapper error={!!(touched.cardNumber && errors.cardNumber)}>
        <CustomMaskedInput
          mask={Masks.CARD_NUMBER}
          id={Fields.cardNumber}
          name={Fields.cardNumber}
          placeholder={Placeholders.CARD_NUMBER}
          value={values.cardNumber}
          onChange={handleChange}
          onBlur={(e) => onBlur(e, Fields.cardNumber, handleCardNumber)}
        />
      </ST.FieldWrapper>
      <ST.ErrorMessage>
        {touched.cardNumber && errors.cardNumber}
      </ST.ErrorMessage>
      <ST.ExtraInfo>
        <ST.Expiration>
          <ST.Label>Exp. date (mm/yy)</ST.Label>
          <ST.Dates>
            <ST.FieldWrapper error={!!(touched.expDateMM && errors.expDateMM)}>
              <CustomMaskedInput
                mask={Masks.DATE}
                id={Fields.expDateMM}
                name={Fields.expDateMM}
                placeholder={Placeholders.EXP_DATE_MM}
                value={values.expDateMM}
                onChange={handleChange}
                onBlur={(e) => onBlur(e, Fields.expDateMM, handleExpDateMM)}
              />
            </ST.FieldWrapper>
            <ST.FieldWrapper error={!!(touched.expDateYY && errors.expDateYY)}>
              <CustomMaskedInput
                mask={Masks.DATE}
                id={Fields.expDateYY}
                name={Fields.expDateYY}
                placeholder={Placeholders.EXP_DATE_YY}
                value={values.expDateYY}
                onChange={handleChange}
                onBlur={(e) => onBlur(e, Fields.expDateYY, handleExpDateYY)}
              />
            </ST.FieldWrapper>
          </ST.Dates>
          <ST.ErrorMessage>
            {(touched.expDateMM || touched.expDateYY) &&
              (errors.expDateMM || errors.expDateYY)}
          </ST.ErrorMessage>
        </ST.Expiration>
        <ST.CVC>
          <ST.Label>CVC</ST.Label>
          <ST.FieldWrapper error={!!(touched.cvc && errors.cvc)}>
            <CustomMaskedInput
              mask={Masks.CVC}
              id={Fields.cvc}
              name={Fields.cvc}
              placeholder={Placeholders.CVC}
              value={values.cvc}
              onChange={handleChange}
              onBlur={(e) => onBlur(e, Fields.cvc, handleCvc)}
            />
          </ST.FieldWrapper>
          <ST.ErrorMessage>{touched.cvc && errors.cvc}</ST.ErrorMessage>
        </ST.CVC>
      </ST.ExtraInfo>
      <Button onClick={() => handleSubmit()} label="Confirm" />
    </ST.Form>
  );
};

export default Form;
