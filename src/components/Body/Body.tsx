import React, { useState } from "react";
import {
  BodyText,
  ImageLabels,
  BodyContainer,
  ImageContainer,
  ImageLabel,
  BodyNumberText,
} from "./styles";

export const Body = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const allImages = [
    "https://drive.google.com/thumbnail?id=1725fqpJC35fJqcWBcNA_coMU4fw4DY-M&sz=w640",
    "https://drive.google.com/thumbnail?id=178C2bxE4157YXSJPrMvgfq6OoPYra__X&sz=w640",
    "https://drive.google.com/thumbnail?id=174h0xowz1azjdHgrm7ZeeBE477juF4fB&sz=w640",
    "https://drive.google.com/thumbnail?id=176ni-7w0TLZc70TdjJFWtVwu3rYmLZm4&sz=w640",
  ];
  const allImageLabels = [
    "House of Thoroughfare Rooms",
    "Hejduk in Clifton Hill",
    "Riff Raff 3+4",
    "820 Nicholson",
  ];

  const changeCurrentImage = (imageNumber: number) => {
    if (currentImage === imageNumber) return;
    setCurrentImage(imageNumber);
  };

  return (
    <BodyContainer>
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
      <ImageContainer>
        <img id="image" src={allImages[currentImage]} />
      </ImageContainer>
    </BodyContainer>
  );
};
