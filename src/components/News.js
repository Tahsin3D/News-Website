import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [totalResults, setTotalResults] = useState(0)


    const pageSize = props.pageSize;
    props.updateProgress(10);
    document.title = `News - ${props.category[0].toUpperCase()+props.category.slice(1)}`
  const apiKey = "7cad5226c20542d99dd8d20b5f838dd5"

  const API_Url = `https://newsapi.org/v2/everything?q=${props.category}&sortBy=publishedAt&language=en&apiKey=${apiKey}`;



  const updateNews = async() => 
  {
    const Url = `${API_Url}&page=${page}&pageSize=${pageSize}`;
    try {
      props.updateProgress(20);
      setLoading( true );
      const res = await fetch(Url);
      props.updateProgress(40);
      const data = await res.json();
      props.updateProgress(60);

      setArticles(data.articles);
      setTotalResults(data.totalResults)
      setLoading(false);

      props.updateProgress(100);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    updateNews();
    return ()=> setPage(1);
    // eslint-disable-next-line
  }, [])





  const fetchMoreData = async() =>
  {
    const Url = `${API_Url}&page=${page+1}&pageSize=${pageSize}`;

    setPage(page+1);
    try{
      props.updateProgress(30);
      const res = await fetch(Url);
      props.updateProgress(50);
      const data = await res.json();
      
      props.updateProgress(70);
      setArticles(articles.concat(data.articles))
      props.updateProgress(100);
      console.log(Url)
    }catch(err)
    {
      console.log(err);
    }
  }

  


    return (
      <>
        
          <h2 className="text-center" style={{marginTop:"80px"}}>
            News - {props.category === "general" ? "Top Headlines" : props.category[0].toUpperCase() + props.category.slice(1)}
          </h2>

          {loading && <Spinner />}
          
          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
          >
                <div className="container my-3">
                    <div className="row my-1">
                      {articles.map((element) => {
                        return (
                          element.urlToImage!==null &&
                          <div className="col-md-4" key={element.url}>
                            <NewsItem
                              title={element.title}
                              description={element.description}
                              imgUrl={element.urlToImage}
                              newsUrl={element.url}
                              date={element.publishedAt}
                              source={element.source.name}
                              category={props.category}
                              mode={props.mode}
                            />
                          </div>
                        );
                      })}</div>
                      </div>
          </InfiniteScroll>

        
      </>
    );
}

News.defaultProps = {
  category: "general",
  apiKey: "7874475833724fc9a99a419e25d4e54a",
  pageSize: 5
};

export default News;