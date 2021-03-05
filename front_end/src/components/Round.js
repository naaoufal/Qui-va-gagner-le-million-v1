import { useEffect } from "react"

function Round () {

    function clearAll() {
        localStorage.clear()
        window.location.href = "/LoginUser"
    }

    useEffect(() => {
        fetch("http://localhost:3001/api/questions/getOneQuestion").then(res => {
            return res.json()
        }).then(data => {
            //console.log(data)
            data.map(i => {
                //console.log(i.answers)
                i.answers.map(a => {
                    console.log(a)
                    localStorage.setItem('pro', a)
                })
            })
        })
    })

    return (
        <div className="row">
            <h1>the round is started</h1>
            <center>
                <div className="col-md-5">
                    <input className="btn btn-info" value={localStorage.getItem('pro')} />
                </div>
                <br/>
                <div className="col-md-5">
                    <input className="btn btn-info" value="test"/>
                </div>
                <br />
                <div className="col-md-5">
                    <input className="btn btn-info" value="test"/>
                </div>
                <br />
                <div className="col-md-5">
                    <input className="btn btn-info" value="test"/>
                </div>
            </center>
            <div>
                <button onClick={clearAll} className="btn btn-danger">Exit</button>
            </div>
        </div>
    )
}

export default Round