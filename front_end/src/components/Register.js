import '../Login.css';

function Register (redi) {

    function clearInput() {
        const full = document.querySelector('#fullname').value = ""
        const age = document.querySelector('#age').value = ""
        const email = document.querySelector('#email').value = ""
        const ph = document.querySelector('#ph').value = ""
        const pass = document.querySelector('#pass').value = ""
    }

    function addParticipant() {
        const full = document.querySelector('#fullname').value
        const age = document.querySelector('#age').value
        const email = document.querySelector('#email').value
        const ph = document.querySelector('#ph').value
        const pass = document.querySelector('#pass').value

        //console.log(full, age, email, ph, pass)
        fetch("http://localhost:3001/api/participants/register", {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                fullname : full,
                age : age,
                email : email,
                phone : ph,
                is_valid : false,
                online : false,
                password : pass,
                score : 0 
            })
        }).then(res => {
            return res.json()
        }).then(data => {
            if(data){
                alert("Participant Subscribe Successfully")
                clearInput()
                redi.history.push('/LoginUser')
                
            } else {
                alert("Error")
                window.location.reload()
            }
        })
    }

    return (
        <div id="register">
            <div className="container bootstrap snippets bootdey">
                <div class="lc-block col-md-4 col-md-offset-4 toggled" id="l-login">
                <div class="form-group">
                        <input id="fullname" type="text" class="form-control" placeholder="Fullname"/>
                    </div>
                    <div class="form-group">
                        <input id="age" type="number" class="form-control" placeholder="Age"/>
                    </div>
                    <div class="form-group">
                        <input id="email" type="text" class="form-control" placeholder="Email"/>
                    </div>
                    <div class="form-group">
                        <input id="ph" type="text" class="form-control" placeholder="Phone"/>
                    </div>
                    <div class="form-group">
                        <input id="pass" type="password" className="form-control"  placeholder="Password" />
                    </div>
                    <div class="clearfix"><a href="/LoginUser">Already Have Account</a></div>
                    <button onClick={addParticipant}  class="btn btn-block btn-primary btn-float m-t-25">Register</button>
                </div>
            </div>
        </div>
    )
}

export default Register