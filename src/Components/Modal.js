import {
  collection,
  deleteDoc,
  doc,
  documentId,
  getDocs,
  query,
  updateDoc,
  where,
} from "@firebase/firestore";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { dbService } from "../myFirebase";
import { Form, PasswordInput, SubmitButton } from "./shared";

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 9999;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ModalContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 200px;
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
`;

const Cta = styled.span`
  display: block;
  height: 30px;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`;

const SPasswordInput = styled(PasswordInput)`
  text-align: center;
  height: 60px;
  margin-bottom: 0;
`;

const ErrorText = styled.span`
  color: red;
  text-align: center;
`;

const MessageCreator = styled.div`
  width: 467px;
  height: 328px;
  background-color: #ffffff;
  border-radius: 15px;
  overflow: hidden;
`;

const TitleInput = styled.input`
  font-weight: 500;
  font-size: 24px;
  margin: 15px 20px 30px;
`;

const TextArea = styled.textarea`
  height: 170px;
  margin: 0 20px 20px;
  font-size: 20px;
  line-height: 1.5em;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const DeleteButton = styled.div`
  width: 467px;
  height: 55px;
  margin-top: 80px;
  background-color: #ff0000;
  border-radius: 10px;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Modal({ id, setModal, title, payload }) {
  let querySnapshot;
  const findDoc = async () => {
    const ref = collection(dbService, "messages");
    const q = query(ref, where(documentId(), "==", id));
    querySnapshot = await getDocs(q);
  };
  findDoc();
  const docRef = doc(dbService, "messages", id);

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    getValues,
    setError,
    clearErrors,
  } = useForm({ mode: "onChange", shouldUnregister: false });

  const handleClick = (event) => {
    setModal(false);
  };

  const onModalClick = (event) => {
    event.stopPropagation();
  };

  const [passwordTest, setPasswordTest] = useState(false);

  const onValidSubmit = async () => {
    const { password } = getValues();
    if (querySnapshot?.docs[0].data().password !== password) {
      setError("passwordError", {
        message: "비밀번호가 일치하지 않습니다.",
      });
      return;
    } else {
      clearErrors("passwordError");
      setPasswordTest(true);
    }
  };

  const {
    register: register2,
    handleSubmit: handleEditSubmit,
    formState: { isValid: isValid2 },
    getValues: getEditedValues,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title,
      payload,
    },
  });

  const onValidEditSubmit = async () => {
    const { title, payload } = getEditedValues();
    await updateDoc(docRef, {
      title,
      payload,
    });
    setModal(false);
  };

  const onDeleteClick = async () => {
    await deleteDoc(docRef);
  };

  return (
    <Backdrop onClick={handleClick}>
      {passwordTest ? (
        <Wrapper>
          <MessageCreator onClick={onModalClick}>
            <Form onSubmit={handleEditSubmit(onValidEditSubmit)}>
              <TitleInput
                {...register2("title")}
                type="text"
                placeholder="Write a title..."
              />
              <TextArea
                {...register2("payload", { required: true })}
                type="text"
                placeholder="Write a message..."
              />
              <SubmitButton
                type="submit"
                value="수정 완료"
                disabled={!isValid2}
              />
            </Form>
          </MessageCreator>
          <DeleteButton onClick={onDeleteClick}>글 삭제하기</DeleteButton>
        </Wrapper>
      ) : (
        <ModalContainer onClick={onModalClick}>
          <Form onSubmit={handleSubmit(onValidSubmit)}>
            <Cta>수정 혹은 삭제하시려면 비밀번호를 입력하세요.</Cta>
            <SPasswordInput
              {...register("password", { required: true })}
              type="password"
              placeholder="입력"
              onFocus={() => clearErrors("passwordError")}
            />
            {errors ? (
              <ErrorText>{errors?.passwordError?.message}</ErrorText>
            ) : null}
            <SubmitButton type="submit" value="확인" disabled={!isValid} />
          </Form>
        </ModalContainer>
      )}
    </Backdrop>
  );
}

export default Modal;
