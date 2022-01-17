import React from "react";
import { Link } from "react-router-dom";

import "./ArticleCard.scss";
import { IImage } from "../../Types/SystemTypes";
import Subtitle from "../Atoms/Subtitle";
import Views from "../Atoms/Views";

interface Props {
  title: string;
  description: string;
  slug: string;
  views: number;
  image: IImage;
  date: Date;
}

const ArticleCard: React.FC<Props> = (props) => {
  return (
    <article className="article">
      <img className="article__img" {...props.image} />
      <Link to={`/blog/${props.slug}`} className="article__link">
        <Subtitle className="article__title">{props.title}</Subtitle>
      </Link>
      <p className="article__description">{props.description}</p>
      <div className="article__meta">
        <Views views={props.views} />
        <div className="article__date">{props.date.toLocaleDateString()}</div>
      </div>
    </article>
  );
};

export default ArticleCard;
