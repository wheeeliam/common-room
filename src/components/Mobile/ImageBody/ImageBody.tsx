import React, { useState } from "react";
import {
  ImageBodyContainer,
  HeroImage,
  ImageNameText,
  ImageWrapper,
  ImageLabelNumberText,
  ImageLabels,
} from "./styles";
import Image01 from "../../../images/01.jpg";
import Image02 from "../../../images/02.jpg";
import Image03 from "../../../images/03.jpg";
import Image04 from "../../../images/04.jpg";

export const ImageBody = ({
  currentImage,
  changeCurrentImage,
}: {
  currentImage: number;
  changeCurrentImage: (index: number) => void;
}) => {
  const allImages = [Image01, Image02, Image03, Image04];
  const allImageLabels = [
    "House of Thoroughfare Rooms",
    "Hejduk in Clifton Hill",
    "Riff Raff 3+4",
    "820 Nicholson",
  ];

  return (
    <ImageBodyContainer>
      <ImageWrapper>
        <HeroImage id="image" src={allImages[currentImage]} />
        <ImageNameText>{allImageLabels[currentImage]}</ImageNameText>
        <ImageLabels>
          {allImageLabels.map((label, index) => {
            return (
              <ImageLabelNumberText
                key={index}
                selected={index === currentImage}
                onMouseEnter={() => changeCurrentImage(index)}
              >
                0{index + 1}
              </ImageLabelNumberText>
            );
          })}
        </ImageLabels>
      </ImageWrapper>
    </ImageBodyContainer>
  );
};