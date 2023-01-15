import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { BiRefresh } from "react-icons/bi";

export default function Dogs() {
  const [image, setImage]: any = useState([]);
  const [update, setUpdate] = useState(false);

  const API_URL = `https://random.dog/woof.json`;
  const regex = /\.mp4$/;

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setImage(res.data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [update]);

  return (
    <Container>
      {regex.test(image) ? (
        <video className="view" width="100%" height="100%" autoPlay muted>
          <source src={image} type="video/mp4" />
        </video>
      ) : (
        <img className="view" src={image} alt="cachorro fofinho" />
      )}
      <button onClick={() => setUpdate(!update)}>
        <BiRefresh /> Recarregar
      </button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    width: 200px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 30px;
    border-radius: 30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .view {
    width: 100%;
    max-width: 480px;
    height: 360px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
