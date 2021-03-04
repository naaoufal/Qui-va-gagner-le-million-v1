function NeedValidation (redi) {

    const dt = localStorage.getItem('data')
    //console.log(dt)

    function clearLocalStorage() {
        localStorage.clear();
        redi.history.push('/LoginUser')
    }

    return (
        <div>
            <h1>Plz Wait When Account is Validate</h1>
            <p>Your ID is : {dt}</p>
            <button onClick={clearLocalStorage} className="btn btn-primary">Log Out</button>
        </div>
    )
}

export default NeedValidation