import styled from "styled-components";
import { Oval } from "react-loader-spinner";

export default function Loader() {
  return (
    <Container>
      <Oval
        height="100"
        width="100"
        color="#043784"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;
