import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import Loader from "../components/loading/Loader";
import { api } from "../services/api";

export function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
  });

  function changeInput(e: any) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleRegister(e: any) {
    e.preventDefault();
    setLoading(true);

    api
      .post("signup", { ...user })
      .then((res) => {
        navigate("/");
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
        <p>Register</p>
        <Input
          type={"text"}
          placeholder={"Nome de usuário"}
          value={user.username}
          name={"username"}
          onChange={changeInput}
        />
        <Input
          type={"password"}
          placeholder={"Digite a senha"}
          value={user.password}
          name={"password"}
          onChange={changeInput}
        />
        <Input
          type={"password"}
          placeholder={"Digite novamente a senha"}
          value={user.passwordConfirm}
          name={"passwordConfirm"}
          onChange={changeInput}
        />
        <Button
          type={"submit"}
          text={"Fazer Cadastro"}
          destiny={""}
          action={handleRegister}
        />
        <span>
          <Link to="/"> Ja possui cadastro? Faca login</Link>
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
