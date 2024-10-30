import styled from "styled-components";

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TextContainer = styled(ColumnContainer)`
  margin-bottom: 1rem;
`;

export const BodyTextContainer = styled(TextContainer)`
  max-width: 360px;
`;

export const BodyText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16.94px;
  font-family: Inter;
  letter-spacing: -0.03em;
  text-align: left;
`;

export const HeaderText = styled(BodyText)`
  font-weight: 600;
  font-family: "Archivo", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
  font-size: 24px;
`;

export const HeaderContainer = styled(ColumnContainer)``;
