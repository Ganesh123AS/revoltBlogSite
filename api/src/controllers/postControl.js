const { pool } = require("../db/db");
const jwt = require('jsonwebtoken');



const getPosts = (req, res) => {
        const q =  "SELECT * FROM posts";

        pool.query(q, (err, data) => {
            if(err) return res.status(500).send(err)

            return res.status(200).json(data)
        });
    }


const getPost = (req, res) => {
        console.log("hello i am in get post")
        // const q = "SELECT * FROM post WHERE id = ?"
        const q = "SELECT p.id, `username`, `title`, `description`, p.img, u.img AS userIMG, `category`, `date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ";
    
        pool.query(q, [req.params.id], (err, data) => {
            if(err) return res.status(500).json(err);
            
            return res.status(200).json(data);
        })
};


const addPost = (req, res) => {
    // console.log(req.cookies)
        // const token = req.cookie.access_token;
        
        // if(!token) return res.status(401).json("Not authorized");

        // jwt.verify(token, "jwtkey", (err, userInfo) => {
        //  if(err) return res.status(403).json("Token invalid");

            const q = "INSERT INTO posts(`title`, `description`, `img`, `category`, `date`, `uid`) VALUES (?)";
           
            const values = [
                title = req.body.title,
                description = req.body.description,
                img = req.body.img || "",
                category = req.body.category || "",
                date = req.body.date,
                uid = 1,
            ];

            pool.query(q, [values], (err, data) => {
                if (err) return res.status(500).json(err);
                return res.json("post has been created successfully");
            });
        // });
}



const deletePost = (req, res) => {
        const token = req.cookies.access_token;

        if(!token) return res.status(401).json("Not authorized");

        jwt.verify(token, "jwtkey", (err, userInfo) => {
            if(err) return res.status(403).json("Token invalid"); 

            const postId = req.params.id;
            const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ? ";
            
            pool.query(q, [postId, userInfo.id], (err, data) => {
                if (err) return res.status(403).json("You can delete only your post");

                return res.json("post has been deleted successfully");
            })
        })
};

const updatePost = (req, res) => {
    try{
        const token = req.cookies.access_token;

        if(!token) return res.status(401).json("Not authorized");

        jwt.verify(token, "jwtkey", (err, userInfo) => {
            if(err) return res.status(403).json("Token invalid"); 

            const postId = req.params.id;
            const q = "UPDATE posts SET `title`=?, `description`=?, `img`=?, `category`=? WHERE `id`=? AND `uid` = ?  ";

            const values = [req.body.title, req.body.description, req.body.img, req.body.category ];

            pool.query(q, [...values, postId, userInfo.id], (err, data) => {
                if(err) return res.status(500).json(err);

                return res.json("Post has been updated successfully");
            })
        })

    }catch(e){
        console.log(e)
    }
};

exports.getPosts = getPosts;
exports.getPost = getPost;
exports.addPost = addPost;
exports.deletePost = deletePost;
exports.updatePost = updatePost;