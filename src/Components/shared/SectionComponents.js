import { Element } from "react-scroll";
import styled from "styled-components";

export const Section = styled(Element)`
  padding: 50px 50px;
  height: auto;
  margin-bottom: 200px;
  /* border-bottom: 1px solid gray;
  :nth-child(5) {
    border: none;
  } */
  /* overflow: hidden; */
`;

export const Image = styled.img`
  width: 100%;
  /* margin-top: 50px; */
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex;
  /* align-items: stretch; */
  @media (max-width: 1800px) {
    flex-direction: column;
  }
`;

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
  line-height: 1.5em;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Description = styled.p`
  display: block;
  max-width: 800px;
  margin-top: 80px;
  text-align: left;
  font-size: 24px;
  line-height: 1.8em;
  @media (max-width: 768px) {
    margin-top: 50px;
    font-size: 18px;
  }
`;

export const ImageContainer = styled.div`
  width: calc(100vw - 800px);
  min-width: 300px;
  height: 100%;
  @media (max-width: 1800px) {
    width: calc(100vw - 100px);
  }
`;
