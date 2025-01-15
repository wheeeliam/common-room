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
import Image08 from "../../images/08.jpg";
import Image09 from "../../images/09.jpg";
import Image10 from "../../images/10.jpg";
import Image11 from "../../images/11.jpg";
import Image12 from "../../images/12.jpg";
import Image13 from "../../images/13.jpg";

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
    Image07,
    Image08,
    Image09,
    Image10,
    Image11,
    Image12,
    Image13,
  ];
  const allImageLabels = [
    "Fitzroy Brick Studio House. KKAP",
    "b2b Booth",
    "House of Thoroughfare Rooms",
    "Fitzroy Brick Studio House. KKAP",
    "Kreuzberg Tower",
    "b2b Booth",
    "Fitzroy Brick Studio House. KKAP",
    "Double House",
    "Private House, Lincolnshire",
    "Fitzroy Brick Studio House. KKAP",
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
      {allImageLabels.map((_, index) => {
        return (
          <HeroImage
            show={currentImage === index}
            id="image"
            src={allImages[index]}
          />
        );
      })}
      <ImageLabels>
        {allImageLabels.map((label, index) => {
          return (
            <ImageLabel
              key={index}
              selected={index === currentImage}
              onMouseEnter={() => changeCurrentImage(index)}
            >
              <BodyNumberText>
                {index < 9 && "0"}
                {index + 1}
              </BodyNumberText>
              <BodyText>{label}</BodyText>
            </ImageLabel>
          );
        })}
      </ImageLabels>
    </BodyContainer>
  );
};
