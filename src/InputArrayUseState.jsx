import {useState} from 'react'

function InputArrayUseState(){

    const [form, setForm] = useState([])

    function addUser (e){
        e.preventDefault();
        const firstName = document.getElementById("userFirstName").value;
        const lastName = document.getElementById("userLastName").value;
        const Age = document.getElementById("userAge").value;
        const Sex = document.querySelector('input[name="userSex"]:checked')?.value;
        const Course = document.getElementById("userCourse").value;


        const userData = {
            firstName,
            lastName,
            Age,
            Sex,
            Course
        }

        setForm(f =>[...f, userData]);

        document.getElementById("registrationForm").reset();

    }

    const userList = form.map((userData, index) => (
        <tr key={index}>
            <td>{userData.firstName}</td>
            <td>{userData.lastName}</td>
            <td>{userData.Age}</td>
            <td>{userData.Sex}</td>
            <td>{userData.Course}</td>
        </tr>
    ));

    
    return(<>
    <table border={2}>
        <tr>
            <th>firstName</th>
            <th>lastName</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Course</th>
        </tr>
        <tbody>
            {userList}
        </tbody>

    </table>

    <h1>Register Account</h1>

        <form action="" id='registrationForm'>
            <label htmlFor="userFirstName">FirstName: </label>
            <input type="text" name='userFirstName' id = 'userFirstName' /><br />

            <label htmlFor="userLastName">lastName: </label>
            <input type="text" name='userLastName' id = 'userLastName' /><br />

            <label htmlFor="userAge">Age: </label>
            <input type="text" name='userAge' id = 'userAge' /><br />

            
            <input type="radio" name='userSex' id='Male' value="Male" />
            <label htmlFor="Male">Male</label>
            <input type="radio" name='userSex' id='female' value="Female" />
            <label htmlFor="female">Female</label><br />

            <label htmlFor="userCourse">Course: </label>
            <input type="text" name='userCourse' id = 'userCourse' /><br />

            <button onClick={addUser}>Register Account</button>
        </form>
    </>)
}

export default InputArrayUseState