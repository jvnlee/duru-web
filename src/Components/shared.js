import styled, { css } from "styled-components";

export const Separator = styled.div`
  width: 30px;
  height: 20px;
  border-top: 4px solid white;
`;

export const Subtitle = styled.h2`
  display: block;
  color: #ffffff;
  margin-bottom: 100px;
  font-size: 40px;
  line-height: 1.3em;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

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
