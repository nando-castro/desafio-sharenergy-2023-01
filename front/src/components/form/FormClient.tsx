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
}: any) {
  const [loading, setLoading] = useState(false);
  const [client, setClient] = useState({
    name: "",
    email: "",
    phone: "",
    street: "",
    number: "",
    city: "",
    state: "",
    cpf: "",
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

  function changeInputUpdate(e: any) {
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
        console.log(res.data);
        setUpdate(!update);
        setMethod(false);
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
        <div>
          <Input
            type={"text"}
            placeholder={"Nome"}
            value={client.name || clientUpdate.name}
            name={"name"}
            onChange={changeInput || changeInputUpdate}
          />
          <Input
            type={"text"}
            placeholder={"Email"}
            value={client.email || clientUpdate.email}
            name={"email"}
            onChange={changeInput || changeInputUpdate}
          />
          <Input
            type={"text"}
            placeholder={"phone"}
            data-ls-module="charCounter"
            maxLength={11}
            value={client.phone || clientUpdate.phone}
            name={"phone"}
            onChange={changeInput || changeInputUpdate}
          />
          <Input
            type={"text"}
            placeholder={"CPF"}
            data-ls-module="charCounter"
            maxLength={11}
            value={client.cpf || clientUpdate.cpf}
            name={"cpf"}
            onChange={changeInput || changeInputUpdate}
          />
        </div>
        <div>
          <Input
            type={"text"}
            placeholder={"Rua"}
            value={client.street || clientUpdate.street}
            name={"street"}
            onChange={changeInput || changeInputUpdate}
          />
          <Input
            width={"120px"}
            type={"text"}
            placeholder={"Numero"}
            data-ls-module="charCounter"
            maxLength={5}
            value={client.number || clientUpdate.number}
            name={"number"}
            onChange={changeInput || changeInputUpdate}
          />
          <Input
            type={"text"}
            placeholder={"Cidade"}
            value={client.city || clientUpdate.city}
            name={"city"}
            onChange={changeInput || changeInputUpdate}
          />
          <Input
            type={"text"}
            placeholder={"Estado"}
            value={client.state || clientUpdate.state}
            name={"state"}
            onChange={changeInput || changeInputUpdate}
          />
        </div>
      </Container>
      {method === true ? (
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

  div {
    margin: 20px;
  }
`;
