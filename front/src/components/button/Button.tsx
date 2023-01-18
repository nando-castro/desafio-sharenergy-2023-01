import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Button({ destiny, text, type, action, loading }: any) {
  return (
    <Link to={destiny}>
      <Container disabled={loading} type={type} onClick={action}>
        {text}
      </Container>
    </Link>
  );
}

const Container = styled.button`
  width: 326px;
  height: 46px;
  padding: 10px;

  background: rgba(96, 255, 255, 0.74);
  border-radius: 5px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.35);
  cursor: pointer;

  text-align: center;
  font-weight: 700;

  border: none;

  &:hover {
    background: rgba(95, 241, 206, 0.74);
    border-radius: 5px;
  }
`;
