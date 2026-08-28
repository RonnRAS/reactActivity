import {useState} from 'react'


function UserInputuseState(){

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        Age: 0,
        Sex: "",
        Course: ""

    });

    const submitUsers = () => {
        setForm({
            ...form,
            firstName: "Vinson Ronn",
            lastName: "Sumilang",
            Age: 15,
            Sex: "Male",
            Course: "BS Information Technology"
        });
    }

    const userList = ( 
        <tr>
            <td>{form.firstName}</td>
            <td>{form.lastName}</td>
            <td>{form.Age}</td>
            <td>{form.Sex}</td>
            <td>{form.Course}</td>
        </tr>
    )

    return(<>
        <button onClick={submitUsers}>register account</button>
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
    </>);
}

export default UserInputuseState