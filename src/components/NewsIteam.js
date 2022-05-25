import React from "react";

const NewsIteam = (props) => {
  return (
    <div
      style={{
        boxShadow: "-1px -1px 1px 1px gray, 1px 1px 1px 1px gray",
        marginRight: "25px",
        marginBottom: "20px",
      }}
    >
      <div className="card my-4 m-0 p-0">
        <span
          className=" badge rounded-pill top-0"
          style={{
            position: "absolute",
            right: "0",
            backgroundColor: "gray",
          }}
        >
          {props.name}
        </span>

        <img
          src={
            props.imageUrl
              ? props.imageUrl
              : "https://images.indianexpress.com/2022/05/Terra-Luna-Bitcoin-Reserve-disappeared.jpg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}...</h5>
          <p className="card-text">{props.description}...</p>
          <p className="card-text">
            <h6 style={{ color: "gray" }}>
              On Date {new Date(props.date).toGMTString()} By Author{" "}
              {!props.author ? "unknown" : props.author}
            </h6>
          </p>
          <a
            href={props.newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm rounded-pill"
            style={{
              backgroundColor: "gray",
              color: "white",
            }}
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsIteam;
