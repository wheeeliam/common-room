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

export const HeroImage = styled.img`
  width: calc(100% - 50px);
  height: auto;
  display: block;
`;

export const ImageNameText = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.94px;
  letter-spacing: -0.03em;
  text-align: center;

  position: absolute;
  bottom: -25px;
`;

export const BackImageAction = styled.div`
  position: absolute;
  width: calc(50% - 25px);
  height: 100%;
  left: 25px;
  z-index: 1;
  cursor: pointer;
`;
export const NextImageAction = styled(BackImageAction)`
  left: auto;
  right: 25px;
`;

export const ImageLabels = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 0;
  bottom: -5px;
  > * + * {
    margin-top: 4px;
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

  color: ${(props) => (props.selected ? "#33ea00" : "#000000")};

  &:hover {
    * {
      cursor: pointer;
      color: #33ea00;
    }
  }
`;
