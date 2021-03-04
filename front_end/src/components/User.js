import '../Login.css';
import React from 'react'
import ReactDOM from 'react-dom';
import $ from 'jquery';

function User (redi) {

    const dt = JSON.parse(localStorage.getItem('data'))
    //console.log(dt.fullname)

    function clearLocalStorage() {
        localStorage.clear()
        redi.history.push('/LoginUser')
    }

    // create new group:
    function createGroup() {
        var randCode = Math.floor(1000 + Math.random() * 9000);
        fetch("http://localhost:3001/api/participants/authGroup", {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                fullname : dt.fullname
            })
        }).then(res => {
            return res.json()
        }).then(data => {
            console.log(data.accessToken)
            if(data.accessToken){
                fetch("http://localhost:3001/api/groups/add", {
                    method : 'POST',
                    headers : {
                        'Content-Type' : 'application/json'
                    },
                    body : JSON.stringify({
                        idparticipant : dt._id,
                        groupcode : randCode
                    })
                }).then(res => {
                    return res.json()
                }).then(data => {
                    if(data){
                        localStorage.setItem('id', dt._id)
                        localStorage.setItem('groupCode', randCode)
                        
                        window.location.href = "/Group"
                    } else {
                        window.location.href = "/User"
                    }
                })
            } else {
                alert("Error")
            }
        })
    }

    //$('#divjoin').hide()

    // join Group already exist
    function joinGroup() {
        const code = document.querySelector('#codyGroup').value
        //$('#divjoin').show()
        fetch("http://localhost:3001/api/groups/joinGroup", {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                idparticipant : dt._id,
                groupcode : code
            })
        }).then(res => {
            return res.json()
        }).then(data => {
            console.log(data)
            window.location.href = "/Group"
        })
    }
    

    return (
        <div className="">
            <h2>Participant Page</h2>
            <button onClick={clearLocalStorage} className="btn btn-primary">Log Out</button>
            <br/>
            <p>Your ID is : {dt._id}</p>
            <p>Your Name is : {dt.fullname}</p>
            <p>Your Email is : {dt.email}</p>
            <div>
                <button onClick={createGroup} className="btn btn-info" id="create">Create Group</button>
                <button className="btn btn-info" id="join" onClick={joinGroup}>Join Group</button>
            </div>
            <div id="divjoin">
                <center>
                    <label>Enter Your Group Code :</label>
                    <input id="codyGroup" className="form-control" placeholder="Put code Here" />
                </center>
            </div>
        </div>
    )
}

export default User