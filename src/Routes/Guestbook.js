import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "@firebase/firestore";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components";
import { dbService } from "../myFirebase";
import InitScroll from "../InitScroll";
import { Helmet } from "react-helmet";
import Message from "../Components/Message";
import { Form, PasswordInput, SubmitButton } from "../Components/shared";

const Container = styled.div`
  padding: 70px 50px 50px;
  min-height: 100vh;
  max-height: auto;
`;

const MessageCreator = styled.div`
  width: auto;
  height: auto;
  background-color: #ffffff;
  border-radius: 15px;
  overflow: hidden;
`;

const TitleInput = styled.input`
  font-weight: 500;
  font-size: 24px;
  margin: 15px 20px 15px;
`;

const TextArea = styled.textarea`
  height: 200px;
  margin: 0 20px 20px;
  font-size: 20px;
  line-height: 1.5em;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const MessageGrid = styled.div`
  margin-top: 30px;
  display: grid;
  grid-auto-rows: 300px;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`;

function Guestbook() {
  const [messages, setMessages] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { isValid },
    getValues,
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onValidSubmit = async () => {
    const { title, password, payload } = getValues();
    try {
      await addDoc(collection(dbService, "messages"), {
        title,
        password,
        payload,
        createdAt: Date.now(),
      });
    } catch (error) {
      console.log(error);
    }
    reset({
      title: "",
      password: "",
      payload: "",
    });
  };

  const getMessages = async () => {
    const messagesQuery = query(
      collection(dbService, "messages"),
      orderBy("createdAt", "desc")
    );
    onSnapshot(messagesQuery, (snapshot) => {
      const messageArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(messageArr);
    });
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      <Helmet>
        <title>Duru | Guestbook</title>
      </Helmet>
      <InitScroll />
      <Container>
        <MessageGrid>
          <MessageCreator>
            <Form onSubmit={handleSubmit(onValidSubmit)}>
              <TitleInput
                {...register("title")}
                type="text"
                placeholder="제목"
              />
              <PasswordInput
                {...register("password", { required: true })}
                type="password"
                placeholder="비밀번호"
              />
              <TextArea
                {...register("payload", { required: true })}
                type="text"
                placeholder="내용"
              />
              <SubmitButton
                type="submit"
                value="글 남기기"
                disabled={!isValid}
              />
            </Form>
          </MessageCreator>
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        </MessageGrid>
      </Container>
    </>
  );
}

export default Guestbook;
