import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({post}) => {
    const {title, id, body} = post;
    
// handle onClick start ....................
    const navigate = useNavigate();
    const handleNavigate = ()=>{
        navigate(`/post/${id}`)
    }
// Handle onClick end.......................
    return (
        <div className='post'>
            <h3>{title} </h3>
            <h6> {id}</h6>
            <p>{body}</p>
            <Link to={`/post/${id}`}>Show Details</Link>
            <Link to={`/post/${id}`}><button>Show post Details </button></Link>
            <button onClick={handleNavigate}>Navigate post Details </button>
        </div>
    );
};

export default Post;