import { useAuth } from "../service/Auth"
import { useNavigate } from "react-router-dom";

function Admin() {

    const auth = useAuth();
    const navigate = useNavigate();

    function logoutUser(){
        auth.logout();
        navigate('/');
    }

    return(<>
        <h1>Admin Dashboard</h1>

        <button onClick={logoutUser}>
            logout
        </button>
    </>)
}

export default Admin