import { useParams } from "react-router-dom";
import { fetchArticles } from "../data/articles";
import { useEffect, useState } from "react";

function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const foundArticle = fetchArticles().find((a) => a.id === Number(id));
    setArticle(foundArticle);
  }, [id]);

  if (!article) return <h1 className="text-danger">Article not found</h1>;

  return (
    <div className="container mt-4">
      <h1 className="display-4">{article.title}</h1>
      <p className="lead">{article.content}</p>
    </div>
  );
}

export default Article;