import { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import '../App.css';

function Dashboard (redi) {
    
    const [info, setInfo] = useState([])
    const [participants, setParticipants] = useState([])
    const [quests, setQuestions] = useState([])

    useEffect (() => {
        function fetchAdmin() {

            const token = localStorage.getItem('tokenaccess')
            //console.log(token)
            fetch("http://localhost:3001/api/admins/all", {
                method : 'GET',
                headers : {
                    'Authorization': 'Bearer ' + token,
                }
            }).then(res => {
                return res.json()
            }).then(data => {
                setInfo(data)
            })

        }

        fetchAdmin()

    }, [])

    //console.log(info)

    // clear inputs
    function clearInput() {
        const full = document.querySelector('#full').value = ""
        const ph = document.querySelector('#phone').value = ""
        const pass = document.querySelector('#password').value = ""
    }

    // post new admin:
    function addNew () {

        const full = document.querySelector('#full').value
        const ph = document.querySelector('#phone').value
        const pass = document.querySelector('#password').value
        const token = localStorage.getItem('tokenaccess')
        console.log(token)
        fetch("http://localhost:3001/api/admins/addOne", {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + token
            },
            body : JSON.stringify({
                fullname : full,
                phone : ph,
                password : pass
            })
        }).then(res => {
            return res.json()
        }).then(data => {
            if(data) {
                alert("A new Admin added Called " + full)
                clearInput();
                window.location.reload()
            } else {
                alert("Error")
                clearInput()
            }
        })
    }

    useEffect (() => {

        const token = localStorage.getItem('tokenaccess')
        fetch("http://localhost:3001/api/participants/all", {
            method : 'GET',
            headers : {
                'Authorization' : 'Bearer ' + token
            }
        }).then(res => {
            return res.json()
        }).then(data => {
            setParticipants(data)
        })

        fetch("http://localhost:3001/api/questions/allPublic").then(res => {
            return res.json()
        }).then(data => {
            setQuestions(data)
        })
    }, [])

    function validateParti(id) {
        const token = localStorage.getItem('tokenaccess')
        console.log(id, token)

        fetch(`http://localhost:3001/api/participants/edit/${id}`, {
            method : 'PATCH',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + token
            },
            body : JSON.stringify({
                is_valid : true,
                online : true
            })
        }).then(res => {
            return res.json()
        }).then(data => {
            if(data){
                alert("Participant is Updated Successfully")
                window.location.reload()
            } else {
                alert("Error")
                window.location.reload()
            }
        })
      
    }

    function clearLocalStorage() {
        localStorage.clear();
        redi.history.push('/Login')
    }

    return (
    <div className="container"><br/>
        <div className="row">
            <div className="col-md">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3>Admin Panel</h3>
                    </div>
                    <div className="panel-body">
                        <button id="logout" className="btn btn-primary" onClick={clearLocalStorage}>LogOut</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3>Show All Participants</h3>
                    </div>
                    <div className="panel-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>fullname</th>
                                    <th>age</th>
                                    <th>email</th>
                                    <th>phone</th>
                                    <th>is Valid</th>
                                    <th>Online</th>
                                    <th>password</th>
                                    <th>score</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {participants.map((i) => (
                                    <tr key={i._id}>
                                        <td>{i._id}</td>
                                        <td>{i.fullname}</td>
                                        <td>{i.age}</td>
                                        <td>{i.email}</td>
                                        <td>{i.phone}</td>
                                        <td>{JSON.stringify(i.is_valid)}</td>
                                        <td>{JSON.stringify(i.online)}</td>
                                        <td>{i.password}</td>
                                        <td>{i.score}</td>
                                        <td><button onClick={()=>validateParti(i._id)} className="btn btn-danger">Valider</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3>Show All Admins</h3>
                    </div>
                    <div className="panel-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Fullname</th>
                                <th>Phone</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                        {info.map((i) => (
                            <tr>
                                <td>{i._id}</td>
                                <td>{i.fullname}</td>
                                <td>{i.phone}</td>
                                <td>{i.password}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3>Add New Admin</h3>
                    </div>
                    <div className="panel-boy">
                        <div className="form-group">
                            <label className="col-sm-4 control-label">Enter Your Full Name : </label>
                            <div className="col-sm-8"><input id="full" type="text" className="form-control" /></div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-4 control-label">Enter Your Phone : </label>
                            <div className="col-sm-8"><input id="phone" type="text" className="form-control" /></div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-4 control-label">Enter Your Password : </label>
                            <div className="col-sm-8">
                                <input id="password" type="password" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group text-center">
                            <button type="submit" onClick={addNew} className="btn btn-warning">Add New</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3>Show All Questions</h3>
                    </div>
                    <div className="panel-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Quest</th>
                                    <th>Answer</th>
                                    <th>Score</th>
                                    <th>Pssible Answers</th>
                                </tr>
                            </thead>
                            <tbody>
                                {quests.map((o) => (
                                    <tr>
                                        <td>{o._id}</td>
                                        <td>{o.quest}</td>
                                        <td>{o.answer}</td>
                                        <td>{o.points}</td>
                                        <td>{o.answers.toString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Dashboard