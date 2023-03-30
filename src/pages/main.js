import React from 'react';

const Main = () => {
    const post = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, inventore.",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, possimus atque enim   deleniti vitae dolores maiores rem fuga! Accusamus beatae aspernatur consequuntur   consequatur quas eligendi dolorem saepe quae! Rem numquam repellendus ratione veniam",
            img: "https://publir.com/blog/wp-content/uploads/2021/08/blog.jpg"
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, inventore.",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, possimus atque enim   deleniti vitae dolores maiores rem fuga! Accusamus beatae aspernatur consequuntur   consequatur quas eligendi dolorem saepe quae! Rem numquam repellendus ratione veniam",
            img: "https://unliderconvision.net/wp-content/uploads/2020/06/Is-blogging-relevant-anymore.jpeg"
        },
        {
            id: 3,
            title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, inventore.",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, possimus atque enim   deleniti vitae dolores maiores rem fuga! Accusamus beatae aspernatur consequuntur   consequatur quas eligendi dolorem saepe quae! Rem numquam repellendus ratione veniam",
            img: "https://unliderconvision.net/wp-content/uploads/2020/06/Is-blogging-relevant-anymore.jpeg"
        },
        {
            id: 4,
            title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, inventore.",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, possimus atque enim   deleniti vitae dolores maiores rem fuga! Accusamus beatae aspernatur consequuntur   consequatur quas eligendi dolorem saepe quae! Rem numquam repellendus ratione veniam",
            img: "https://unliderconvision.net/wp-content/uploads/2020/06/Is-blogging-relevant-anymore.jpeg"
        }
    ]


  return (
    <div>
      <div className="posts">
        {
            post.map((item,values)=>(
                <div key={values}>
                    <div className="post-id">{item.id}</div>
                    <div className="post-title">{item.title}</div>
                    <div className="post-description">{item.description}</div>
                    <div className="post-img img-fluid">{item.img}</div>
                    <p>Read More</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Main;