import '../App.css';
import { BrowserRouter as Router, Link, Route } from 'react-dom';
import React, { useEffect, useState } from "react";
import Home from './Home';
import  { Redirect } from 'react-router-dom';

function Login () {

    // declare globale variables
    const [ph, setPhone] = useState()
    const [pass, setPassword] = useState()

    

    function clickme() {

        // test field :
        console.log(ph, pass)

        fetch("http://localhost:3001/api/admins/login", {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                phone : ph,
                password : pass 
            })
        }).then(res => {
            return res.json()
        }).then(data => {
            console.log(data.accessToken)
            if(data.accessToken){
                console.log("rak dkhlti")
            } else {
                console.log("sir hta t9yd")
            }
        })
    }

    return (
        <div id="formulaire">
            <div className="mb-3">
                <label for="" class="form-label">Phone</label>
                <input type="text" class="form-control" onChange={event => setPhone(event.target.value)} />
            </div>
            <div className="mb-3">
                <label for="" class="form-label">Password</label>
                <input type="password" class="form-control" onChange={event => setPassword(event.target.value)} />
            </div>
            <button type="submit" onClick={clickme} class="btn btn-primary">Submit</button>
      </div>
    );
}

export default Login