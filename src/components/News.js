import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";


export default class News extends Component {
  static defaultProps = {
    category: "general",
    apiKey: "7cad5226c20542d99dd8d20b5f838dd5"
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      pageSize: this.props.pageSize,
      loading: false,
    };
  }


  API_Url =
  `https://newsapi.org/v2/top-headlines?category=${this.props.category}&language=en&sortBy=publishedAt&apiKey=${this.props.apiKey}`
  toPrevPage = async () => {
    let Url = `${this.API_Url}&page=${this.state.page - 1}&pageSize=${
      this.state.pageSize
    }`;
    try {
      
      this.setState({loading:true})
      const res = await fetch(Url);
      
      const data = await res.json();
      this.setState({
        articles: data.articles,
        page: this.state.page - 1,
        loading:false
      });
    } catch (err) {
      console.log(err);
    }
  };

  toNextPage = async () => {
    if (
      this.state.page + 1 <=
      Math.ceil(this.state.totalResults / this.state.pageSize)
    ) {
      
      let Url = `${this.API_Url}&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
      try {
        this.setState({loading:true});
        const res = await fetch(Url);
        
        const data = await res.json();
        this.setState({
          articles: data.articles,
          page: this.state.page + 1,
          loading:false
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  async componentDidMount() {
    
    let Url = `${this.API_Url}&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
    try {
      this.setState({loading:true})
      const res = await fetch(Url);
      const data = await res.json();
      this.setState({
        articles: data.articles,
        totalResults: data.totalResults,
        loading:false
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    console.log(this.API_Url)
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center">TAHSIN News - {this.props.category==="general"?'Top Headlines':this.props.category[0].toUpperCase()+this.props.category.slice(1)}</h2>

          <div className="container d-flex justify-content-between my-4">
            <button
              disabled={this.state.page <= 1}
              className="btn btn-primary"
              onClick={this.toPrevPage}
            >
              ← Previous Page
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.state.pageSize)
              }
              className="btn btn-primary"
              onClick={this.toNextPage}
            >
              Next Page &rarr;
            </button>
          </div>
              {this.state.loading && <Spinner/>}
          <div className="row my-1">
          {!this.state.loading && this.state.articles.map((element) => {
              return (
                <div className="col-md-4">
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>

          <div className="container d-flex justify-content-between my-4">
            <button
              disabled={this.state.page <= 1}
              className="btn btn-primary"
              onClick={this.toPrevPage}
            >
              ← Previous Page
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.state.pageSize)
              }
              className="btn btn-primary"
              onClick={this.toNextPage}
            >
              Next Page &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}
