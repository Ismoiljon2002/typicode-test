import React, { useState, useEffect } from 'react';
import { Table, Card, Button } from 'react-bootstrap';
import { BASE_URL } from '../BASE_URL';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from './Loader';

function UserDitails({ userId }) {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(`${BASE_URL}/users/${userId}`)
            .then(res => {
                setUser(res.data);
                setTimeout(() => {setIsLoading(false)}, 500)
            })
            .catch(err => console.warn('err', err));
    }, [])

    const { name, email, phone, website, address, company } = user;

    return (
        <Card className="user-details">
            <Card.Body>
                <h2>User Details</h2>

                {
                    isLoading ? <Loader /> :
                        <Table bordered>
                            <tbody>
                                <tr>
                                    <td><b>Name:</b> {name} </td>
                                    <td><b>Email:</b> {email} </td>
                                    <td><b>Phone Number:</b> {phone} </td>
                                    <td><b>Website:</b> {website} </td>
                                </tr>

                                <tr>
                                    <td colSpan={2}><b>Address:</b> {address?.suite}, {address?.street}, {address?.city}, {address?.zipcode}</td>
                                    <td><b>Company name:</b> {company?.name}</td>
                                    <td>
                                        <Link to="/">
                                            <Button variant="dark">Back to Home</Button>
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                }

            </Card.Body>
        </Card>
    );
}

export default UserDitails;