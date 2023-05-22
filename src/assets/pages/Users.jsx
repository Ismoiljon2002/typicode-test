import React, { useState, useEffect, useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { PostContext } from '../context/PostContext';
import { BASE_URL } from '../BASE_URL';
import axios from 'axios';
import Loader from '../components/Loader';
import PostCard from '../components/PostCard';
import UserDitails from '../components/UserDitailsCard';

function UsersPage() {
    const { userId } = useParams();
    const { posts, setPosts } = useContext(PostContext);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (posts.length === 0) {
            axios.get(`${BASE_URL}/posts/`)
                .then(res => {
                    setPosts(res.data);
                    setTimeout(() => { setIsLoading(false) }, 500);
                })
                .catch(err => console.warn('err', err))
        }
        setTimeout(() => { setIsLoading(false) }, 700);
    }, [])

    return (<div className='user page'>
        <Container>
            <UserDitails userId={userId} />


            {
                isLoading ? <Loader /> :
                    <div className="user-posts">
                        {
                            posts.filter(p => `${p.userId}` === userId).map(p => <PostCard post={p} key={p.id} />)
                        }
                    </div>
            }
        </Container>
    </div>);
}

export default UsersPage;