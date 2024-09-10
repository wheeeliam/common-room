import styled from "styled-components";
import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Body } from "../components/Body";

export const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <Body />
      <Footer />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: space-between;
  max-width: 1200px;
`;
