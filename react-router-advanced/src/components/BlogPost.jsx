import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Blog Post</h1>
      <p>
        Post ID: <strong>{id}</strong>
      </p>
      <p>This demonstrates dynamic routing.</p>
    </div>
  );
}
