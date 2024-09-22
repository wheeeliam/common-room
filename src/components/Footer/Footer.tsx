import React from "react";
import { BodyText, FooterContainer, AnchorText } from "./styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <BodyText>info@commonroom-images.com</BodyText>
      <BodyText>+61 404 941 042</BodyText>
      <AnchorText href="https://www.instagram.com/commonroom.images/">
        Instagram
      </AnchorText>
    </FooterContainer>
  );
};
