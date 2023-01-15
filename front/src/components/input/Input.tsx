import { useState } from "react";
import styled from "styled-components";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function Input({
  width,
  height,
  type,
  maxLength,
  disabled,
  placeholder,
  value,
  name,
  onChange,
}: any) {
  const [hidden, setHidden] = useState(true);
  function hiddenPassword(e: any) {
    e.preventDefault();
    setHidden(!hidden);
  }
  return (
    <>
      {type === "password" ? (
        <Container>
          <Content
            width={width}
            height={height}
            disabled={disabled}
            type={hidden === true ? "password" : "text"}
            maxLength={maxLength}
            placeholder={placeholder}
            value={value}
            name={name}
            onChange={onChange}
          />
          {hidden === true ? (
            <AiFillEye className="icon" onClick={hiddenPassword} />
          ) : (
            <AiFillEyeInvisible className="icon" onClick={hiddenPassword} />
          )}
        </Container>
      ) : (
        <Container>
          <Content
            width={width}
            height={height}
            disabled={disabled}
            maxLength={maxLength}
            type={type}
            placeholder={placeholder}
            value={value}
            name={name}
            onChange={onChange}
          />
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  /* width: 100%; */

  .icon {
    font-size: 25px;
    position: fixed;
    margin-left: 290px;
    margin-top: -55px;

    cursor: pointer;
  }
`;
const Content = styled.input`
  width: ${(props) => props.width || "326px"};
  height: ${(props) => props.height || "58px"};
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #000;

  background: #ffffff;
  border-radius: 5px;

  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`;
