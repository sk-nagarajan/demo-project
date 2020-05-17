import React, { Component } from 'react';
import { Link } from "react-router-dom";


class LoginPage extends Component {
    render() {
    return(  
    <div>
        <h3> User Registration Form </h3> 
        <p> New User?&nbsp;
            <Link to="/registration">Click here</Link></p>
        <br/>
        <br/>
        <label>User Id:</label>&nbsp;
        <input type="text" value ="User Name"/>
        <br/>
        <br/>
        <label>Password:</label>&nbsp;
        <input type="password" value ="password"/>
        <br/>
        <br/>
        <input type="button" value ="login"/>
        <br/>
    </div>
        );
    }
} 

export default LoginPage;