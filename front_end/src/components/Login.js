import '../App.css';
import { BrowserRouter as Router, Link, Route } from 'react-dom';
import React, { useEffect, useState } from "react";
import  { Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';

function Login (redi) {

    //console.log(props)

    // declare globale variables
    const [ph, setPhone] = useState()
    const [pass, setPassword] = useState()

    function clickme() {

        // test field :
        //console.log(ph, pass)

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
            //console.log(data.accessToken)
            if(data.accessToken){
                const token = localStorage.setItem('tokenaccess', data.accessToken)
                //console.log("rak dkhlti")
                fetch("http://localhost:3001/api/admins/all", {
                    method : 'GET',
                    headers : {
                        'Authorization': 'Bearer ' + data.accessToken,
                    }
                }).then(res => {
                    return res.json()
                }).then(info => {
                    //console.log(info)
                    info.map(admin => {
                        //console.log(admin)
                        if(admin.phone == ph && admin.password === pass){
                            console.log("t9der tdkhl db", admin.phone, admin.password);
                            // check for state
                            redi.history.push('/Dashboard')
                        }
                    })
                })
            } else {
                alert("dakchi lidklti machi s7i7")
                clearInput()
            }
        })
    }

    function clearInput() {
        const phone = document.querySelector('#phone').value = ""
        const password = document.querySelector('#password').value = ""
    }

    return (
    <div className="login-form">
        <div className="panel panel-primary">
            <div className="panel-body">
                <h2>Login</h2>
            </div>
        </div>
        <br/>
        <div className="panel panel-default">
            <div className="panel-body">
                <div>
                    <div className="input-group login-userinput">
                        <span className="input-group-addon"><span className="glyphicon glyphicon-user"></span></span>
                        <input id="phone" type="text" className="form-control" onChange={event => setPhone(event.target.value)} />
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon"><span className="glyphicon glyphicon-lock"></span></span>
                        <input id="password" type="password" className="form-control" onChange={event => setPassword(event.target.value)} />
                    </div>
                    <button type="submit" onClick={clickme} className="btn btn-primary btn-block login-button">Login</button>	
                </div>			
            </div>
        </div>
    </div>
    );
}

export default Login