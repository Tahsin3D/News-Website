import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pageSize:15,
      totalResults: 20
    }
  }

  toPrevPage = async() => {
    try {
      let Url=`https://newsapi.org/v2/everything?q=tesla&from=2024-07-20&sortBy=publishedAt&apiKey=7cad5226c20542d99dd8d20b5f838dd5&page=${this.state.page -1}&pageSize=${this.state.pageSize}`;
      const res = await fetch(Url);
      const data = await res.json();
      this.setState({
        articles: data.articles,
        page: this.state.page-1
      })
    }
    catch(err) {
      console.log(err);
    }
  }
  
  toNextPage = async() => {
    if(this.state.page+1<=Math.ceil(this.state.totalResults/this.state.pageSize))
    {
      let Url=`https://newsapi.org/v2/everything?q=tesla&from=2024-07-20&sortBy=publishedAt&apiKey=7cad5226c20542d99dd8d20b5f838dd5&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
    try {
      const res = await fetch(Url);
      const data = await res.json();
      this.setState({
        articles: data.articles,
        page: this.state.page+1
      })
    }
    catch(err) {
      console.log(err);
    }
    }
  }

  async componentDidMount()
  {
    let Url=`https://newsapi.org/v2/everything?q=tesla&from=2024-07-20&sortBy=publishedAt&apiKey=7cad5226c20542d99dd8d20b5f838dd5&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;

    try {
      const res = await fetch(Url);
      const data = await res.json();
      this.setState({
        articles: data.articles,
        totalResults: data.totalResults
      })
    }
    catch(err) {
      console.log(err);
    }
  }

  render() {
    return (
      <>
        <div className="container my-3">
          
          <h2 className="text-center">NewsMonkey - Top Headlines</h2>

          <div className="container d-flex justify-content-between my-4">
            <button disabled={this.state.page<=1} className="btn btn-primary" onClick={this.toPrevPage}>← Previous Page</button>
            <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.state.pageSize)} className="btn btn-primary" onClick={this.toNextPage}>Next Page &rarr;</button>
          </div>

          <div className="row my-1">
            {this.state.articles.map((element)=>{
              return <div className="col-md-4">
                <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url}/>
              </div>
            })}
          </div>

          <div className="container d-flex justify-content-between my-4">
            <button disabled={this.state.page<=1} className="btn btn-primary" onClick={this.toPrevPage}>← Previous Page</button>
            <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.state.pageSize)} className="btn btn-primary" onClick={this.toNextPage}>Next Page &rarr;</button>
          </div>
        </div>
      </>
    );
  }
}
