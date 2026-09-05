import { NavLink } from "react-router-dom";
import { useAuth } from "../service/Auth";

function NavBar() {

    const auth = useAuth();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
            <div className="container">

                <NavLink className="navbar-brand fw-bold" to="/">
                    logo
                </NavLink>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/About">
                                About
                            </NavLink>
                        </li>
                        
                    
                        {!auth.login && <li className="nav-item">
                            <NavLink
                                className="nav-link btn btn-primary px-3 ms-lg-2" to="/Access">
                                Log in
                            </NavLink>
                        </li>}
                        {auth.login && <li className="nav-item">
                            <NavLink
                                className="nav-link btn btn-primary px-3 ms-lg-2" to="/Admin">
                                Dashboard
                            </NavLink>
                        </li>}
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default NavBar;

