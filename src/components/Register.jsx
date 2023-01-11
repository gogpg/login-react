import { useRef } from "react";
import { useContext } from "react";
import { useState } from "react";
import { registration_action } from "../actions/dataActions";
import getId from "../functions/getId";
import inputsValidation from "../functions/inputValidation";
import DataContext from "./DataContext";
import Notifications from "./Notifications";

export default function Registration() {
    const { dispachData } = useContext(DataContext);
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const [type, setType] = useState('password');
    const [isChecked, setIsChecked] = useState(false);

    const [notificationsList, setNotificationsList] = useState([]);

    const registration = e => {
        e.preventDefault();

        setNotificationsList([]); //nunuliname visas pries tai ismestas klaidas.

        const name = inputsValidation(nameRef.current.value, 'name');
        const email = inputsValidation(emailRef.current.value, 'email');
        const pass = inputsValidation(passwordRef.current.value, 'pass');

        const isName = !name.error;
        const isEmail = !email.error;
        const isPass = !pass.error;

        if (isName && isEmail && isPass && isChecked) {
            dispachData(
                registration_action({
                    id: getId(),
                    name: name.value,
                    email: email.value,
                    pass: pass.value
                })
            );

            nameRef.current.value = "";
            emailRef.current.value = "";
            passwordRef.current.value = "";
            setIsChecked(false);

        } else {
            if (!isName) {
                setNotificationsList(n => [...n, name.notification]);
            }
            if (!isEmail) {
                setNotificationsList(n => [...n, email.notification]);
            }
            if (!isPass) {
                setNotificationsList(n => [...n, pass.notification]);
            }
            if (!isChecked) {
                setNotificationsList(n => [...n, 'Must agree.'])
            }
        }

        console.log({ name, email, pass, isChecked })
    }

    return (

        <div className="form_place">
            <h1>User Registration</h1>

            <form onSubmit={(e) => { registration(e) }}>

                {notificationsList.length ? <Notifications notificationsList={notificationsList} /> : null}

                <label htmlFor="name"> Name: </label>
                <input id="name" className="name" ref={nameRef} placeholder="Name:" type="text" onKeyUp={() => { }} />

                <label htmlFor="email"> Email: </label>
                <input id="email" className="email" ref={emailRef} placeholder="Email:" type="email" onKeyUp={() => { }} />

                <label htmlFor="password"> Password: </label>
                <input id="password" type={type} className="password" ref={passwordRef} placeholder="Password:" onKeyUp={() => { }} />
                <button type='button' onClick={() => setType(t => t === 'password' ? 'text' : 'password')} className="pass_button">
                    {type === 'password' ? 'Show password' : 'Hide password'}
                </button>

                <div className="checkbox_place">
                    <input id="check" type='checkbox' checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
                    <label htmlFor="check" className="check_label">I understand that this is a DEMO app and the entered data is public.</label>
                </div>

                <button onClick={() => { }}>Sign Up</button>
            </form>
            <button className="button_direction" onClick={() => { }}> Already have an account? LOGIN</button>
        </div >
    )
}