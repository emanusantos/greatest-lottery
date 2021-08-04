import { Link } from "react-router-dom";
import { Wrapper, Underline } from "./NavbarStyles";

const Navbar = () => {
    return (
        <header>
            <Wrapper>
                <ul>
                    <li>
                        <h1>TGL</h1>
                        <h4><Link to="/">Home</Link></h4>
                    </li>
                    <li>
                        <h4><Link to="/account">Account</Link></h4>
                        <h4><Link to="/login">Log out</Link></h4>
                    </li>
                </ul>
            </Wrapper>
            <Underline />
        </header>
    );
};

export default Navbar;