import React from "react";
import {
  BodyText,
  BodyTextContainer,
  HeaderContainer,
  HeaderText,
  TextContainer,
} from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <TextContainer>
        <HeaderText>Common Room</HeaderText>
      </TextContainer>
      <BodyTextContainer>
        <BodyText>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Elementum finibus
          sodales eu velit augue; torquent quisque. Suspendisse tempor ultricies
          enim nam a neque rhoncus. Elementum finibus sodales eu velit augue;
          torquent quisque.
        </BodyText>
      </BodyTextContainer>
    </HeaderContainer>
  );
};
