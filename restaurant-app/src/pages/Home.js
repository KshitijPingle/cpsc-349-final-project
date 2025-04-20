import React from "react";
import styled from "styled-components";
import Burger from "../img/greetingBurger.jpg";

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
`;

export const Home = () => {
  return (
    <Wrapper>
      <Title>Welcome to Joe's Burger</Title>
      <Image src={Burger} />
    </Wrapper>
  );
};
