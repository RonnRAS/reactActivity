import { useEffect } from "react";

function ValidationInput({ value, required, prop, email, minLength, upperCase, haveNum, lettersOnly, onError }) {



        let message = "";

        if (required && value.trim() === "") {
            message = `${prop} is required.`;
        }
        else if (lettersOnly && !/^[A-Za-z\s]+$/.test(value)) {
            message = `${prop} must contain letters only.`
        }
        else if (email && value.trim() !== "") {

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(value)) {
                message = "Please enter a valid email.";
            }
        }
        else if (upperCase && !/[A-Z]/.test(value)) {
            message = `${prop} must contain at least one uppercase letter.`;
        }
        else if (haveNum && !/[0-9]/.test(value)) {
            message = `${prop} must contain at least one number (0-9).`;
        }
        else if (minLength && value.length < minLength) {
            message = `${prop} must be at least ${minLength} characters.`;
        }
        
        {/*
        if (confirmPassword) {
            if () {
                
            }
        }
        */}

        // validation for comparison of password and confirmPassword
        // existing of an email to login?
        // 
        useEffect(() => {
        if (onError) {
            onError(message);
        }
        }, [message])


    return (
        <>
            {message && (
                <small style={{ color: "red" }}>
                    {message}
                </small>
            )}
        </>
    );
}

export default ValidationInput;
