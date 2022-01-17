import React from "react";

import "./ArticlesList.scss";
import { Article } from "../../Types/ApiTypes";
import ArticleCard from "../Molecules/ArticleCard";

interface Props {
  articles: Article[];
}

const ArticlesList: React.FC<Props> = (props) => {
  return (
    <section className="articles">
      {props.articles.map((article) => (
        <ArticleCard
          key={article.pk}
          title={article.title}
          description={article.description}
          slug={article.slug}
          views={article.views}
          image={article.image}
          date={new Date(article.dateCreated)}
        />
      ))}
    </section>
  );
};

export default ArticlesList;
