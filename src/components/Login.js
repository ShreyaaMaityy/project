import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });
    const handleChange = (e) => {
        setInputs(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    };
    const sendRequest = async () => {
        const res = await axios.post('http://localhost:5000/api/login',{
            email: inputs.email,
            password: inputs.password
        })
        .catch(err => console.log(err));
        const data = await res.data;
        return data;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //send http request
        // eslint-disable-next-line no-restricted-globals
        sendRequest().then(() => history("/user"));
    };
    return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box 
        marginLeft="auto" 
        marginRight="auto" 
        width={300} 
        display="flex" 
        justifyContent="center"
        alignItems="center"
        flexDirection={'column'}
        >
            <Typography variant="h2">Login</Typography>

            
            <TextField 
            name="email"
            onChange={handleChange}
            type={"email"} 
            value={inputs.email} 
            variant="outlined" 
            placeholder="Email" 
            margin="normal"
            />
            <TextField 
            name="password"
            onChange={handleChange}
            type={"password"} 
            value={inputs.password} 
            variant="outlined" 
            placeholder="Password" 
            margin="normal"
            /> 
            <Button variant="contained" type="submit">Login</Button>
        </Box>
      </form>
    </div>
    )
};


export default Login


