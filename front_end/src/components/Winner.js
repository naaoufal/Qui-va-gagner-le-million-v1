import { useEffect, useState } from "react"


function Winnner () {

    const [name, setState] = useState([])

    function fetchWinner() {
        fetch("http://localhost:3001/api/questionTokens/endOfQuestions",{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => {
            return res.json()
        }).then(data => {
            //console.log(data.winner)
            data.winner.map(i => {
                console.log(i)
                setState(i)
            })
        })
    }

    function clearAll () {
        localStorage.clear()
        window.location.href = "/LoginUser"
    }

    useEffect(() => {
        fetchWinner()
    }, [])

    return (
        <div>
            <h1>The Final Winner is : {name.fullname}</h1>
            <center>
                <button onClick={clearAll} className="btn btn-danger">Exit</button>
            </center>
        </div>
    )
}

export default Winnner