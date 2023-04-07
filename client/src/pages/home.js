import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import img1 from "../img/img1.jpg";
import img2 from "../img/blog1.jpg";
import img3 from "../img/content.jpg";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const category = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/posts`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [category]);


  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }


  return (
    <>
      <div className="home-img">
        <img src={img1} alt="" />
      </div>

    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.description)}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Home;
