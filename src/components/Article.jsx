import React from 'react';
import { NavLink } from 'react-router-dom';

const Article = ({article}) => {
  return(
    <div className="media text-muted pt-3" id={article._id}>
      <svg className="bd-placeholder-img mr-2 rounded"
           width="32"
           height="32"
           xmlns="http://www.w3.org/2000/svg"
           preserveAspectRatio="xMidYMid slice"
           focusable="false" role="img" aria-label="Placeholder: 32x32">
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
      </svg>
      <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <strong className="d-block text-gray-dark">{article.byline}</strong>
        <NavLink to={`/article-detail/${article.id}`} exact>
          {article.title}
        </NavLink>
      </p>
    </div>
  )
 }

export default Article
