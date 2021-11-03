import React, { useEffect, useState } from 'react'
import axios from 'axios';
import FirstComponent from '../components/FirstComponent';

const Index = () => {
    const [ message, setMessage ] = useState("Uh Oh! You Are Not Connected to DB")
    const [ color, setColor ] = useState("red")
    useEffect(()=>{
        axios.get("http://localhost:8000/api")
            .then(res=> {
                setMessage(res.data.message)
                setColor("green")
            })       
    }, []);
    return (
        <div>
            <h2>Message from the backend:<strong style={{color: color}}>{message}</strong></h2>
            < FirstComponent />
        </div>
    )
};

Index.propTypes = {};

export default Index;
