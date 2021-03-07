import { useEffect } from "react"
import SecondRandom from "./SecondRandom"
import io from "socket.io-client";

function QuestionToken () {

    const code = localStorage.getItem('groupCode')
    const codeSec = localStorage.getItem('code')
    const id = localStorage.getItem('ID')
    const secId = localStorage.getItem('secID')
    var sec = localStorage.getItem('data')
    var arr = []
    var socket = io.connect("http://localhost:3000/Round")

    //console.log(id || secId)
    //console.log(sec)

    //console.log(localStorage.getItem('question1'), localStorage.getItem('data1'))
    //setTimeout(CalculRound(), 4000)

    useEffect(() => {
        
    })



    // var a = localStorage.getItem('answers')
    // var data = a.split(",").map(String)
    // console.log(data)

    return (
        <div>
            {/* <p>the quest is : {}</p>
            <div className="col-md-5">
                <input className="btn btn-info" value="" />
            </div>
            <br/>
            <div className="col-md-5">
                <input className="btn btn-info" value="" />
            </div>
            <br />
            <div className="col-md-5">
                <input className="btn btn-info" value="" />
            </div>
            <br />
            <div className="col-md-5">
                <input className="btn btn-info" value="" />
            </div> */}
        </div>
    )
}

export default QuestionToken