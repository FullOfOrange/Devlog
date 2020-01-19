import Layout from "../components/Layout";
import Link from "next/link";
import axios from "axios";

// 여기에서 href 가 현재 자신의 static directory 아래의 디렉토리를 의미함.
// [id] 의 id가 param 이 됨.
// 자세한 라우팅은 https://nextjs.org/docs/routing/dynamic-routes 이곳에

const Index = props => {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        {props.shows.map(show => (
          <li key={show.id}>
            <Link href="/posts/[id]" as={`/posts/${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};
// 기본 함수로써 최초에 데이터를 불러오는 함수임
Index.getInitialProps = async function() {
  const res = await axios.get("https://api.tvmaze.com/search/shows?q=batman");

  console.log(`Show data fetched. Count: ${res.data.length}`);

  return {
    shows: res.data.map(entry => entry.show)
  };
};
export default Index;