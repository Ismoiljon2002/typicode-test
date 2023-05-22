import React, { useState, useEffect, useContext } from 'react';
import { PostContext } from '../context/PostContext';
import { Container } from 'react-bootstrap';
import PostCard from '../components/PostCard';
import { BASE_URL } from '../BASE_URL';
import axios from 'axios';
import './styles/pages.css';
import Loader from '../components/Loader';

function Home() {

    const [ isLoading, setIsLoading ] = useState(true);

    const { posts, setPosts } = useContext(PostContext);

    useEffect(() => {
        if (posts.length === 0) {
            axios.get(`${BASE_URL}/posts/`)
            .then(res => {
                setPosts(res.data)
                setTimeout(() => {setIsLoading(false)}, 500)
            })
            .catch(err => console.warn('err', err))
        }
        setTimeout(() => {setIsLoading(false)}, 700)
    }, [])

    return (<div className='home page'>
        <Container>
            {
                isLoading ? <Loader />
                :
                posts.map(p => <PostCard post={p} key={p.id} />
                )
            }
        </Container>
    </div>);
}

export default Home;