import React, { useState } from "react";
import {
  BodyText,
  ImageLabels,
  BodyContainer,
  ImageLabel,
  BodyNumberText,
  HeroImage,
} from "./styles";
import Image01 from "../../images/01.jpg";
import Image02 from "../../images/02.jpg";
import Image03 from "../../images/03.jpg";
import Image04 from "../../images/04.jpg";
import Image05 from "../../images/05.jpg";
import Image06 from "../../images/06.jpg";
import Image07 from "../../images/07.jpg";

export const Body = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);
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

  const changeCurrentImage = (imageNumber: number) => {
    if (currentImage === imageNumber) return;
    setCurrentImage(imageNumber);
  };

  return (
    <BodyContainer>
      <HeroImage id="image" src={allImages[currentImage]} />
      <ImageLabels>
        {allImageLabels.map((label, index) => {
          return (
            <ImageLabel
              key={index}
              selected={index === currentImage}
              onMouseEnter={() => changeCurrentImage(index)}
            >
              <BodyNumberText>0{index + 1}</BodyNumberText>
              <BodyText>{label}</BodyText>
            </ImageLabel>
          );
        })}
      </ImageLabels>
    </BodyContainer>
  );
};
