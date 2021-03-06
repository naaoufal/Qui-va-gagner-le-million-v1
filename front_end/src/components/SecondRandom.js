import { useEffect } from "react"

function SecondRandom () {
    
    useEffect(() => {
        setTimeout( 
            function Test1() {
            fetch("http://localhost:3001/api/questions/getOneQuestion").then(res => {
                return res.json()
            }).then(data => {
                //console.log(data)
                data.map(i => {
                    console.log(i)
                    localStorage.setItem('data', i._id)
                })
                //window.location.reload(true)
                //arr.push(data)
                //console.log(arr)
            })
            
        }
        //Test1()
        , 9000)
    })

    const dt = localStorage.getItem('data')
    console.log(dt)

    return (
        <h1>this is a test</h1>
    )
}

export default SecondRandom