import React, { Component } from "react";
import "./styles/newsItems.css";
import noImage from "./images/no-image.jpg";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
    return (
      <>
        {newsUrl ? (
          <div
            className="card my-3"
            style={{ width: "18rem", height: "24rem" }}
          >
            <a href={newsUrl} target="_blank" rel="noreferrer" className="">
              {imgUrl ? (
                <img
                    className="card_image"
                    src={imgUrl}
                    alt="..."
                    onError={(e) => {

                      // Create a new element (div or img) for the fallback
                      const fallbackElement = document.createElement("img");

                      // Set content for the fallback element (text or image source)
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
                {title ? (
                  <h5 className="card-title" style={{ color: "black" }}>
                    {title.slice(0, 35)} {title.length > 35 ? "..." : ""}
                  </h5>
                ) : (
                  <h5>No Title</h5>
                )}
                {description ? (
                  <p className="card-text">
                    {description ? description.slice(0, 80) : ""}{" "}
                    {description ? (description.length > 80 ? "..." : "") : ""}
                  </p>
                ) : (
                  <p>No description</p>
                )}
              </div>
            </a>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default NewsItem;
