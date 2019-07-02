import React from "react";
import axios from "axios";
import Loading from "./Loading";

import NewsCards from "./NewsCards";
class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsArticles: null,
      show: false,
      isLoading: false
    };
  }

  componentDidMount = () => {
    this.setState({ isLoading: true });
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=981691bace534d09a8935a6d53bfa1be",
        { timeout: 5000 }
      )
      .then(response => {
        var newsArticles = response.data.articles.flatMap((art, key) => (
          <li key={art.id}>{art.title}</li>
        ));

        this.setState({
          newsArticles: newsArticles,
          isLoading: false
        });
      });
  };

  render() {
    var newsTitles = this.state.newsArticles;
    var isLoading = this.state.isLoading;
    return (
      <div>
        <div>
          {this.state.isLoading ? (
            <Loading value={isLoading} />
          ) : (
            <NewsCards value={newsTitles} />
          )}
        </div>
      </div>
    );
  }
}

export default News;
