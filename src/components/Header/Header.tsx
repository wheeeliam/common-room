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
          Our approach to image-making is an exercise in control, refocusing the
          image as a representation of considered architectural decisions.
          <br />
          <br />
          Door
          <br />
          Window
          <br />
          Opening
          <br />
          Wall
          <br />
          Room/s
          <br />
          Plan
          <br />
          Volume
          <br />
          Proportion
          <br />
          Order
          <br />
          Rhythm
          <br />
          ...
        </BodyText>
      </BodyTextContainer>
    </HeaderContainer>
  );
};
