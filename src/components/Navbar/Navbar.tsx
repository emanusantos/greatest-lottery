import { Link } from "react-router-dom";
import { Wrapper, Underline } from "./NavbarStyles";
import { useAppDispatch } from "../../hooks/reduxhooks";
import { authSession } from "../../store/regSlice";
import { useHistory } from "react-router";

const Navbar: React.FC = () => {

    const dispatch = useAppDispatch();
    const history = useHistory();
    
    const logoutHandler = (): void => {
        dispatch(authSession(null));
        history.push('/login');
    };

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
                        <h4 onClick={logoutHandler}>Log out</h4>
                    </li>
                </ul>
            </Wrapper>
            <Underline />
        </header>
    );
};

export default Navbar;