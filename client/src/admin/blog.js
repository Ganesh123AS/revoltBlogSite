import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./blog.css";
import { Link } from 'react-router-dom';

const Blog = () => {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/posts")
        .then(response => setData(response.data))
        .catch(error => console.error(error));
    }, [])

  return (
    <div className='blog'>
      {
        data.map(item => (
            <div className='blog-section'>
                <div key={item.id}>
                    <div className='blog-title'>
                    <h2>{item.title}</h2>
                    {item.category ? <h1>{item.category}</h1> : null}
                    </div>
                    <div>
                    <p>{item.description}</p>
                    {item.img ? <img src={item.img} alt="image" /> : null}
                    </div>
                    <div className='blog-btn'>
                        <button><Link to={`/single/${item.id}`}>Read More....</Link></button>
                    </div>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default Blog;