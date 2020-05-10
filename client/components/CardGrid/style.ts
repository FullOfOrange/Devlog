import styled from "styled-components";
import { mediaQuery } from "../../common/media";
import { screenSize, tabSize } from "../../common/constant";

export const CardGridContainer = styled.div`
  width: ${tabSize.large}px;
  margin: 0 auto;

  ${mediaQuery(screenSize.large)} {
    width: ${tabSize.middle}px;
  }
  ${mediaQuery(screenSize.middle)} {
    width: ${tabSize.small - 32}px;
  }
  ${mediaQuery(tabSize.small)} {
    width: calc(100% - 2rem);
  }
`;
