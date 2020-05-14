import styled from "styled-components";
import { mediaQuery } from "../../common/media";
import { screenSize, tabSize } from "../../common/constant";

export const HeaderContainer = styled.div`
  margin: 0;
  width: 100%;
  background: white;
  height: 4rem;
  box-shadow: rgba(194, 194, 194, 0.3) 0px 2px;
`;

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: ${tabSize.large}px;

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

export const Title = styled.h2`
  margin: 1rem;
  height: 2rem;
`;
