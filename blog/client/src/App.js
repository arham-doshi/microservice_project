import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

export default () => {
    return <div className='container'> 
        <h1>My app</h1>
        <PostCreate />
        <hr />
        <h1>Posts</h1>
        <PostList /> 
    </div>
};