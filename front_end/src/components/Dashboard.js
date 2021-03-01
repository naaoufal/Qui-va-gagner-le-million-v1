import { useEffect, useState } from 'react';
import '../App.css';

function Dashboard () {
    
    const [info, setInfo] = useState([])

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
            data.map(info => {
                //console.log(info)
                setInfo(info)
            })
        })

    }

    useEffect (() => {
        fetchAdmin()
    }, [])

    return (
        <div>
            <div>
                <h2>Admin Panel</h2><button className="btn btn-primary">Add New Admin</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Fullname</th>
                            <th>Phone</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody id="getData">
                        <tr>
                            <td>{info._id}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard