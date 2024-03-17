import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Prevent form submission if email or password is empty
        if (!email || !password) {
            return;
        }

        axios.post('http://localhost:3001', { email, password })
            .then(results => {
                console.log(results);
                if (results.data.success) {
                    // Redirect to home page upon successful login
                    navigate('/home');
                } else {
                    // Handle unsuccessful login
                    console.error(results.data.message);
                }
            })
            .catch(err => {
                // Handle network or server errors
                console.error('An error occurred:', err);
            });
    };

    return (
        <div className='container gap-5'>
            <Form onSubmit={handleSubmit} className='d-flex flex-column gap-4'>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>

            <Link to='/register'>
                <Button variant='danger' className='mt-3'>Register</Button>
            </Link>
        </div>
    );
}

export default Login;
