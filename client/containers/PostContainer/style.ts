import styled from "styled-components"

import { mediaQuery } from "../../common/media";
import { tabSize } from "../../common/constant";

export const Container = styled.div`
  width: ${tabSize.middle - 32}px;
  margin: 0 auto;

  ${mediaQuery(tabSize.middle)} {
    width: calc(100% - 2rem);
  }
`;
