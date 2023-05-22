import axios from 'axios';
import React, { useState } from 'react';
import { BASE_URL } from '../BASE_URL';
import { ListGroup, ListGroupItem, Card, Button } from 'react-bootstrap';
import { TfiCommentAlt } from 'react-icons/Tfi';
import { FaComment } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';


function PostCard({ post }) {
    const navigate = useNavigate()
    const [comments, setComments] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);

    const getComments = () => {
        setIsLoading(true);

        axios.get(`${BASE_URL}/posts/${post.id}/comments/`)
            .then(res => { 
                setComments(res.data);
                setTimeout(() => {setIsLoading(false)}, 500);
            })
            .catch(err => console.log('err', err))
    }

    const showMore = userId => {
        navigate(`/user/${userId}`);
    } 

    return (
        <Card style={{ width: '18rem' }} key={post.id} className='m-2 post-card'>
            <Card.Body>
                <img src="https://picsum.photos/100" onClick={() => showMore(post.userId)} />
                <Card.Title>Theme: {post.title}</Card.Title>
                <Card.Text>
                    {post.body}
                </Card.Text>

                <Button variant="outline-dark" onClick={getComments}>Show Comments <TfiCommentAlt className='mx-2'/></Button>

                {/* Comments for this post will be shown below */}
                {
                    isLoading ? <center><Loader /></center> :
                     <ListGroup >
                        {comments.map(c => <ListGroupItem key={c.id}>
                            <FaComment/> 
                            <h5> 
                                Title: <i><u>{c.name}</u></i>
                            </h5>
                            <h6>By: <a href={`mailto:${c.email}`}><i>{c.email}</i></a></h6>

                            <p>{c.body}</p>
                            
                        </ListGroupItem>)}
                    </ListGroup>
                }

            </Card.Body>
        </Card>
    );
}

export default PostCard;