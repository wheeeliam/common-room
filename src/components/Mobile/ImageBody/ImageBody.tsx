import React from "react";
import {
  ImageBodyContainer,
  HeroImage,
  ImageNameText,
  ImageWrapper,
  ImageLabelNumberText,
  ImageLabels,
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

const AMOUNT_OF_IMAGES = 7;

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
  ];
  const allImageLabels = [
    "House of Thoroughfare Rooms",
    "Kreuzberg Tower",
    "Double House",
    "Private House, Lincolnshire",
    "Kreuzberg Tower",
    "Riff Raff 3+4",
    "820 Nicholson",
  ];

  return (
    <ImageBodyContainer>
      <ImageWrapper>
        <HeroImage show={currentImage === 0} id="image" src={allImages[0]} />
        <HeroImage show={currentImage === 1} id="image" src={allImages[1]} />
        <HeroImage show={currentImage === 2} id="image" src={allImages[2]} />
        <HeroImage show={currentImage === 3} id="image" src={allImages[3]} />
        <HeroImage show={currentImage === 4} id="image" src={allImages[4]} />
        <HeroImage show={currentImage === 5} id="image" src={allImages[5]} />
        <HeroImage show={currentImage === 6} id="image" src={allImages[6]} />
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
