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

    // function CalculRound() {
        
    //     fetch("http://localhost:3001/api/questions/getOneQuestion").then(res => {
    //         return res.json()
    //     }).then(data => {
    //         //console.log(data)
    //         data.map(i => {
    //             //console.log(i.answers)
    //             localStorage.setItem('arr', i.answers)
    //             //check for Navigation Timing API support
                
    //         })
    //     })
    //     //window.location.reload()
    // }

    

    // useEffect(() => {
    //     //CalculRound()
    //     // setTimeout(function() {
    //     //     window.location.reload()
    //     // }, 4000)
    // })
    function test () {
        window.location.reload(true)
    }

    return (
        <div className="row">
            <h1>the round is started & the Group ID is : {code || codeSec}</h1>
            <center>
                <h2>Please Select Your Answer :</h2>
                <SecondRandom />
                <QuestionToken />
            </center>
            <div>
                <button onClick={test} id="test">Round</button>
                <button onClick={clearAll} className="btn btn-danger">Exit</button>
            </div>
        </div>
    )
}

export default Round