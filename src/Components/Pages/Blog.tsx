import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

import './Blog.scss'
import { selectArticles } from "../../Redux/Blog/Selectors";
import { PaginatedArticles } from "../../Types/ApiTypes";
import Title from "../Atoms/Title";
import Paginator from "../Molecules/Paginator";
import ArticlesList from "../Organisms/ArticlesList";
import ApiResponseTemplate from "../Templates/ApiResponseTemplate";

const Blog: React.FC = (props) => {
  const articles = useSelector(selectArticles);

  return (
    <ApiResponseTemplate
      render={() => (
        <>
          <Helmet></Helmet>
          <div className="blog">
            <Title className="blog__title">Blog</Title>
            <ArticlesList
              articles={(articles.data as PaginatedArticles).results}
            />
            <Paginator
              itemsCount={articles.data?.count ?? 0}
              pageItemsCount={articles.data?.results?.length ?? 0}
              totalPages={articles.data?.totalPages ?? -1}
              pageSize={12}
            />
          </div>
        </>
      )}
      pending={articles.pending}
      error={articles.error}
    />
  );
};

export default Blog;
