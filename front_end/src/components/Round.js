import { useEffect } from "react"
import QuestionToken from "./QuestionToken"
import SecondRandom from "./SecondRandom"

function Round () {

    const code = localStorage.getItem('groupCode')
    const codeSec = localStorage.getItem('code')
    const id = localStorage.getItem('ID')
    const secId = localStorage.getItem('secID')

    function clearAll() {
        localStorage.clear()
        window.location.href = "/LoginUser"
    }

    return (
        <div className="container"><br />
            <div className="row">
                <div className="col-md">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h3>The Round is Started & The Group ID is : {code || codeSec}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <center>
                    <SecondRandom />
                </center>
            </div>
            <center><button onClick={clearAll} className="btn btn-danger btn-lg">Exit</button></center>
        </div>
    )
}

export default Round