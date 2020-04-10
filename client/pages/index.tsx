import { NextPage } from "next";

const Home: NextPage = () => (
  <h1>Hello world! - user agent</h1>
);

// 초기 화면 그릴 때 사용됨, NextPage 에서 받아서 사용함
Home.getInitialProps = async ({ req }) => {
  return;
};

export default Home;
