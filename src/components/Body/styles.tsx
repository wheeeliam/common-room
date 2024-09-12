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
    margin-top: 0.75rem;
  }
  right: 60px;
  bottom: 50%;

  left: min(calc(-100% / 4 + 100vw / 2 + 430px), calc(100% / 4 * 3));
  margin-left: auto;
  margin-right: auto;
  right: 0;
  text-align: center;
`;

export const ImageLabel = styled(RowContainer)<{ selected: boolean }>`
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.36px;
  letter-spacing: -0.03em;
  text-align: left;

  color: ${(props) => (props.selected ? "#33ea00" : "#000000")};

  &:hover {
    * {
      cursor: pointer;
      color: #33ea00;
    }
  }
`;

export const BodyNumberText = styled(BodyText)`
  width: 60px;
`;

export const ImageContainer = styled.div``;

export const HeroImage = styled.img`
  position: absolute;
  max-height: min(1000px, calc(100vh - 204px));
  max-width: min(800px, calc(100% / 4 * 3 - 120px));
  left: calc(-100% / 4);
  margin-left: auto;
  margin-right: auto;
  right: 0;
  text-align: center;
`;
