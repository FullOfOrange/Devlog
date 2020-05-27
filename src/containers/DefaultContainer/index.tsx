import React from "react";
import { Header } from "../../components";

export default ({
  container,
}: {
  container: React.ReactNode;
}): React.ReactElement => {
  return (
    <>
      <Header />
      {container}
    </>
  );
};
