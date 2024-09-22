import styled from "styled-components";
import React, { useState } from "react";
import { InfoBody } from "../components/Mobile/InfoBody";
import { ImageBody } from "../components/Mobile/ImageBody";

export const MobileHome = () => {
  const [showInfoPage, setShowInfoPage] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<number>(0);

  const changeCurrentImage = (imageNumber: number) => {
    if (currentImage === imageNumber) return;
    setCurrentImage(imageNumber);
  };

  const toggleShowInfoPage = () => {
    setShowInfoPage(!showInfoPage);
  };
  return (
    <HomeContainer>
      <Header>
        <TitleText>Common Room</TitleText>
        <ActionText hold={showInfoPage} onClick={toggleShowInfoPage}>
          Info
        </ActionText>
      </Header>
      {showInfoPage ? (
        <InfoBody />
      ) : (
        <ImageBody
          currentImage={currentImage}
          changeCurrentImage={changeCurrentImage}
        />
      )}
      {showInfoPage && <BackText onClick={toggleShowInfoPage}>Back</BackText>}
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  max-height: 100%;
  padding: 50px 25px 0 25px;
  height: calc(100% - 50px);
  position: relative;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TitleText = styled.p`
  font-family: Archivo;
  font-size: 24px;
  font-weight: 600;
  line-height: 26.11px;
  letter-spacing: -0.05em;
  text-align: left;
`;

const ActionText = styled.p<{ hold?: boolean }>`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.03em;
  text-align: left;
  color: black;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
    color: #d5bf55;
  }
  color: ${(props) => (props.hold ? "#D5BF55" : "#000000")};
`;

const BackText = styled(ActionText)`
  position: absolute;
  bottom: 50px;
`;
