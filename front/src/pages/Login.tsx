import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import Loader from "../components/loading/Loader";
import { api } from "../services/api";

export function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  function changeInput(e: any) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleLogin(e: any) {
    e.preventDefault();
    setLoading(true);

    api
      .post("signin", { ...user })
      .then((res) => {
        const person = {
          token: res.data.token,
        };

        localStorage.setItem("userLogged", JSON.stringify(person));

        navigate("/home");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <Container>
      <Form>
        <p>Login</p>
        <Input
          type={"text"}
          placeholder={"Nome de usuário"}
          value={user.username}
          name={"username"}
          onChange={changeInput}
        />
        <Input
          type={"password"}
          placeholder={"Senha"}
          value={user.password}
          name={"password"}
          onChange={changeInput}
        />
        <Button
          type={"submit"}
          text={"Fazer login"}
          destiny={""}
          action={handleLogin}
        />
        <span>
          <Link to="/register">Novo por aqui? Clique aqui e Cadastre-se</Link>
        </span>
      </Form>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <></>
      )}
    </Container>
  );
}

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: linear-gradient(to right, violet, yellow);

  @media (max-width: 600px) {
  }
`;

export const Content = styled.div``;
export const Form = styled.form`
  width: 500px;
  height: 600px;

  border-radius: 14px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.35);
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  p {
    margin-bottom: 20px;
  }

  span {
    margin-top: 30px;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }

  background-color: #ffffff;
`;
