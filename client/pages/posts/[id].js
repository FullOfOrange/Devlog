import Layout from "../../components/Layout";
import axios from "axios";

const Post = props => (
  <Layout>
    <h1>{props.post.Title}</h1>
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  
  const res = await axios.get(`http://localhost:8080/api/v1/posts/${id}`);
  const post = res.data;

  return { post };
};

export default Post;