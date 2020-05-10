import React from "react";
import * as S from "./style";

const Header = (): React.ReactElement => {
  return (
    <>
      <S.HeaderContainer>
        <S.Container>
          <S.Title>Devlog</S.Title>
        </S.Container>
      </S.HeaderContainer>
    </>
  );
};
export default Header;
