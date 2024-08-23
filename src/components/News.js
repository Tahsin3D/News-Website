import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    category: "general",
    apiKey: "7874475833724fc9a99a419e25d4e54a",
    pageSize: 5
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      pageSize: this.props.pageSize,
      loading: true,
      totalResults: 0,
    };
    this.props.updateProgress(10);
    document.title = `News - ${this.props.category[0].toUpperCase()+this.props.category.slice(1)}`
  }

  API_Url = `https://newsapi.org/v2/everything?q=${this.props.category}&sortBy=publishedAt&language=en&apiKey=${this.props.apiKey}`;


  fetchMoreData = async() =>
  {
    const Url = `${this.API_Url}&page=${this.state.page+1}&pageSize=${this.state.pageSize}`;

    this.setState({page: this.state.page+1});
    try{
      this.props.updateProgress(30);
      const res = await fetch(Url);
      this.props.updateProgress(50);
      const data = await res.json();
      
      this.props.updateProgress(70);
      this.setState({
        articles: this.state.articles.concat(data.articles)
      })
      this.props.updateProgress(100);
    }catch(err)
    {
      console.log(err);
    }
  }


  async componentDidMount() {
    const Url = `${this.API_Url}&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    try {
      this.props.updateProgress(20);
      this.setState({ loading: true });
      const res = await fetch(Url);
      this.props.updateProgress(40);
      const data = await res.json();
      this.props.updateProgress(60);
      this.setState({
        articles: data.articles,
        totalResults: data.totalResults,
        loading: false,
      });
      this.props.updateProgress(100);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    console.log(`URL:  ${this.API_Url}`)
    return (
      <>
        
          <h2 className="text-center">
            TAHSIN News - {this.props.category === "general" ? "Top Headlines" : this.props.category[0].toUpperCase() + this.props.category.slice(1)}
          </h2>

          {this.state.loading && <Spinner />}
          
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
          >
                <div className="container my-3">
                    <div className="row my-1">
                      {this.state.articles.map((element) => {
                        return (
                          element.title!=="[Removed]" &&
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
                      })}</div>
                      </div>
          </InfiniteScroll>

        
      </>
    );
  }
}
