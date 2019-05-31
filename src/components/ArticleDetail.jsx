import React, { Component } from 'react';
import Iframe from 'react-iframe';
import { NavLink } from 'react-router-dom';

class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      counter: 30,
    };
    this.fetchInitialArticles = this.fetchInitialArticles.bind(this);
  }

  componentDidMount() {
    this.fetchInitialArticles(0);
  }

  fetchInitialArticles() {
    const { counter } = this.state;
    const { id } = this.props.match.params;

    fetch(`https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/${counter}.json?api-key=m7gmJjeHDlM2x9D63QLhicPJk8xSxZYQ`)
      .then(res => res.json())
      .then(json => {
        json.results.map((art, index) => {
          if(art.id == id){
            this.setState({ url: art.url })
          }
        });
      });
  }

  render() {
    const { url } = this.state;

    return (
      <React.Fragment>
        <Iframe url={url}
          width="100%"
          height="600px"
          display="initial"
          position="relative" />
        <NavLink to="/" exact className="btn btn-primary white-text">Back</NavLink>
      </React.Fragment>
    );
  }
}

export default ArticleDetail;
