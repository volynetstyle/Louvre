import React from "react";
import { Link } from "react-router-dom";
import { IPostData } from "../../types/interfaces/IPostData";

function SinglePost({ postData }: { postData: IPostData }) {
  return (
    <div className="single-post">
      <ul className="tags pb-2">
        {postData.tags.map((tag, index) => (
          <li key={index}>
            <a href="#">{tag}</a>
          </li>
        ))}
      </ul>
      <img className="img-fluid" src={postData.image} alt="" />
      <a href="blog-single.html">
        <h1>{postData.title}</h1>
      </a>
      <p>{postData.content}</p>
      <div className="bottom-meta">
        <div className="user-details row align-items-center">
          <div className="comment-wrap col-lg-6">
            <ul>
              <li>
                <a href="#">
                  <span className="lnr lnr-heart"></span> {postData.likes} likes
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="lnr lnr-bubble"></span>{" "}
                  {postData.comments} Comments
                </a>
              </li>
            </ul>
          </div>
          <div className="social-wrap col-lg-6">
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-behance"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
