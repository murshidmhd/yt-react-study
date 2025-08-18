import { useEffect, useState } from "react";

function DataFetching() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((heyData) => setPosts(heyData))
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <ul>
        {posts.map((post) => {
          return <li key={post.id}> {post.title}</li>;
        })}
      </ul>
    </>
  );
}

export default DataFetching;
