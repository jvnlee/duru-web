import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "@firebase/firestore";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { dbService } from "../myFirebase";
import Message from "../Components/Message";
import { Helmet } from "react-helmet-async";
import useInitScroll from "../hooks/useInitScroll";
import { Separator, Subtitle } from "../Components/shared/SectionComponents";
import {
  Form,
  PasswordInput,
  SubmitButton,
} from "../Components/shared/FormComponents";

const Container = styled.div`
  padding: 90px 50px 50px;
  min-height: 100vh;
  max-height: auto;
`;

const SSubtitle = styled(Subtitle)`
  margin-bottom: 0;
`;

const Text = styled.h3`
  font-weight: 300;
  font-size: 20px;
  margin: 15px 0 60px;
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
  height: 150px;
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
  useInitScroll();

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
      <Container>
        <Separator />
        <SSubtitle>Guestbook</SSubtitle>
        <Text>
          전시 방문해셔서 감사합니다! 이곳에 방명록 남겨주시면 제가 수시로
          확인하겠습니다. 🙇‍♂️
        </Text>
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
