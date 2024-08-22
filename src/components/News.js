import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {
  static defaultProps = {
    category: "general",
    apiKey: "7cad5226c20542d99dd8d20b5f838dd5",
    pageSize: 5
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      pageSize: this.props.pageSize,
      loading: false,
      totalResults: 0
    };
    document.title = `News - ${this.props.category[0].toUpperCase()+this.props.category.slice(1)}`
  }

  API_Url = `https://newsapi.org/v2/everything?q=${this.props.category}&sortBy=publishedAt&language=en&apiKey=${this.props.apiKey}`;

  fetchData = async (page) => {
    const Url = `${this.API_Url}&page=${page}&pageSize=${this.state.pageSize}`;
    try {
      this.setState({ loading: true });
      const res = await fetch(Url);
      const data = await res.json();
      this.setState({
        articles: data.articles,
        totalResults: data.totalResults,
        page: page,
        loading: false,
      });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.fetchData(this.state.page);
  }

  handlePageChange = (direction) => {
    const newPage = this.state.page + direction;
    if (newPage >= 1 && newPage <= Math.ceil(this.state.totalResults / this.state.pageSize)) {
      this.fetchData(newPage);
    }
  };
  render() {
    console.log(this.API_Url)
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center">
            TAHSIN News - {this.props.category === "general" ? "Top Headlines" : this.props.category[0].toUpperCase() + this.props.category.slice(1)}
          </h2>

          <div className="container d-flex justify-content-between my-4">
            <button
              disabled={this.state.page <= 1}
              className="btn btn-primary"
              onClick={() => this.handlePageChange(-1)}
            >
              ← Previous Page
            </button>
            <button
              disabled={this.state.page >= Math.ceil(this.state.totalResults / this.state.pageSize)}
              className="btn btn-primary"
              onClick={() => this.handlePageChange(1)}
            >
              Next Page &rarr;
            </button>
          </div>

          {this.state.loading && <Spinner />}

          <div className="row my-1">
            {!this.state.loading && this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    date={element.publishedAt}
                    source={element.source.name}
                    category={this.props.category}
                  />
                </div>
              );
            })}
          </div>

          <div className="container d-flex justify-content-between my-4">
            <button
              disabled={this.state.page <= 1}
              className="btn btn-primary"
              onClick={() => this.handlePageChange(-1)}
            >
              ← Previous Page
            </button>
            <button
              disabled={this.state.page >= Math.ceil(this.state.totalResults / this.state.pageSize)}
              className="btn btn-primary"
              onClick={() => this.handlePageChange(1)}
            >
              Next Page &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}
