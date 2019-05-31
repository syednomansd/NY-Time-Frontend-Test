import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ArticlesList from './components/ArticlesList';
import ArticleDetail from './components/ArticleDetail';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      counter: 30,
    };
    this.fetchInitialArticles = this.fetchInitialArticles.bind(this);
  }

  componentDidMount() {
    this.fetchInitialArticles(0);
  }

  fetchInitialArticles() {
    const { counter, articles } = this.state;
    fetch(`https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/${counter}.json?api-key=m7gmJjeHDlM2x9D63QLhicPJk8xSxZYQ`)
      .then(res => res.json())
      .then(json => this.setState({ articles: articles.concat(json.results) }));
  }

  render() {
    const { articles } = this.state;

    return (
      <Router>
        <div className="App">
          <main className="container">
            <Nav />
            <Route
              exact
              path="/"
              render={({ match }) => (
                <div className="p-3 bg-white rounded shadow-sm">
                  <h6 className="border-bottom border-gray pb-2 mb-0">Popular Article</h6>
                  <ArticlesList
                    articles={articles}
                  />
                </div>
              )}
            />
            <Route path="/article-detail/:id" component={ArticleDetail} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
