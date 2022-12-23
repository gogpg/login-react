import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(email);
        console.log(pass);
    }

    return (
        <>
            <div className="form_place">
                <form onSubmit={handleSubmit}>
                    <h1>Login Here</h1>
                    <label htmlFor='email'>Email:</label>
                    <input id='email' className="email" value={email} placeholder="Email:" type="email" onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor='password'>Password:</label>
                    <input id='password' className="password" value={pass} placeholder="******" type="password" onChange={(e) => setPass(e.target.value)} />
                    <button type='submit' onClick={() => { }}>Log In</button>
                </form>
                <button className="button_direction">Don't have an account? Register here.</button>
            </div>
        </>
    )
}