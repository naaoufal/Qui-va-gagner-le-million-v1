function NeedValidation (redi) {

    const dt = localStorage.getItem('data')
    //console.log(dt)
    var info = JSON.parse(dt)
    //console.log(info._id)

    function clearLocalStorage() {
        localStorage.clear();
        redi.history.push('/LoginUser')
    }

    return (
        <div className="container"><br/>
            <div className="row">
                <div className="col-md">
                    <div className="panel panel-warning">
                        <div className="panel-heading">
                            <h3>Plz Wait When Account is Validate Mr {info.fullname}</h3>
                        </div>
                        <div className="panel-body">
                            <button onClick={clearLocalStorage} className="btn btn-primary">Log Out</button>
                            <h3>You Must Wait The Admin To Validate Your Account !!!</h3>
                            <br/>
                            <div className="col-sm-6">
                                <div className="panel panel-info">
                                    <div className="panel-heading">
                                        <h4>More Informations ...</h4>
                                    </div>
                                    <div className="panel-body">
                                        <span>Your ID is : {info._id}</span><br />
                                        <span>Your Fullname is : {info.fullname}</span><br />
                                        <span>Your Email is : {info.email}</span><br />
                                        <span>Your Phone Number is : {info.phone}</span><br />
                                        <span>Your Score is : {info.score}</span><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NeedValidation