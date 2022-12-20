import { useRef } from "react"

export default function Register() {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const repeatPasswordRef = useRef();

    return (
        <div className="registration_form">
            <form>
                <h1>User Registration</h1>
                <input className="name" ref={nameRef} placeholder="Name:" type="text" onKeyUp={() => { }} />
                <input className="email" ref={emailRef} placeholder="Email:" type="email" onKeyUp={() => { }} />
                <input className="password" ref={passwordRef} placeholder="Password:" type="password" onKeyUp={() => { }} />
                <input className="password" ref={repeatPasswordRef} placeholder="Confirm password:" type="password" onKeyUp={() => { }} />
                <div className="checkbox">
                    <label for='checkbox'>I understand that this is a DEMO app and the entered data is public. </label>
                    <input type='checkbox' id='checkbox' onChange={() => { }} />
                </div>
                <button onClick={() => { }}>Sign Up</button>

            </form>

            <div>
                <span>Already have an account?</span>
                <button onClick={() => { }}>Login</button>
            </div>
        </div >
    )
}