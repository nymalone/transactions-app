import React from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import Form from '../../molecules/Form';

import { Header } from "../Home/styles.js";
import { Container, Button, Title } from "./styles.js";

const NewTransaction = () => {
  const history = useHistory();

  const newTransactionRoute = () => history.push("/");

  return (
    <>
      <Header>
        <Container>
          <Button onClick={newTransactionRoute}>
            <FiArrowLeft />
          </Button>
          <Title>Nova transação</Title>
        </Container>
      </Header>
      <Form newTransactionRoute={newTransactionRoute}/>
    </>
  );
};

export default NewTransaction;
