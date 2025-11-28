import { useRef, useState } from "react";
import { mySignup, useAuth, mySignin, mySignout } from "./Fire";

function App(){

    const [loading, setLoading]=useState(false)

    const currentUser=useAuth()

    const emailRef=useRef()
    const passwordRef=useRef()

    async function HandleSignup() {
        setLoading(true)
        await mySignup(emailRef.current.value, passwordRef.current.value)
        setLoading(false)        
    }

    async function HandleSignin() {
        try{
            setLoading(true)
            await mySignin(emailRef.current.value, passwordRef.current.value)
        }
        catch{
            alert("Please create account first..!")
        }
    }

    async function HandleSignout() {
        setLoading(true)
        await mySignout()
    }

    return(
        <div>
            <center>
                <h2>FireBase React-Js</h2>
                <h3>CurrentUser:{currentUser?.email}</h3>
                <label>Email Id:</label>
                <input type="email" ref={emailRef}></input>
                <br></br>
                <br></br>
                <label>Password:</label>
                <input type="password" ref={passwordRef}></input>
                <br></br>
                <br></br>
                <button onClick={HandleSignup}>Signup</button>
                <button onClick={HandleSignin}>Signin</button>
                <button onClick={HandleSignout}>Signout</button>
            </center>
        </div>
    )
}
export default App;