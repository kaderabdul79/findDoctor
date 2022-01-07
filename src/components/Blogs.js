import React, { useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [blogs,setBlogs] = useState([
        {id:1,name:'kader',title:'I am kader'},
        {id:2,name:'hasan',title:'I am hasan'},
        {id:3,name:'akash',title:'I am akash'},
        {id:4,name:'forhad',title:'I am forhad'}
    ])
    return (
        <div>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;