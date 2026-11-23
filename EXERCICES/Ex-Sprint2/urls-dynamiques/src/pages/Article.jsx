import { Link, useParams } from "react-router-dom";
import articles from "../data/articles";

function Article() {
  const { id } = useParams();
  const article = articles.find((article) => article.id === id);

  if (!article) {
    return (
      <>
        <h1>Article non trouvé</h1>
        <Link to="/">Retour à la liste des articles</Link>
      </>
    );
  }

  return (
    <>
      <h1>{article.titre}</h1>
      <p>{article.contenu}</p>
      <Link to="/">Retour à la liste des articles</Link>
    </>
  );
}

export default Article;
