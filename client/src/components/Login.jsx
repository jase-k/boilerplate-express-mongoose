import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Login = (props) => {
    const [user, setUser] = useState({})


    const handleChange = (e) =>{
        const {value, name} = e.target
        setUser({
                ...user,
                [name]:value
            })
    }
    return (
        <div>
            <form onSubmit={(e) => props.handleSubmit(e, user)}>
                {
                    props.isNewUser ?
                        (
                        <div>
                            <label htmlFor="name">Name: </label>
                            <input type="text" name="name" id="name" onChange={(e)=>{handleChange(e)}} value={user.name}/>
                        </div>
                        )
                        : ""
                }
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input type="text" name="email" id="email" onChange={(e)=>{handleChange(e)}} value={user.email}/>
                        </div>
                        <div>
                            <label htmlFor="password">Password: </label>
                            <input type="text" name="password" id="password" onChange={(e)=>{handleChange(e)}} value={user.password}/>
                        </div>
                {
                    props.isNewUser ?
                        (
                        <div>
                            <label htmlFor="confirmPassword">Confirm Password: </label>
                            <input type="text" name="confirmPassword" id="confirmPassword" onChange={(e)=>{handleChange(e)}} value={user.confirmPassword}/>
                        </div>
                        )
                        : ""
                }

                <button>
                {
                    props.isNewUser ?
                        "Register"
                        : "Login"
                }
                </button>
            </form>
            <button 
            style={{border: "none", textDecoration:"underline", color:"blue", cursor:"pointer"}}
            onClick={() => props.setIsNewUser(!props.isNewUser)}
            >
                {
                    props.isNewUser ?
                    "returning? Click Here to Login"
                    : "new user? Click Here to Register"
                }
            </button>
        </div>
    );
};

Login.propTypes = {};

export default Login;