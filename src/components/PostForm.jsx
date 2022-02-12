import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = (props) => {
    const [post, setPost] = useState({title:'', body:''});
    const create = (e) => {
        e.preventDefault();
        const newpost = {
            id: Date.now(),
            ...post
        }
        props.create(newpost);
        setPost({title:'', body: ''});
    }
    return (
        <form>
            <MyInput value={post.title} type="text" onChange={e => setPost({...post, title: e.target.value})} placeholder="Название"/>
            <MyInput value={post.body} onChange={e => setPost({...post, body: e.target.value})} type="text" placeholder="Описание"/>
            <MyButton onClick={create}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;
