import { useContext, useRef } from "react";
import { useState } from "react";
import DataContext from "./DataContext";

export default function Login() {
    const loginEmailRef = useRef();
    const loginPasswordRef = useRef();

    const [type, setType] = useState('password');

    const { setPageState } = useContext(DataContext)

    const handleSubmit = e => {
        e.preventDefault();

        const loginEmail = loginEmailRef.current.value;
        const loginPass = loginPasswordRef.current.value;

        console.log({ loginEmail, loginPass })
    }


    return (
        <>
            <div className="form_place">
                <form onSubmit={(e) => { handleSubmit(e) }}>
                    <h1>Login Here</h1>
                    <label htmlFor='email'>Email:</label>
                    <input id='email' className="email" ref={loginEmailRef} placeholder="Email:" type="email" onChange={() => { }} />
                    <label htmlFor='password'>Password:</label>
                    <input id='password' type={type} className="password" ref={loginPasswordRef} placeholder="******" onChange={() => { }} />
                    <button type='button' onClick={() => setType(t => t === 'password' ? 'text' : 'password')} className="pass_button">Show Password</button>

                    <button type='submit' onClick={() => { }}>Log In</button>
                </form>
                <button className="button_direction" onClick={setPageState('registration')}>Don't have an account? Register here.</button>
            </div>
        </>
    )
}