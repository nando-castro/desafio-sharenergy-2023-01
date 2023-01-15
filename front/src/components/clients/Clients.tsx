import { useEffect, useState } from "react";
import styled from "styled-components";
import { MdDelete, MdEdit, MdAddCircle } from "react-icons/md";
import { api } from "../../services/api";

export default function Clients() {
  const [clients, setClients] = useState([]);
  const { token } = JSON.parse(localStorage.getItem("userLogged"));

  const CONFIG = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    api
      .get("/clients", CONFIG)
      .then((res) => {
        console.log(res.data);
        setClients(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderUsers = () => {
    return clients.map((i: any) => (
      <Content key={i.id.value}>
        <div>
          <span>
            Nome: {i.name.first} {i.name.last}
          </span>
          <p>Email: {i.email}</p>
          <p>Telefone: {i.phone}</p>
          <p>
            Endereço: {i.location.street.name}, {i.location.street.number},
            {i.location.city} - {i.location.state}
          </p>
          <p>CPF: {i.cell}</p>
        </div>
        <main>
          <div>
            Editar <MdEdit className="icon edit" />
          </div>
          <div>
            Excluir <MdDelete className="icon remove" />
          </div>
        </main>
      </Content>
    ));
  };
  return (
    <Container>
      {clients.length > 0 ? renderUsers() : <div>Carregando...</div>}
      <span>
        Adicionar Cliente <MdAddCircle className="icon add" />
      </span>
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
  height: 100%;

  padding: 20px;

  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  span {
    width: 200px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 16px;

    border: 1px solid #000;
    border-radius: 50px;

    cursor: pointer;
  }

  .icon {
    font-size: 22px;
  }

  .remove {
    color: #ff0000;
  }

  .add {
    color: #008000;
    margin-left: 10px;
  }

  .edit {
    color: #ffa500;
  }
`;

const Content = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 100%;
    border: 1px solid blue;
    padding: 20px;
  }

  main {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    div {
      width: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid red;
      border-radius: 10px;
      margin: 5px;
      cursor: pointer;
    }
  }

  @media (max-width: 767px) {
    main {
      width: 100px;
    }
  }
`;
