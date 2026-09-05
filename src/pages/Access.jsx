import { NavLink, Outlet } from "react-router-dom"

function Access (){
    return(<>
        <ul>
            <li><NavLink to='login'>Login</NavLink></li>
            <li><NavLink to='register'>Register Account</NavLink></li>
        </ul>
        <Outlet/>
    </>)

}

export default Access