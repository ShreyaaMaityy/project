/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
axios.defaults.withCredentials = true
let firstRender = true

const Welcome = () => {
  const [user, setUser] = useState();

  const refreshToken = async () => {
    const res = await axios.get("http://localhost:5000/api/refresh",{
      withCredentials: true
    }).catch(err => console.log(err))

    const data = await res.data;
    return data;
  }
  const sendRequest = async () => {
    const res = await axios.get('http://localhost:5000/api/user', {
      withCredentials: true
    }).catch(err => console.log(err));
    const data = await res.data;
    return data;
  }
  useEffect(() => {
    sendRequest().then((data) => setUser(data.user)) 
  },[])
  return <div>
    {user && <h1>{user.name}</h1>}
  </div>;
}

export default Welcome
