import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { GoPlus } from "react-icons/go";

import { fetchTransactionsList } from "../../../store/actions";
import { formatCurrency } from "../../../utils/formatNumbers";
import { formatData } from "../../../utils/formatData";
import { formatDate } from "../../../utils/stringUtils";

import Button from "../../atoms/Button";
import Spinner from "../../atoms/Spinner";

import {
  Header,
  Label,
  Value,
  Body,
  Container,
  LeftContent,
  User,
  TransactionDate,
  RightContent,
  Status,
  Amount,
  ButtonContainer,
  SpinnerContainer,
  Error,
} from "./styles.js";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const newTransactionRoute = () => history.push("/new-transaction");

  useEffect(() => {
    dispatch(fetchTransactionsList());
  }, [dispatch]);

  const transactions = useSelector(
    (transactions) => transactions?.transactions
  );

  const errorTransactions = useSelector(
    (transactions) => transactions.error?.message
  );

  const transactionsLoading = useSelector(
    (transactions) => transactions.loading
  );

  const totalTransactions = transactions.length;

  const totalValueTransaction = transactions.reduce((prev, cur) => {
    if (typeof cur.amount === "string") {
      let amount = cur.amount.toString().replace(/[^\d]/g, "") / 100;
      return prev + parseInt(amount);
    } else {
      return prev + cur.amount;
    }
  }, 0);

  return (
    <>
      <Header>
        <Label>Número de transações</Label>
        <Value>{totalTransactions}</Value>
        <Label>Valor total</Label>
        <Value>{formatCurrency(totalValueTransaction)}</Value>
      </Header>
      <Body>
        {transactions.map((transaction) => {
          const data = formatData(transaction);
          return (
            <div key={data.id}>
              <Container>
                <LeftContent>
                  <User>{data.name}</User>
                  <TransactionDate>{formatDate(data.date)}</TransactionDate>
                </LeftContent>
                <RightContent>
                  <Status>{data.status}</Status>
                  <Amount>{formatCurrency(data.value)}</Amount>
                </RightContent>
              </Container>
            </div>
          );
        })}

        {transactionsLoading && (
          <>
            <SpinnerContainer>
              <Spinner />
            </SpinnerContainer>
          </>
        )}
        {!errorTransactions && <Error>{errorTransactions}</Error>}
      </Body>
      <ButtonContainer>
        <Button onClick={newTransactionRoute}>
          <span>
            <GoPlus />{" "}
          </span>
          Criar transação
        </Button>
      </ButtonContainer>
    </>
  );
};

export default Home;
