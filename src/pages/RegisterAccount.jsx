import { useState } from 'react';
import ValidationInput from "../service/ValidationInput";

function RegisterAccount (){

    const [regisform, setRegisForm] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        sex: "",
        age: "",
        email: "",
        password: "",
        confirmPassword:""
    });
    
    const [focusedForm , setFocusedForm] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [noMiddleName, setNoMiddleName] = useState(false);

    function handleChange (e){
        setRegisForm({
            ...regisform,
            [e.target.name]: e.target.value
        });
    }

    function onShow(e){
        setFocusedForm({
            ...focusedForm,
            [e.target.name]:true
        })
    }

    function registerAccount(e){
        e.preventDefault();
        setSubmitted(true);

        if (regisform.firstName.trim() === "" || 
        regisform.middleName.trim() === "" || 
        regisform.lastName.trim() === "" || 
        regisform.sex === "" || 
        regisform.age.trim() === "" || 
        regisform.email.trim() === "" || 
        regisform.password.trim() === "" || 
        regisform.confirmPassword.trim() === "") {
            return;
        }
        console.log("register successful");

        setRegisForm({
            firstName: "",
            middleName: "",
            lastName: "",
            sex: "",
            age: "",
            email: "",
            password: "",
            confirmPassword:""
        })

        setNoMiddleName(false);
        setSubmitted(false);
        setFocusedForm({});


    }

    return(<>
            <form action="" onSubmit={registerAccount} id="registerAccountForm">
                <h1>Register Account</h1>

                <label htmlFor="userFirstName">First Name</label>
                <input type="text" name="firstName" id="userFirstName" 
                value={regisform.firstName}
                onChange={handleChange}
                onFocus={onShow}/> 
                <br />
                {(submitted || focusedForm.firstName) && (
                    <ValidationInput
                        prop="First Name"
                        value={regisform.firstName}
                        required={true}
                        minLength={3}
                    />
                )}
                <br />

                <label htmlFor="userMiddleName">Middle Name</label>
                <input type="text" name="middleName" id="middleName" 
                disabled={noMiddleName}
                value={regisform.middleName}
                onChange={handleChange}
                onFocus={onShow}/>

                <input type="checkBox" checked={noMiddleName} onChange={(e) =>{
                    setNoMiddleName(e.target.checked);
                        setRegisForm({
                            ...regisform, 
                            middleName: e.target.checked ? "N/A" : ""
                        })
                    }
                }/>
                <br />
                {(submitted || focusedForm.middleName) && 
                regisform.middleName !== "N/A" &&(
                    <ValidationInput
                        prop="Middle Name"
                        value={regisform.middleName}
                        required={true}
                        minLength={3}
                    />
                )}
                <br />
                

                <label htmlFor="userLastName">Last Name</label>
                <input type="text" name="lastName" id="userLastName" 
                value={regisform.lastName}
                onChange={handleChange}
                onFocus={onShow}/>
                <br />
                {(submitted || focusedForm.lastName) && (
                    <ValidationInput
                        prop="Last Name"
                        value={regisform.lastName}
                        required={true}
                        minLength={3}
                    />
                )}
                <br />

                <label htmlFor="">Sex</label><br />
                <label htmlFor="Male">Male</label>
                <input type="radio" name="sex" id="Male" value="Male"
                checked={regisform.sex === "Male"}
                onChange={handleChange}
                onFocus={onShow}/>
                <label htmlFor="Female">Female</label>
                <input type="radio" name="sex" id="Female" value="Female"
                checked={regisform.sex === "Female"}
                onChange={handleChange}
                onFocus={onShow}/>
                <br />
                {(submitted || focusedForm.sex) && (
                    <ValidationInput
                        prop="Sex"
                        value={regisform.sex}
                        required={true}
                    />
                )}
                <br />

                <label htmlFor="userAge">Age</label>
                <input type="number" name="age" id="userAge" 
                value={regisform.age}
                onChange={handleChange}
                onFocus={onShow}/>
                <br />
                {(submitted || focusedForm.age) && (
                    <ValidationInput
                        prop="Age"
                        value={regisform.age}
                        required={true}
                    />
                )}
                <br />

                <label htmlFor="userEmail">Email</label>
                <input type="email" name="email" id="userEmail"
                value={regisform.email}
                onChange={handleChange}
                onFocus={onShow}/>
                <br />
                {(submitted || focusedForm.email) && (
                    <ValidationInput
                        prop="Email"
                        value={regisform.email}
                        required={true}
                        email={true}
                    />
                )}
                <br />


                <label htmlFor="userPassword">Password</label>
                <input type="password" name="password" id="userPassword" 
                value={regisform.password}
                onChange={handleChange}
                onFocus={onShow}/>

                <button type="button" onClick={function(){
                    const password = document.getElementById("userPassword");
                    const iconView = document.getElementById("icon-view");
                    password.type = password.type === "password" ? "text" : "password"
                    iconView.className = password.type === "password" ? "bi bi-eye-fill" : "bi bi-eye-slash-fill"
                    
                }}><i id="icon-view" className="bi bi-eye-fill"></i></button>
                <br />
                {(submitted || focusedForm.password) && (
                    <ValidationInput
                        prop="Password"
                        value={regisform.password}
                        required={true}
                        upperCase={true}
                        haveNum={true}
                        minLength={8}
                    />
                )}
                <br />
                <label htmlFor="userPassword">Confirm Password</label>
                <input type="password" name="confirmPassword" id="userConPassword"
                value={regisform.confirmPassword}
                onChange={handleChange}
                onFocus={onShow}/>
                
                <button type="button" onClick={function(){
                    const password = document.getElementById("userConPassword");
                    const iconView = document.getElementById("con-icon-view");
                    password.type = password.type === "password" ? "text" : "password"
                    iconView.className = password.type === "password" ? "bi bi-eye-fill" : "bi bi-eye-slash-fill"
                    
                }}><i id="con-icon-view" className="bi bi-eye-fill"></i></button>
                <br />
                {(submitted || focusedForm.confirmPassword) && (
                    <ValidationInput
                        prop="Confirm Password"
                        value={regisform.confirmPassword}
                        required={true}
                        upperCase={true}
                        haveNum={true}
                        minLength={8}
                    />
                )} <br />

                <button type="submit">Register Account</button>


            </form>
    </>);

}

export default RegisterAccount