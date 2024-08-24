import React from "react";
import "./styles/PageStyle.css"
import noImage from "./images/no-image.jpg";

const NewsItem = ({
  title,
  description,
  category,
  imgUrl,
  newsUrl,
  date,
  source,
  mode
}) => {
  const newsColor = (category) => {
    switch (category) {
      case "business":
        return "#1E90FF"; // Dodger Blue
      case "entertainment":
        return "#FF4500"; // Orange Red
      case "general":
        return "#a7a7a7"; // Lime Green
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
        title !== "[Removed]" ? (
          <div className="card my-3" style={{ border: mode==="light"?"":"1px solid white", height: "24rem" ,color: mode==="light"?"black":"white", backgroundColor:mode==="dark"? "#444444": "#eeede7"}}>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="">
              {imgUrl ? (
                <>
                  <span
                    style={{
                      position: "absolute",
                      transform: "translate(-100%,-50%)",
                      left: "100%",
                      borderRadius: "5px",
                      backgroundColor: newsColor(category),
                    }}
                    className=" badge "
                  >
                    {source}
                  </span>
                  <div>
                    <img
                      style={{ borderRadius: "10px" }}
                      className="card_image"
                      src={imgUrl}
                      alt="..."
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
                  </div>
                </>
              ) : (
                <img src={noImage} className="card_image" alt="..." />
              )}
              <div className="card-body d-flex align-content-around flex-wrap">
                <div>
                  {title ? (
                    <h5 className="card-title" style={{ color: mode==="light"?"black":"white" }}>
                      {window.innerWidth >= 991
                        ? title
                          ? title.length > 75
                            ? `${title.slice(0, 75)}...`
                            : title
                          : ""
                        : window.innerWidth > 766
                        ? title
                          ? title.length > 55
                            ? `${title.slice(0, 55)}...`
                            : title
                          : ""
                        : title
                        ? title.length > 130
                          ? `${title.slice(0, 130)}...`
                          : title
                        : ""}
                    </h5>
                  ) : (
                    <h5>No Title</h5>
                  )}

                  {description ? (
                    <p className="card-text" style={{color: mode==="light"?"black":"white"}}>
                      {window.innerWidth < 1200
                        ? window.innerWidth >= 991
                          ? description
                            ? description.length > 90
                              ? `${description.slice(0, 90)}...`
                              : description
                            : ""
                          : window.innerWidth > 766
                          ? description
                            ? description.length > 30
                              ? `${description.slice(0, 30)}...`
                              : description
                            : ""
                          : description
                          ? description.length > 150
                            ? `${description.slice(0, 150)}...`
                            : description
                          : ""
                        : description.length > 150
                        ? `${description.slice(0, 150)}...`
                        : description}
                    </p>
                  ) : (
                    <p>No description...</p>
                  )}
                </div>
                <p className="card-text my-2" style={{ fontSize: "12px",color: mode==="light"?"black":"white" }}>
                  <small style={{fontWeight:"300"}} className="text-body-secondary">
                    Published At: {new Date(date).toDateString()}
                  </small>
                </p>
              </div>
            </a>
          </div>
        ) : (
          ""
        )
      ) : (
        ""
      )}
    </>
  );
};

export default NewsItem;
