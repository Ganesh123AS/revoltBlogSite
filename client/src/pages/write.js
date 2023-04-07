import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import moment from "moment";

const Write = () => {

  const state = useLocation().state;
  const [ value, setValue ] = useState(state?.title || "" );
  const [ title, setTitle ] = useState(state?.description || "" );
  const [ file, setFile ] = useState(null);
  const [ category, setCategory ] = useState(state?.category || "" );

  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await axios.post("http://localhost:5000/upload", formData);
      return res.data
    }catch (err){
      console.log(err);
    }
  }

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try{
      state ? await axios.put(`http://localhost:5000/posts/${state.id}`, {
        title,
        description: value,
        category,
        img: file ? imgUrl : "",
      })
      : await axios.post(`http://localhost:5000/posts`, {
        title,
        description: value,
        category,
        img: file ? imgUrl : "",
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      });

      navigate("/single");
      
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className="add">

    <div className="content">
      <input type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)} />

      <div className="editorContainer">
      <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
      </div>
    </div>

    <div className="menu">

    <div className="item">
      <h1>Publish</h1>
      <span> <b>Status : </b> Draft </span>
      <span> <b>Visibility : </b> Public </span>
      <input style={{display: "none"}} type="file" id="file" name="" onChange={(e) => setFile(e.target.files[0])} />
      <label className="file-content" htmlFor="file">Upload Image</label>

      <div className="buttons">
        <button>Save as a Draft</button>
        <button onClick={handleClick}>Publish</button>
      </div>
    </div>


    <div className="item">
      <h1>Category</h1>

      <div className="cat">
        <input type="radio" 
          checked={category === "python"}
          name="category"
          value="python"
          id="python"
          onChange={(e) => setCategory(e.target.value)} />
      <label htmlFor="python">Python</label>
      </div>

      <div className="cat">
        <input type="radio" 
          checked={category === "javascript"}
          name="category"
          value="javascript"
          id="javascript"
          onChange={(e) => setCategory(e.target.value)} />
      <label htmlFor="javascript">javaScript</label>
      </div>

      <div className="cat">
        <input type="radio" 
          checked={category === "node"}
          name="category"
          value="node"
          id="node"
          onChange={(e) => setCategory(e.target.value)} />
      <label htmlFor="node">Node JS</label>
      </div>

      <div className="cat">
        <input type="radio" 
          checked={category === "mysql"}
          name="category"
          value="mysql"
          id="mysql"
          onChange={(e) => setCategory(e.target.value)} />
      <label htmlFor="mysql">My SQL</label>
      </div>


      </div>



    </div>
    </div>
  );
}

export default Write;