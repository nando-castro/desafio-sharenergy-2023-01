import { useEffect, useState } from "react";
import styled from "styled-components";
import { MdDelete, MdEdit, MdAddCircle } from "react-icons/md";
import { api } from "../../services/api";
import FormClient from "../form/FormClient";
import Loader from "../loading/Loader";
import { useAuth } from "../../context/auth";

export default function Clients() {
  const [text, setText] = useState(false);
  const { logout }: any = useAuth();
  const [clients, setClients] = useState([]);
  const [clientUpdate, setClientUpdate] = useState({
    name: "",
    email: "",
  });
  const [method, setMethod] = useState(true);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [addClient, setAddClient] = useState(false);
  const { token } = JSON.parse(localStorage.getItem("userLogged"));

  const CONFIG = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    async function getClients() {
      await api
        .get("/clients", CONFIG)
        .then((res) => {
          setClients(res.data);
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status === 401) {
            alert("Ocorreu um erro! Por favor, realize login novamente!");
            logout();
          }
        });
    }

    getClients();
  }, [update]);

  const handleCancel = () => {
    setMethod(true);
    setAddClient(false);
  };

  const handleAdd = () => {
    setText(false);
    setAddClient(true);
  };

  const handleDelete = (id: string) => {
    setLoading(true);

    const response = window.confirm(
      "Voce tem certeza que gostaria de apagar o registro do cliente?"
    );

    if (response === true) {
      api
        .delete(`/client/${id}`, CONFIG)
        .then((res) => {
          setUpdate(!update);
          setLoading(false);
        })
        .catch((err) => {
          if (err.response.status === 401) {
            alert("Ocorreu um erro! Por favor, realize login novamente!");
            logout();
          }
          setLoading(false);
        });
    }
    setLoading(false);
  };

  const handleUpdate = (
    _id: string,
    name: string,
    email: string,
    phone: string,
    street: string,
    number: string,
    city: string,
    state: string,
    cpf: string
  ) => {
    setMethod(false);
    setClientUpdate({
      id: _id,
      name: name,
      email: email,
      phone: phone,
      street: street,
      number: number,
      city: city,
      state: state,
      cpf: cpf,
    });
    setText(true);
    setAddClient(true);
  };

  const renderUsers = () => {
    return clients.map((i: any) => (
      <Content key={i._id}>
        <div>
          <p>Nome: {i.name}</p>
          <p>Email: {i.email}</p>
          <p>Telefone: {i.phone}</p>
          <p>
            Endereço: {i.street}, {i.number}, {i.city} - {i.state}
          </p>
          <p>CPF: {i.cpf}</p>
        </div>
        <main>
          <div
            onClick={() =>
              handleUpdate(
                i._id,
                i.name,
                i.email,
                i.phone,
                i.street,
                i.number,
                i.city,
                i.state,
                i.cpf
              )
            }
          >
            Editar <MdEdit className="icon edit" />
          </div>
          <div onClick={() => handleDelete(i._id)}>
            Excluir <MdDelete className="icon remove" />
          </div>
        </main>
      </Content>
    ));
  };
  return (
    <Container>
      {!addClient ? (
        <span>
          <button onClick={handleAdd}>
            Adicionar Cliente <MdAddCircle className="icon add" />
          </button>
        </span>
      ) : (
        <>
          <span>
            <h1>
              {text ? "Atualizar dados do cliente" : "Cadastro de cliente"}
            </h1>
            <button className="cancel" onClick={handleCancel}>
              Cancelar
            </button>
          </span>
        </>
      )}
      {clients.length > 0 && addClient === false ? (
        renderUsers()
      ) : addClient === false ? (
        <div>Não há usuários cadastrados</div>
      ) : (
        <FormClient
          setAddClient={setAddClient}
          update={update}
          setUpdate={setUpdate}
          method={method}
          setMethod={setMethod}
          clientUpdate={clientUpdate}
          setClientUpdate={setClientUpdate}
        />
      )}
      {loading === true ? <Loader /> : <></>}
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
  height: 100%;

  padding: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  span {
    width: 100%;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    cursor: pointer;

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;

      margin-bottom: 20px;
      font-size: 16px;

      border: 1px solid #000;
      border-radius: 50px;

      padding: 5px;
    }
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

  .cancel {
    background-color: #ccc;
    margin-bottom: 20px;
    font-size: 16px;

    border: 1px solid #000;
    border-radius: 50px;

    padding: 5px;
  }
`;

const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid green;

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

  @media (max-width: 467px) {
    display: block;
    main {
      width: 100%;
      flex-direction: row;
    }
  }
`;
