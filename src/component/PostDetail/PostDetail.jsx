import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();

    const navigate = useNavigate()
    const handleGoBack = ()=>{
        navigate(-1)
    }
    return (
        <div>
            <h3>Title: {post.title} </h3>
            <p> {post.body} </p>
            <button onClick={handleGoBack}>Go Back</button>
            
        </div>
    );
};

export default PostDetail;