import styled, { css } from "styled-components";

export const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  color: black;
  position: relative;
`;

export const PasswordInput = styled.input`
  font-size: 20px;
  margin: 0 20px 15px;
`;

export const SubmitButton = styled.input`
  width: 100%;
  height: 55px;
  position: absolute;
  bottom: 0;
  text-align: center;
  background-color: #00ff97;
  font-size: 18px;
  font-weight: 500;
  color: black;
  cursor: pointer;
  ${(props) =>
    props.disabled &&
    css`
      color: white;
      background-color: lightgray;
    `};
`;
