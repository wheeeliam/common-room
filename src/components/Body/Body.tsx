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
    Image08,
    Image09,
    Image10,
  ];

  type imageDescription = { label: string; horizontal: boolean };
  const allImageLabels: imageDescription[] = [
    { label: "West Gallery. Office Fora.", horizontal: true },
    { label: "Love Tea Concept Store. TCYK.", horizontal: true },
    { label: "Bidborough Cricket Pavilion. AOMD.", horizontal: false },
    { label: "New Gallery. EBBA.", horizontal: false },
    { label: "Fitzroy Brick Studio House. KKAP.", horizontal: false },
    { label: "House A. Freese Studio.", horizontal: false },
    { label: "West Gallery. Office Fora.", horizontal: false },
    { label: "Farmhouse. Billy Maynard Architects.", horizontal: false },
    { label: "Love Tea Concept Store. TCYK.", horizontal: false },
    { label: "b2b Booth. SPG.", horizontal: false },
  ];

  const changeCurrentImage = (imageNumber: number) => {
    if (currentImage === imageNumber) return;
    setCurrentImage(imageNumber);
  };

  return (
    <BodyContainer>
      {allImageLabels.map((img, index) => {
        return (
          <HeroImage
            show={currentImage === index}
            horizontal={img.horizontal}
            id="image"
            src={allImages[index]}
            square={index === 6}
          />
        );
      })}
      <ImageLabels>
        {allImageLabels.map((image, index) => {
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
              <BodyText>{image.label}</BodyText>
            </ImageLabel>
          );
        })}
      </ImageLabels>
    </BodyContainer>
  );
};
