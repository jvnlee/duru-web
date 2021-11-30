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

const Container = styled.div`
  padding: 80px 50px 50px;
  height: 3000px;
`;

const MessageContainer = styled.div`
  width: 500px;
  height: auto;
  padding: 20px;
  margin-top: 30px;
  border: 1px solid white;
  border-radius: 15px;
`;

function Guestbook() {
  const [messages, setMessages] = useState([]);
  const { register, handleSubmit, getValues, setValue } = useForm({
    mode: "onChange",
  });

  const onValidSubmit = async () => {
    const { title, payload } = getValues();
    try {
      await addDoc(collection(dbService, "messages"), {
        title,
        payload,
        createdAt: Date.now(),
      });
    } catch (error) {
      console.log(error);
    }
    setValue("title", "");
    setValue("payload", "");
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
    <Container>
      <form onSubmit={handleSubmit(onValidSubmit)}>
        <input
          {...register("title")}
          type="text"
          placeholder="Write a title..."
        />
        <input
          {...register("payload")}
          type="text"
          placeholder="Write a message..."
        />
        <input type="submit" value="Submit" />
      </form>
      <div>
        {messages.map((message) => (
          <MessageContainer key={message.id}>
            <div>{message.title}</div>
            <div>{message.payload}</div>
            <div>{message.createdAt}</div>
          </MessageContainer>
        ))}
      </div>
    </Container>
  );
}

export default Guestbook;
