import { useRef } from "react"

export default function Register() {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    return (
        <div className="form_place">
            <form onSubmit={() => { }}>
                <h1>User Registration</h1>
                <label htmlFor="name"> Name: </label>
                <input id="name" className="name" ref={nameRef} placeholder="Name:" type="text" onKeyUp={() => { }} />
                <label htmlFor="email"> Email: </label>
                <input id="email" className="email" ref={emailRef} placeholder="Email:" type="email" onKeyUp={() => { }} />
                <label htmlFor="password"> Password: </label>
                <input id="password" className="password" ref={passwordRef} placeholder="Password:" type="password" onKeyUp={() => { }} />
                <button className="pass_button">Show Password</button>
                <div className="checkbox_place">
                    <input id="check" type='checkbox' onChange={() => { }} />
                    <label htmlFor="check" className="check_label">I understand that this is a DEMO app and the entered data is public.</label>
                </div>

                <button onClick={() => { }}>Sign Up</button>
            </form>
            <button className="button_direction" onClick={() => { }}> Already have an account? LOGIN</button>
        </div >
    )
}