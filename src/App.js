import "./App.css";
import React from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";
function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        title: "Olá Mundo!",
        body: "Esta é uma nova postagem.",
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return null;

  return (
    <div className="App">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Post</button>
    </div>
  );
}

export default App;
