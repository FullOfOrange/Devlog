import styled from "styled-components";
import { mediaQuery } from "../../common/media";
import { screenSize, tabSize } from "../../common/constant";

export const Header = styled.div`
  margin: 0; 
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  height: 4rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  height: 100%;
  margin: auto;
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

export const Title = styled.a`
  margin: auto auto auto 0;
  height: 2rem;
  font-weight: bold;
  font-size: 1.625rem;
  color: inherit;
  text-decoration: none;
`;

export const SubTitle = styled.a`
  margin: auto auto auto 0;
  height: 2rem;
  font-weight: bold;
  font-size: 1.625rem;
  color: inherit;
  text-decoration: none;
`;

export const TabContainer = styled.div`
  margin: auto 0 auto auto;
`;

export const TabButton = styled.a`
  margin: 1rem;
  text-decoration: none;
`;
