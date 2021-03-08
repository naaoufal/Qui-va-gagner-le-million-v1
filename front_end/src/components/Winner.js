import { useEffect, useState } from "react"


function Winnner () {

    const [info, setState] = useState([])

    function fetchWinner() {
        fetch("http://localhost:3001/api/questionTokens/endOfQuestions",{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => {
            return res.json()
        }).then(data => {
            console.log(data.winner[0])
            //localStorage.setItem('winner', JSON.stringify(data.winner))
            setState(data.winner[0])
        })
    }

    function clearAll () {
        localStorage.clear()
        window.location.href = "/LoginUser"
    }

    useEffect(() => {
        fetchWinner()
    }, [])

    // var name = localStorage.getItem('winner')
    // var t = JSON.parse(name)
    //console.log(info)

    return (
        <div className="container"><br />
            <div className="row">
               <center>
                    <div className="col-md">
                        <div className="panel panel-danger">
                            <div className="panel-heading">
                                <h3>The Winner is</h3>
                            </div>
                            <div className="panel-body">
                                <h3>{info.fullname}</h3>
                            </div>
                        </div>
                    </div>
               </center>
            </div>
            <center>
                <button onClick={clearAll} className="btn btn-danger btn-lg">Exit</button>
            </center>
        </div>
    )
}

export default Winnner