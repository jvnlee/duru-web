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
  /* margin-bottom: 80px; */
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`;

export const Separator = styled.div`
  width: 30px;
  height: 20px;
  border-top: 4px solid white;
`;

export const Subtitle = styled.h2`
  display: block;
  color: #ffffff;
  margin-bottom: 150px;
  font-size: 40px;
  line-height: 1.5em;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Heading = styled.h3`
  display: block;
  font-size: 30px;
  margin-bottom: 50px;
`;

export const Description = styled.p`
  display: block;
  width: 25%;
  text-align: left;
  font-size: 24px;
  line-height: 1.8em;
`;

export const ImageContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Blank = styled.div`
  width: 100%;
  height: 300px;
`;
