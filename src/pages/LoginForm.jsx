import { useState } from "react";
import ValidationInput from "../service/ValidationInput";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../service/Auth";

function LoginForm() {

    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    const [submitted, setSubmitted] = useState(false);
    const [focusedForm , setFocusedForm] = useState({});
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });

    const auth = useAuth();
    const navigate = useNavigate();

    function errorHandler(field, message){
        setErrors(prev => ({
            ...prev,
            [field]:message
        }))
    }


    function handleChange(e){
        setLogin({
            ...login,
            [e.target.name]:e.target.value
        })
    }
    function show (e){
        setFocusedForm({
            ...focusedForm,
            [e.target.name]:true
        })
    }

    function loginUser(e) {


        e.preventDefault();
        setSubmitted(true);

        if (login.email === "" || login.password === "") {
            return;
        }

        if(errors.email || errors.password){
            return;
        }
        
            auth.user(login);
            navigate('/', {replace: true });

        console.log("Login successful");
        setSubmitted(false);
        setFocusedForm({});

    }


    return (
        <form onSubmit={loginUser} id="loginForm">

            <h1>Login</h1>


            {/* EMAIL */}
            <label htmlFor="userEmail">Email</label>
            <input type="email" name="email" id="userEmail"
                value={login.email}
                onChange={handleChange}
                onFocus={show}
            />
            <br />
            {/* Error is visible only after focus */}
            {(submitted || focusedForm.email) && (
                <ValidationInput
                    prop="Email"
                    value={login.email}
                    required={true}
                    email={true}
                    onError={(message) => errorHandler("email", message)}
                />
            )}
            <br />

            {/* PASSWORD */}

            <label htmlFor="userPassword">Password</label>
            <input type="password" name="password" id="userPassword"
                value={login.password}
                onChange={handleChange}
                onFocus={show}/>
            <button type="button" onClick={function(){
                    const password = document.getElementById("userPassword");
                    const iconView = document.getElementById("icon-view");
                    password.type = password.type === "password" ? "text" : "password"
                    iconView.className = password.type === "password" ? "bi bi-eye-fill" : "bi bi-eye-slash-fill"
                    
                }}><i id="icon-view" className="bi bi-eye-fill"></i></button>

            {/* Error is visible only after focus */}
            {(submitted || focusedForm.password) && (
                <ValidationInput
                    prop ="Password"
                    value={login.password}
                    required={true}
                    upperCase={true}
                    haveNum={true}
                    minLength={8}
                    onError={(message) => errorHandler("password", message)}
                    
                />
            )}
            <br />

            <button type="submit">Login</button>

        </form>
    );
}

export default LoginForm;

