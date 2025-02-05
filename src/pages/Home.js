import { useEffect, useState } from "react";
import { fetchArticles } from "../data/articles";
import ArticleCard from "../components/ArticleCard";

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then(setArticles);
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Articles</h1>
      <div className="row">
        {articles.map((article) => (
          <div key={article.id} className="col-md-6">
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;