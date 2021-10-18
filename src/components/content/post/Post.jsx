import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost, getPosts } from '../../actions/repos';
import './post.less';

const Post = (props) => {
    const post = props.post;
    const user = props.user;
    const dispatcher = useDispatch();

    function updateContent() {
        dispatcher(getPosts());
    }
    if(user == post.user_id) {
        return (
        <div className="post">
            <div className="text-post">
                {post.text}
            </div>
            <div className="post-footer">
                <div className="post-footer__author">
                    Автор: {post.user_id}
                </div>
                <div className="post-footer__controller">
                    <button>Редактировать</button>
                    <button onClick={() => {deletePost(post.id); updateContent()}}>Удалить</button>
                </div>
            </div>
        </div>
        )} else {
            return (
            <div className="post">
                <div className="text-post">
                    {post.text}
                </div>
                <div className="post-footer">
                    <div className="post-footer__author">
                        Автор: {post.user_id}
                    </div>
                </div>
            </div>
            )
        }
}

export default Post;