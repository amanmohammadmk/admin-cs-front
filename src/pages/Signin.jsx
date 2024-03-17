import axios from 'axios';
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'



function Signin() {
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/register',{name,email,password})
        .then(results => {console.log(results)
            navigate('/login')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='container'>
            <Form onSubmit={handleSubmit} className='d-flex flex-column gap-4'>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        onChange={(e)=>setName(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>

            <Link to='/login'>
                <Button variant='danger' className='mt-3'>Login</Button>
            </Link>
        </div >
    )
}

export default Signin