import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Login from '../components/Login';
import { useNavigate } from 'react-router';
import { API_URL } from '..';

const Index = () => {
    const [ message, setMessage ] = useState("Uh Oh! You Are Not Connected to DB")
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isNewUser, setIsNewUser] = useState(true)
    const navigate = useNavigate();

    const [ color, setColor ] = useState("red")

    useEffect(()=>{
        axios.get(API_URL+"/api", {withCredentials:true})
            .then(res=> {
                console.log(res)
                setMessage(res.data.message)
                setColor("green")
            })
            .catch(err => {
                console.log(err.response)
                let {data} = err.response
                if(data.verified === false){
                    setMessage("Shucks! You unAuthorized to the DB")
                    setColor("orange")
                }
                else{
                    setMessage("Uh Oh! You Are Not Connected to DB")
                    setColor("red")
                }
            })
    }, [isLoggedIn]);
    const handleSubmit = (e, user) =>{
        e.preventDefault()
        if(isNewUser){
            axios.post(API_URL+"/register", {
                ...user
            }, {withCredentials:true})
            .then(res => {
                console.log(res)
                setIsLoggedIn(true)
            })
            .catch(err => {
                console.log(err.response)
            })
        }
        else{
            axios.post(API_URL+"/login", {
                ...user
            }, {withCredentials:true})
            .then(res => {
                console.log(res)
                setIsLoggedIn(true)
            })
            .catch(err => {
                console.log(err.response)
            })
        }
    }
    const handleLogout = ()=>{
        console.log("logging out")
        axios.get(API_URL+"/logout", {withCredentials: true}).then(res => {
            console.log(res)
            setIsLoggedIn(false)
            navigate('/')
        })
    }
    return (
        <div>
            <h2>Message from the backend:<strong style={{color: color}}>{message}</strong></h2>
            < Login  
            handleSubmit= {(e, user) => handleSubmit(e, user)}
            setIsNewUser= {setIsNewUser}
            isNewUser = {isNewUser}
            />
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
};

Index.propTypes = {};

export default Index;
