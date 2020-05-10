import styled from "styled-components";
import { mediaQuery } from "../../common/media";
import { size } from "../../common/constant";

export const HeaderContainer = styled.div`
  margin: 0;
  width: 100%;
  background: white;
  height: 4rem;
`;

export const Container = styled.div`
  display: flex;
  margin: 0 auto;

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

export const Title = styled.h2`
  margin: 1rem;
  height: 2rem;
`;
