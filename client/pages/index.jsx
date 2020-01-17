import Layout from '../components/Layout';
import Link from 'next/link';

// 여기에서 href 가 현재 자신의 static directory 아래의 디렉토리를 의미함.
const PostLink = props => (
  <li>
    <Link href="/posts/index" as={`/post/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);
export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="hello" />
        <PostLink id="Learn Next.js is awesome" />
        <PostLink id="Deploy apps with Zeit" />
      </ul>
    </Layout>
  );
}