import styled from "styled-components";

export const InfoPage = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 100px;

  > * + * {
    margin-top: 50px;
  }
  padding: 0 25px;
`;

export const InfoText = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.94px;
  letter-spacing: -0.03em;
  text-align: left;
`;
