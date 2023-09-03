import { Link, NavLink } from "react-router-dom"


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <Link>Dictionary App</Link>
            </div>
            <div className="navlink">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/history'}>History</NavLink>
            </div>
        </div>
    )
}

export default Navbar