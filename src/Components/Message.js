import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import Modal from "./Modal";

const MessageContainer = styled.div`
  width: auto;
  height: auto;
  padding: 20px;
  background-color: #00ff97;
  border-radius: 15px;
  color: black;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MessageTitle = styled.h2`
  display: block;
  max-width: 90%;
  font-weight: 500;
  font-size: 24px;
`;

const Icon = styled.div`
  cursor: pointer;
  color: gray;
  :hover {
    color: black;
    transition: color 0.5s ease-in-out;
  }
`;

const Payload = styled.span`
  height: 170px;
  display: block;
  margin-top: 30px;
  font-size: 20px;
  line-height: 1.5em;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const DateText = styled.span`
  position: absolute;
  right: 20px;
  bottom: 20px;
  font-size: 16px;
  text-align: right;
  color: gray;
`;

function Message({ message }) {
  const animatedItem = useScrollFadeIn("up", 1, Math.random());
  const TimeBefore = (timestamp) => {
    const diff = (Date.now() - parseInt(timestamp)) / 1000;
    if (diff < 30) {
      return `방금 전`;
    } else if (diff >= 30 && diff < 60) {
      return `${Math.round(diff)}초 전`;
    } else if (diff >= 60 && diff < 3600) {
      return `${Math.round(diff / 60)}분 전`;
    } else if (diff >= 3600 && diff < 86400) {
      return `${Math.round(diff / 3600)}시간 전`;
    } else if (diff >= 86400 && diff < 604800) {
      return `${Math.round(diff / 86400)}일 전`;
    } else {
      return `${Math.round(diff / 604800)}주 전`;
    }
  };

  const [modal, setModal] = useState(false);

  return (
    <>
      <MessageContainer {...animatedItem}>
        <TitleWrapper>
          <MessageTitle>
            {message.title ? message.title : "Untitled"}
          </MessageTitle>
          <Icon onClick={() => setModal(true)}>
            <FontAwesomeIcon icon={faEllipsisH} size="lg" />
          </Icon>
        </TitleWrapper>
        <Payload>{message.payload}</Payload>
        <DateText>{TimeBefore(message.createdAt)}</DateText>
      </MessageContainer>
      {modal ? (
        <Modal
          id={message.id}
          setModal={setModal}
          title={message.title}
          payload={message.payload}
        />
      ) : null}
    </>
  );
}

export default Message;
