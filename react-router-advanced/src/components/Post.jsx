import { useParams } from "react-router-dom";

export default function Post() {
  const { id } = useParams();
  return (
    <div>
      <h1>Dynamic Post Page</h1>
      <p>
        Post ID from URL: <strong>{id}</strong>
      </p>
    </div>
  );
}
