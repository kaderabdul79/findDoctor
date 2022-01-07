import React from 'react';

const Blog = ({id,name,title}) => {
    const handleClick = (id) => {
        console.log(id)
    }
    return (
        <div style={backgroundColor = "tomato"}>
            <ul>
                <li>{name}</li>
                <li>{title}</li>
            </ul>
            <button onClick={() => handleClick(id)}>Delete</button>
        </div>
    );
};

export default Blog;