import styled from "styled-components";
import { mediaQuery } from "../../common/media";
import { size } from "../../common/constant";

export const CardGridContainer = styled.div`
  width: ${size.large}px;
  margin-left: auto;
  margin-right: auto;

  ${mediaQuery(1440)} {
    width: ${size.middle}px;
  }
  ${mediaQuery(1120)} {
    width: ${size.small - 32}px;
  }
  ${mediaQuery(size.small)} {
    width: calc(100% - 2rem);
  }
`;
