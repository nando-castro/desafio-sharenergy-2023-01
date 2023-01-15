import styled from "styled-components";
export default function Card({ text, action, radius }: any) {
  return (
      <Container onClick={action} radius={radius}>
        {text}
      </Container>
  );
}

const Container = styled.button`
  width: 100%;
  height: 100%;
  padding: 10px;

  background: #DDDDDD;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border: 1px solid #000;
  border-radius: ${(props) => props.radius};
  cursor: pointer;

  text-align: center;
  font-weight: 700;


  &:hover {
    background: #CCCCCC;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  }

  @media(max-width: 767px){
    border-radius: 0;
  }
`;
