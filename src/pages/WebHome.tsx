import styled from "styled-components";
import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Body } from "../components/Body";

export const WebHome = () => {
  return (
    <HomeContainer>
      <HeaderFooterPanel>
        <Header />
        <Footer />
      </HeaderFooterPanel>
      <Body />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100% - 120px);
  max-width: 100%;
  padding: 60px;
`;

const HeaderFooterPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;
