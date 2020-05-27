import React from "react";
import * as S from "./style";

export default (): React.ReactElement => {
  return (
    <>
      <S.Header>
        <S.HeaderContainer>
          <S.Title href={"/"}>Devlog</S.Title>
          <S.TabContainer>
            <S.TabButton>소개</S.TabButton>
            <S.TabButton>글</S.TabButton>
            <S.TabButton>GitHub</S.TabButton>
          </S.TabContainer>
        </S.HeaderContainer>
      </S.Header>
    </>
  );
};
