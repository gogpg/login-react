import { useContext, useRef } from "react";
import { useState } from "react";
import inputsValidation from "../functions/inputValidation";
import DataContext from "./DataContext";

export default function Registration() {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const [type, setType] = useState('password');
    const [isChecked, setIsChecked] = useState(false);
    const { setPageState } = useContext(DataContext)

    const registration = e => {
        e.preventDefault();

        const name = inputsValidation('name', nameRef.current.value);
        const email = inputsValidation('email', emailRef.current.value);
        const pass = inputsValidation('pass', passwordRef.current.value);

        console.log({ name, email, pass, isChecked })
    }
    return (

        <div className="form_place">
            <form onSubmit={(e) => { registration(e) }}>
                <h1>User Registration</h1>

                <label htmlFor="name"> Name: </label>
                <input id="name" className="name" ref={nameRef} placeholder="Name:" type="text" onKeyUp={() => { }} />

                <label htmlFor="email"> Email: </label>
                <input id="email" className="email" ref={emailRef} placeholder="Email:" type="email" onKeyUp={() => { }} />

                <label htmlFor="password"> Password: </label>
                <input id="password" type={type} className="password" ref={passwordRef} placeholder="Password:" onKeyUp={() => { }} />
                <button type='button' onClick={() => setType(t => t === 'password' ? 'text' : 'password')} className="pass_button">Show Password</button>

                <div className="checkbox_place">
                    <input id="check" type='checkbox' checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
                    <label htmlFor="check" className="check_label">I understand that this is a DEMO app and the entered data is public.</label>
                </div>

                <button onClick={() => { }}>Sign Up</button>
            </form>
            <button className="button_direction" onClick={setPageState('login')}> Already have an account? LOGIN</button>
        </div >
    )
}