import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";


const Menu = () => {
  const [posts, setPosts ] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(`http://localhost:5000/posts/`);
        setPosts(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchData();
  },);


  return (
    <div className="main-section">


      <div className="menu">
        <h1>Post You May Like....</h1>

          {
            posts.map((post) => (
              <div className="post" key={post.id}>
                  <img src={`../upload/${post?.img}`} alt="" />
              
                    <h1>{post.title}</h1>
                    <h1>{post.description}</h1>
                  <button>Read More</button>
            
              </div>
            ))
          }

        </div>
      </div>
  );
};

export default Menu;