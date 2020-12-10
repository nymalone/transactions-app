import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import Spinner from "../../atoms/Spinner";

import { createTransaction } from "../../../store/actions";

import {
  formatCpf,
  formatCardNumber,
  formatExpireDate,
  formatCvv,
} from "../../../utils/stringUtils";
import { formatCurrency } from "../../../utils/formatNumbers";

import { FormContainer, FormContainerFlex } from "./styles.js";
import { SpinnerContainer, ButtonContainer, Error } from "../../pages/Home/styles";

const Form = (props) => {
  const dispatch = useDispatch();

  const { newTransactionRoute } = props;

  const onlyLetters = /^[a-zA-Z]\D+$/;

  const [credit_card_holder_name, setName] = useState("");
  const [buyer_document, setCpf] = useState("");
  const [credit_card_number, setCardNumber] = useState("");
  const [credit_card_expiration_date, setExpireDate] = useState("");
  const [credit_card_cvv, setCvv] = useState("");
  const [amount, setTransactionValue] = useState("");
  const [disableButton, setDisableButton] = useState(true);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeCpf = (e) => {
    const formattedcpf = formatCpf(e.target.value);
    setCpf(formattedcpf);
  };

  const onChangeCardNumber = (e) => {
    const formattedCardNumber = formatCardNumber(e.target.value);
    setCardNumber(formattedCardNumber);
  };

  const onChangeExpireDate = (e) => {
    const formattedExpireDate = formatExpireDate(e.target.value);
    setExpireDate(formattedExpireDate);
  };

  const onChangeCvv = (e) => {
    const formattedCvv = formatCvv(e.target.value);
    setCvv(formattedCvv);
  };

  const onChangeTransactionValue = (e) => {
    let formattedTransactionValue = e.target.value.replace(/[^\d]/g, "");
    if (formattedTransactionValue) {
      formattedTransactionValue = formatCurrency(
        Number(formattedTransactionValue) / 100
      );
    }

    setTransactionValue(formattedTransactionValue);
    setDisableButton(e.target.value === "");
  };

  const createTransactionLoading = useSelector(
    (transactions) => transactions.createTransactionLoading
  );

  const createTransactionError = useSelector(
    (transactions) => transactions.createTransactionError?.message
  );

  const handleSubmit = () => {
    dispatch(
      createTransaction({
        credit_card_holder_name,
        buyer_document,
        credit_card_number,
        credit_card_cvv,
        credit_card_expiration_date,
        amount,
      })
    );
    newTransactionRoute();
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      cpf: "",
      cardNumber: "",
      expirationDate: "",
      cvv: "",
      transactionValue: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(2, "O campo deve conter 2 ou mais caracteres")
        .required("Campo obrigatório")
        .matches(onlyLetters, "Só é permitido letras"),
      cpf: Yup.string()
        .min(11, "O campo deve conter 11 caracteres")
        .required("Campo obrigatório"),
      cardNumber: Yup.string()
        .min(16, "O campo deve conter 16 caracteres")
        .required("Campo obrigatório"),
      expirationDate: Yup.string().required("Campo obrigatório"),
      cvv: Yup.string().required("Campo obrigatório"),
      transactionValue: Yup.number().required("Campo obrigatório"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <FormContainer>
        <form onSubmit={formik.handleSubmit}>
          <Input
            type="text"
            name="name"
            required
            label="Nome da pessoa compradora"
            value={credit_card_holder_name}
            onChange={onChangeName}
          />
          <Input
            type="text"
            name="cpf"
            required
            label="CPF"
            value={buyer_document}
            onChange={onChangeCpf}
          />
          <Input
            type="text"
            name="cardNumber"
            required
            label="N° do cartão"
            value={credit_card_number}
            onChange={onChangeCardNumber}
          />
          <FormContainerFlex>
            <Input
              type="text"
              name="expirationDate"
              required
              label="Data de expiração"
              value={credit_card_expiration_date}
              onChange={onChangeExpireDate}
            />
            <Input
              type="text"
              name="cvv"
              required
              space
              label="CVV"
              value={credit_card_cvv}
              onChange={onChangeCvv}
            />
          </FormContainerFlex>
          <Input
            type="text"
            name="transactionValue"
            required
            label="Valor da transação"
            value={amount}
            onChange={onChangeTransactionValue}
          />

          {createTransactionLoading && (
            <>
              <SpinnerContainer>
                <Spinner />
              </SpinnerContainer>
            </>
          )}
          {!createTransactionError && <Error>{createTransactionError}</Error>}
        </form>
      </FormContainer>
      <ButtonContainer>
        <Button onClick={handleSubmit} disabled={disableButton}>
          Criar transação
        </Button>
      </ButtonContainer>
    </>
  );
};

Form.propTypes = {
  newTransactionRoute: PropTypes.func.isRequired,
};

export default Form;
