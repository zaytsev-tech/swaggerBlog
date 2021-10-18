import React, {useEffect} from 'react';
import './content.less';
import {getPosts, getUser} from '../actions/repos';
import { useDispatch, useSelector } from 'react-redux';
import Post from './post/Post'

const Content = () => {
    const user = getUser();
    const dispatcher = useDispatch();
    const posts = useSelector(state => state.repos.posts);
    useEffect(() => {
        dispatcher(getPosts());
    }, []);
    return (
        <div>
            {posts.map(post => {
                return <Post post={post} user={user.id}/>
            })}
        </div>
    )
}

export default Content;