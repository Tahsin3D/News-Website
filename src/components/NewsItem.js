import React, { Component } from "react";
import "./styles/newsItems.css";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
    return (
      <>
        {newsUrl ? (
          <a href={newsUrl} target="_blank" rel="noreferrer" className="">
            <div
              className="card my-3"
              style={{ width: "18rem", height: "24rem", overflow: "hidden" }}
            >
              {imgUrl ? (
                <img
                  src={imgUrl}
                  className="card_image"
                  alt="..."
                  onError={(e) => {
                    e.target.src =
                      "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg";
                  }}
                />
              ) : (
                <img
                  src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"
                  className="card_image"
                  alt="..."
                />
              )}
              <div className="card-body d-flex align-content-around flex-wrap">
                {title ? (
                  <h5 className="card-title" style={{ color:"red", textDecoration:"underline"}}>
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
            </div>
          </a>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default NewsItem;
