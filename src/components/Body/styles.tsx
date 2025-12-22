import styled from "styled-components";

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BodyContainer = styled(RowContainer)`
  margin: 2rem 0;
  align-items: center;
  justify-content: space-evenly;
  flex-grow: 1;
  flex: 4;
  position: relative;
`;

export const BodyText = styled.p``;

export const ImageLabels = styled(ColumnContainer)`
  position: absolute;
  > * + * {
    margin-top: 6px;
  }
  right: 60px;
  bottom: 50%;

  left: min(
    calc(
      -100% / 4 + 100vw / 2 + min(calc((100vh - 200px) / 5 * 4 / 2) - 20px, 380px)
    ),
    calc(100% / 4 * 3) - 20px
  );
  margin-left: auto;
  margin-right: auto;
  right: 0;
  text-align: center;
`;

export const ImageLabel = styled(RowContainer)<{ selected: boolean }>`
  font-family: Inter;
  font-weight: 600;
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

  * {
    line-height: 14px;
    font-size: 12px;
  }
`;

export const BodyNumberText = styled(BodyText)`
  min-width: 25px;
`;

export const ImageContainer = styled.div``;

export const HeroImage = styled.img<{ show: boolean; horizontal: boolean }>`
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  max-height: ${(props) =>
    props.horizontal
      ? "min(800px, calc(100vh / 2 - 80px))"
      : "min(1000px, calc(100vh - 204px))"};
  max-width: ${(props) =>
    props.horizontal
      ? "min(800px, calc(100% / 4 * 2 - 60px))"
      : "min(800px, calc(100% / 4 * 3 - 120px))"};
  max-width: min(800px, calc(100% / 4 * 3 - 120px));
  left: calc(-100% / 4);
  margin-left: auto;
  margin-right: auto;
  right: 0;
  text-align: center;
  /* 
  @media screen and (max-width: 1280px) {
    max-width: ${(props) =>
    props.horizontal
      ? "min(800px, calc(100% / 4 * 2))"
      : "min(800px, calc(100% / 4 * 3 - 120px))"};
  } */
`;
