import React,  {useState, useEffect} from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import Loader from "../components/UI/Loader";
import Pagination from '../components/Pagination';

import {usePosts} from '../hooks/usePosts';
import {useFetching} from '../hooks/useFetching';
import PostService from '../API/PostService';
import {getPageCount} from '../Utils/pages';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPageCount, setTotalPageCount] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const [fetchData, isLoading, error] = useFetching(async () => {
        const res = await PostService.getAll(limit, page);
        setPosts([...res.data]);
        setTotalPageCount(getPageCount(res.headers['x-total-count'], limit));
    });

    useEffect(() => {
        fetchData();
    }, [page]);


    const createPost = post => {
        setPosts([...posts, post]);
        setModal(false);
    };

    const removePost = post => {
        setPosts(posts.filter(p => p.id !== post.id));
    };


    return (
        <div className="App">
            <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {error && <h1>Произошла ошибка {error}</h1>}
            {isLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader/></div>
                : <PostList posts={sortedAndSearchedPosts} title={'Posts'} removePost={removePost}/>
            }
            <Pagination
                totalCount={totalPageCount}
                setPage={setPage}
                page={page}
            />
        </div>
    );
}

export default Posts;
