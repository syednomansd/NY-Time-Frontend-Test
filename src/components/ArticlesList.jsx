import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const propTypes = {
  articles: PropTypes.array
};

const ArticlesList = (props) => {
  const { articles } = props;
  const allArticles = articles.map((art, index) => {
    return <Article key={`${index}${Math.random()}`} article={art} />;
  });

  return (
    <React.Fragment>
      {allArticles}
    </React.Fragment>
  );
};

ArticlesList.propTypes = propTypes;

export default ArticlesList;
