import { useState } from "react";
import styled from "styled-components";
import { api } from "../../services/api";
import Button from "../button/Button";
import Input from "../input/Input";
import Loader from "../loading/Loader";

export default function Form({
  setAddClient,
  update,
  setUpdate,
  clientUpdate,
  method,
  setMethod,
  setClientUpdate,
}: any) {
  const [loading, setLoading] = useState(false);
  const [client, setClient] = useState({
    name: clientUpdate.name,
    email: clientUpdate.email,
    phone: clientUpdate.phone,
    street: clientUpdate.street,
    number: clientUpdate.number,
    city: clientUpdate.city,
    state: clientUpdate.state,
    cpf: clientUpdate.cpf,
  });

  const { token } = JSON.parse(localStorage.getItem("userLogged"));

  const CONFIG = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function changeInput(e: any) {
    setClient({ ...client, [e.target.name]: e.target.value });
  }

  const handleCreate = (e: any) => {
    e.preventDefault();
    setLoading(true);

    api
      .post("/client", { ...client }, CONFIG)
      .then((res) => {
        setAddClient(false);
        setUpdate(!update);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleUpdate = (e: any) => {
    e.preventDefault();
    setLoading(true);

    api
      .put(`/client/${clientUpdate.id}`, { ...client }, CONFIG)
      .then((res) => {
        setClientUpdate({});
        setUpdate(!update);
        setMethod(true);
        setAddClient(false);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <Container>
        <Input
          height={"30px"}
          type={"text"}
          placeholder={"Nome"}
          value={client.name}
          name={"name"}
          onChange={changeInput}
        />
        <Input
          height={"30px"}
          type={"text"}
          placeholder={"Email"}
          value={client.email}
          name={"email"}
          onChange={changeInput}
        />
        <Input
          height={"30px"}
          type={"text"}
          placeholder={"phone"}
          data-ls-module="charCounter"
          maxLength={11}
          value={client.phone}
          name={"phone"}
          onChange={changeInput}
        />
        <Input
          height={"30px"}
          type={"text"}
          placeholder={"CPF"}
          data-ls-module="charCounter"
          maxLength={11}
          value={client.cpf}
          name={"cpf"}
          onChange={changeInput}
        />
        <div>
          <Input
            width={"210px"}
            height={"30px"}
            type={"text"}
            placeholder={"Rua"}
            value={client.street}
            name={"street"}
            onChange={changeInput}
          />
          <Input
            width={"120px"}
            height={"30px"}
            type={"text"}
            placeholder={"Numero"}
            data-ls-module="charCounter"
            maxLength={5}
            value={client.number}
            name={"number"}
            onChange={changeInput}
          />
        </div>
        <Input
          height={"30px"}
          type={"text"}
          placeholder={"Cidade"}
          value={client.city}
          name={"city"}
          onChange={changeInput}
        />
        <Input
          height={"30px"}
          type={"text"}
          placeholder={"Estado"}
          value={client.state}
          name={"state"}
          onChange={changeInput}
        />
      </Container>
      {method ? (
        <Button
          type={"submit"}
          text={"Cadastrar"}
          destiny={""}
          action={handleCreate}
        />
      ) : (
        <Button
          type={"submit"}
          text={"Atualizar"}
          destiny={""}
          action={handleUpdate}
        />
      )}
      {loading ? <Loader /> : <></>}
    </>
  );
}

const Container = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div {
    display: flex;
  }
`;
