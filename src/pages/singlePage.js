import React from 'react';
import blog from "../img/blog.jpg";
import audit from "../img/edit.png";
import cross from "../img/delete.png";

const SinglePage = () => {
  return (
    <div className="container mt-5 single">
      <div className="content">
        <img src={blog} alt="logo" />
        <div className="user">
          <img src={blog} alt="user-img" />
          <div className="info mt-5">
            <span>Sameer</span>
            <p>posted 2 days ago</p>
          </div>
          <div className="edit">
            <img src={audit} alt="edit" />
            <img src={cross} alt="delete" />
          </div>
        </div>
        <div className="menu">

        </div>
      </div>
    </div>
  )
}

export default SinglePage;