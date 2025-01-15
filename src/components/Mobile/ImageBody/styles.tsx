import styled from "styled-components";

export const ImageBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  position: relative;
  height: 100%;
  margin: 0;
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroImage = styled.img<{ show: boolean }>`
  display: ${(props) => (props.show ? "block" : "none")};
  width: 100%;
  height: auto;
`;

export const ImageNameText = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.94px;
  letter-spacing: -0.03em;
  text-align: center;

  position: absolute;
  bottom: -20px;
`;

export const BackImageAction = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  left: 0px;
  z-index: 1;
  cursor: pointer;
`;
export const NextImageAction = styled(BackImageAction)`
  left: auto;
  right: 0px;
`;

export const ImageLabels = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: end;
  left: -1px;
  bottom: -4px;
  > * + * {
    margin-top: 3px;
  }
`;

export const ImageLabelNumberText = styled.p<{ selected: boolean }>`
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.36px;
  letter-spacing: -0.03em;
  text-align: left;
  width: fit-content;

  color: ${(props) => (props.selected ? "#D5BF55" : "#000000")};

  &:hover {
    * {
      cursor: pointer;
      color: #d5bf55;
    }
  }
`;
