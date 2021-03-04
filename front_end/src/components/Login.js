import '../Login.css';
import { BrowserRouter as Router, Link, Route } from 'react-dom';
import React, { useEffect, useState } from "react";

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
                localStorage.setItem('tokenaccess', data.accessToken)
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
                            console.log("You Can Access Now With : ", admin.phone, admin.password);
                            // check for state
                            redi.history.push('/Dashboard')
                        }
                    })
                })
            } else {
                alert("Error In Login")
                clearInput()
            }
        })
    }

    function clearInput() {
        const phone = document.querySelector('#phone').value = ""
        const password = document.querySelector('#password').value = ""
    }

    return (
        <div id="login">
            <div className="container bootstrap snippets bootdey">
                <div class="lc-block col-md-4 col-md-offset-4 toggled" id="l-login">
                    <div class="form-group">
                        <input type="text" onChange={event => setPhone(event.target.value)} class="form-control" placeholder="Enter Your Phone"/>
                    </div>
                    <div class="form-group">
                        <input type="password" className="form-control" onChange={event => setPassword(event.target.value)} placeholder="Enter Your Password" />
                    </div>
                    <div class="clearfix"></div>
                    <button href="" onClick={clickme} class="btn btn-block btn-primary btn-float m-t-25">Log In</button>
                </div>
            </div>
        </div>
    );
}

export default Login