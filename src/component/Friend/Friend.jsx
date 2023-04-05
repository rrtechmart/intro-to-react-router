import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    // console.log(friend);
    const {name, phone, email, id} = friend;
    return (
        <div className='friend'>
            <h4>Name:{name}</h4>
            <p>Phone No: {phone}</p>
            <p>Email:{email}</p>
            <p> <Link to={`/friend/${id}`}>Friend Detail</Link> </p>
            
        </div>
    );
};

export default Friend;