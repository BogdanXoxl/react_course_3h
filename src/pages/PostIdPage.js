import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {useFetching} from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching( async (id) => {
        const res = await PostService.getById(id);
        setPost(res.data);
    });

    const [fetchComments, isComLoading, ComError] = useFetching( async (id) => {
        const res = await PostService.getCommentsById(id);
        setComments(res.data);
    });


    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    },[]);

    return (
        <div>
            <h1>Пост #{params.id}</h1>
            {isLoading
                ? <Loader/>
                :  <div>{post.id} - {post.title}</div>
            }
            <h1>Коментарии</h1>
            {isComLoading
                ? <Loader/>
                :  <div>
                    {comments.map(comm => {
                        <div key={comm.id} style={{marginTop: 15}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    })}
                </div>
            }
        </div>
    );
};

export default PostIdPage;
