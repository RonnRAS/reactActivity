import InputModal from "./InputModal"
import { useState } from "react"
function TableOfUser(){
        const [showModal, setShowModal] = useState(false);
        const [form, setForm] = useState([]);
        const [editUser, setEditUser] = useState(null);

        function saveUser(userData){
            
            if(editUser !== null){
                setForm(f => f.map((user, index) => index === editUser.index ? userData : user ) );

                setEditUser(null);
            }else{
                setForm(f => [...f, userData]);

            }
            
            setShowModal(false);
        }

        function deleteUser(index){
            const delUser = form.filter((_, i) => i !== index);

            setForm(delUser);
        }

        function editHandler(index){
            setEditUser({
                ...form[index],
                index: index
            })

            setShowModal(true);

        }


        
        const userList = form.map((user, index) =>(
            <tr key={index}>
                <td>{user.firstName}</td>
                <td>{user.middleName}</td>
                <td>{user.lastName}</td>
                <td>{user.userSex}</td>
                <td>{user.Age}</td>
                <td>{user.userEmail}</td>
                <td>
                <button onClick={()=> editHandler(index)}>Edit</button>
                <button onClick={() =>deleteUser(index)}>Delete</button>
                </td>
            </tr>
        ));

    

    return(<>
        <div>
            <h1>DATABASE KUNWARE</h1>

        <button onClick={() => {setShowModal(true);}}>Add User</button>
        {showModal && 
        <div className="modal d-block position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">

                    <div className="modal-header">
                        <button
                        type="button"
                        className="btn-close"
                        onClick={() => setShowModal(false)}
                        ></button>
                    </div>

                <div className="modal-body">
                    <InputModal addUser={saveUser} editUser={editUser}/>
                </div>

                </div>

            </div>
        </div> 
        }

        </div>

        <div className="table-responsive shadow rounded">
            <table className="table table-bordered table-hover align-middle mb-0">
                <thead >
                    <th className="p-3">First Name</th>
                    <th className="p-3">Middle Name</th>
                    <th className="p-3">Last Name</th>
                    <th className="p-3">Sex</th>
                    <th className="p-3">Age</th>
                    <th className="p-3">Email</th>
                </thead>
                <tbody>
                    {userList}
                </tbody>

            </table>
        </div>

    </>)
}

export default TableOfUser