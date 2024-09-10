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
  justify-content: space-evenly;
  flex-grow: 1;
`;

export const BodyText = styled.p``;

export const ImageLabels = styled(ColumnContainer)`
  > * + * {
    margin-top: 0.75rem;
  }
  margin-top: 10rem;
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
