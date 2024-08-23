import React, { Component } from "react";
import "./styles/newsItems.css";
import noImage from "./images/no-image.jpg";

export class NewsItem extends Component {

  render() {
    let { title, description, category, imgUrl, newsUrl, date, source } = this.props;
    const newsColor = (category) => {
      switch(category) {
        case "business":
          return "#1E90FF"; // Dodger Blue
        case "entertainment":
          return "#FF4500"; // Orange Red
        case "general":
          return "gray"; // Lime Green
        case "health":
          return "#FF1493"; // Deep Pink
        case "science":
          return "#8A2BE2"; // Blue Violet
        case "sports":
          return "#FF5722"; // Gold
        case "technology":
          return "#00CED1"; // Dark Turquoise
        default:
          return "#000000"; // Default to Black if category doesn't match
      }
    };

    
    return (
      <>
        {newsUrl ? (
          title!=="[Removed]"?
                <div className="card my-3"style={{height: "24rem"}}>
                  <a href={newsUrl} target="_blank" rel="noreferrer" className="">
                  <span style={{zIndex:1, left:"90%", backgroundColor:newsColor(category)}} className="position-absolute top-0 translate-middle badge rounded-pill">
                    {source}
                  </span>
                    {imgUrl ? (
                      <img className="card_image" src={imgUrl} alt="..."
                          onError={(e) => { 
                            const fallbackElement = document.createElement("img");
                            fallbackElement.src = noImage; 
                            fallbackElement.classList.add("image-fallback");
                            e.target.parentNode.replaceChild(
                              fallbackElement,
                              e.target
                            );
                          }}
                        />
                    ) : (
                      <img src={noImage} className="card_image" alt="..." />
                    )}
                    <div className="card-body d-flex align-content-around flex-wrap">
                      <div>
                      {title ? (
                        <h5 className="card-title" style={{ color: "black" }}>
                          {window.innerWidth >= 991
                          ? (title ? (title.length > 75 ? `${title.slice(0, 75)}...` : title) : "")
                          : window.innerWidth>766 
                            ? (title ? (title.length > 45 ? `${title.slice(0, 75)}...` : title) : "")
                            : (title ? (title.length > 130 ? `${title.slice(0, 130)}...` : title) : "")
                      }
                        </h5>
                      ) : (
                        <h5>No Title</h5>
                      )}

                      {description ? 
                      (
                        <p className="card-text">
                          {


                            window.innerWidth<1200?

                                window.innerWidth >= 991
                                    ? (description ? (description.length > 90 ? `${description.slice(0, 90)}...` : description) : "")
                                    : window.innerWidth>766 
                                      ? (description ? (description.length > 10 ? `${description.slice(0, 10)}...` : description) : "")
                                      : (description ? (description.length > 150 ? `${description.slice(0, 150)}...` : description) : "")
                            : (description.length > 155 ? `${description.slice(0, 155)}...` : description)



}
                        </p>
                      ) : (
                        <p>No description...</p>
                      )}

                      </div>
                      <p className="card-text my-2" style={{fontSize:"12px"}}><small className="text-body-secondary">Published At:   {new Date(date).toDateString()}</small></p>
                    </div>
                  </a>
                </div>
                :
                ""
        ) : (

          ""
        )}
      </>
    );
  }
}

export default NewsItem;
