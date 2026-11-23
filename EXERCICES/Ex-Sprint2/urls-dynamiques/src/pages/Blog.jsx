import { Link } from "react-router-dom";
import articles from "../data/articles";

function Blog() {
  return (
    <>
      <h1>Liste des articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.titre}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Blog;
