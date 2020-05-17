import React, { Component } from 'react';
import { Link } from "react-router-dom";


class RegistrationPage extends Component {
    render() {
    return(  
    <div>
        <h3> Registration Page </h3>
        <label>First Name:</label>&nbsp;
        <input type="text" value ="First Name"/>
        <br/>
        <br/>
        <label>Last Name:</label>&nbsp;
        <input type="text" value ="Last Name"/>
        <br/>
        <br/>
        <label>Date of Birth:</label>&nbsp;
        <input type="text" value ="DOB"/>
        <br/>
        <br/>
        <label>Mail Id:</label>&nbsp;
        <input type="text" value ="email"/>
        <br/>
        <br/>
        <label>Mobile No:</label>&nbsp;
        <input type="text" value ="1234567890"/>
        <br/>
        <br/>
        <Link to="/">
            <button type="button">Back</button>
        </Link>
        &nbsp;
        <input type="button" value ="Submit"/>
        <br/>
    </div>
        );
    }
} 

export default RegistrationPage;