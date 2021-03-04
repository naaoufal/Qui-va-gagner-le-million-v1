import '../Login.css'
import { useEffect, useState } from 'react'

function LoginUser (redi) {

    const [em, setEmail] = useState()
    const [ps, setPassword] = useState()

    function fetchforLogin() {
        fetch("http://localhost:3001/api/participants/PublicAll").then(res => {
            return res.json()
        }).then(data => {
            data.map(user => {
                //console.log(user.email, user.password, em, ps)
                if(user.email == em && user.password == ps){
                    //console.log(user)
                    
                    localStorage.setItem('data', JSON.stringify(user))
                    if(user.is_valid == true){
                        redi.history.push('/User')
                    } else {
                        redi.history.push('/Validation')
                    }
                    
                } else {
                    try {
                        const em = document.querySelector('#email').value = ""
                        const ps = document.querySelector('#pass').value = ""
                    } catch (error) {
                        console.log(error)
                    }
                }
            })
        })
    }

    return (
        <div id="register">
            <div className="container bootstrap snippets bootdey">
                <div class="lc-block col-md-4 col-md-offset-4 toggled" id="l-login">
                    <div class="form-group">
                        <input id="email" onChange={event => setEmail(event.target.value)} type="text" class="form-control" placeholder="Enter Your Email"/>
                    </div>
                    <div class="form-group">
                        <input id="pass" onChange={event => setPassword(event.target.value)} type="password" className="form-control"  placeholder="Enter Your Password" />
                    </div>
                    <div class="clearfix"><a href="/Register">Create New Account</a></div>
                    <button onClick={fetchforLogin}  class="btn btn-block btn-primary btn-float m-t-25">Log In</button>
                </div>
            </div>
        </div>
    )
}

export default LoginUser