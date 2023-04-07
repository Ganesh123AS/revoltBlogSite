import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../authContext/authContext";
import axios from "axios";
import blog from "../img/blog.jpg";
import audit from "../img/edit.png";
import cross from "../img/delete.png";
import Menu from "../components/Menu";
import moment from "moment";
import DOMPurify from "dompurify";


const Single = () => {
  const [post, setPost ] = useState({});

    const location = useLocation();
    const navigate = useNavigate();
  
  
    const postId = location.pathname.split("/")[2];
    
    const { currentUser } = useContext(AuthContext);


    useEffect(() => {
      const fetchData = async () => {
        try{
          const res = await axios.get(`http://localhost:5000/posts/${postId}`);
          setPost(res.data)
          
        }catch(err){
          console.log(err)
        }
      }
      fetchData();
    }, [postId]);

    // const handleDelete = async ()=>{
    //   try {
    //     await axios.delete(`/posts/${postId}`);
    //     navigate("/")
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
  
    return (
      <div className="single">
        <div className="content">
          <img src={`../upload/${post?.img}`} alt="image" />
  
          <div className="user">
            {
              post.userImg && <img src={post.userImg} alt="image" />
            }
            <div className="info">
              <span>{post.username}</span>
              <p>posted {moment(post.date).fromNow()}</p>
            </div>
            {
              currentUser.username === post.username && (
                <div className="edit">
                  <Link to={`/write?edit=2`} state={post}>
                    <img src={audit} alt="edit-image" />
                  </Link>
                </div>
              )
            }
          </div>
  
            <h1>{post.title}</h1>
            <p dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(post.description),
            }}>
            </p>
        </div>
  
        <Menu category={post.category} />
      </div>
    )
}

export default Single;