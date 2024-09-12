import styled from "styled-components";

export const BodyText = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.03em;
  text-align: left;
`;

export const FooterContainer = styled(BodyText)`
  font-weight: 700;
`;

export const AnchorText = styled.a`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.03em;
  text-align: left;
  color: black;
  text-underline-offset: 3px;
  &:hover {
    cursor: pointer;
    color: #33ea00;
  }
`;
