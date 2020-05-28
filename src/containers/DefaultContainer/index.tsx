import React from "react";
import { Header } from "../../components";
import * as S from "./style";

export default ({
  container,
}: {
  container: React.ReactNode;
}): React.ReactElement => {
  return (
    <>
      <Header />
      <S.Container>{container}</S.Container>
    </>
  );
};
