import React from "react";
import {
  ImageBodyContainer,
  HeroImage,
  ImageWrapper,
  BackImageAction,
  NextImageAction,
} from "./styles";
import Image01 from "../../../images/01.jpg";
import Image02 from "../../../images/02.jpg";
import Image03 from "../../../images/03.jpg";
import Image04 from "../../../images/04.jpg";
import Image05 from "../../../images/05.jpg";
import Image06 from "../../../images/06.jpg";
import Image07 from "../../../images/07.jpg";
import Image08 from "../../../images/08.jpg";
import Image09 from "../../../images/09.jpg";
import Image10 from "../../../images/10.jpg";

export const ImageBody = ({
  currentImage,
  changeCurrentImage,
}: {
  currentImage: number;
  changeCurrentImage: (index: number) => void;
}) => {
  const allImages = [
    Image01,
    Image02,
    Image03,
    Image04,
    Image05,
    Image06,
    Image07,
    Image08,
    Image09,
    Image10,
  ];
  const allImageLabels = [
    "West Gallery. Office Fora.",
    "Love Tea Concept Store. TCYK.",
    "Bidborough Cricket Pavilion. AOMD.",
    "New Gallery. EBBA.",
    "Fitzroy Brick Studio House. KKAP.",
    "House A. Freese Studio.",
    "West Gallery. Office Fora.",
    "Farmhouse. Billy Maynard Architects.",
    "Love Tea Concept Store. TCYK.",
    "b2b Booth. SPG.",
  ];

  const AMOUNT_OF_IMAGES = allImages.length;

  return (
    <ImageBodyContainer>
      <ImageWrapper>
        {allImageLabels.map((_, index) => {
          return (
            <HeroImage
              show={currentImage === index}
              id="image"
              src={allImages[index]}
            />
          );
        })}
        <BackImageAction
          onClick={() => {
            changeCurrentImage(
              (currentImage - 1 + AMOUNT_OF_IMAGES) % AMOUNT_OF_IMAGES
            );
          }}
        />
        <NextImageAction
          onClick={() => {
            changeCurrentImage((currentImage + 1) % AMOUNT_OF_IMAGES);
          }}
        />
      </ImageWrapper>
    </ImageBodyContainer>
  );
};
