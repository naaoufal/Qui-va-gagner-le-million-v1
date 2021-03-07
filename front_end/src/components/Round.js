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
        <div className="row">
            <h1>the round is started & the Group ID is : {code || codeSec}</h1>
            <center>
                <h2>Please choise Your Answer :</h2>
                <SecondRandom />
            </center>
            <div>
                <button onClick={clearAll} className="btn btn-danger">Exit</button>
            </div>
        </div>
    )
}

export default Round