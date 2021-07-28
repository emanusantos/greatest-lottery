import styled from 'styled-components';

const Wrapper = styled.div`
    border-bottom: 2px solid #EBEBEB;
    color: #707070;

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-style: italic;
        font-weight: bold;
        padding: .6rem;
        margin: 0 9rem;

        li {
            display: flex;
            justify-content: space-around;
            align-items: center;
            gap: 4rem;
        }

        h1, h4 {
            cursor: pointer;
        }
    }
`;

const Underline = styled.div`
    position: absolute;
    top: 3.1rem;
    left: 8.563rem;
    width: 5.94rem;
    height: .44rem;
    background-color: #B5C401;
    border-radius: .4rem;
`;

const Navbar = () => {
    return (
        <header>
            <Wrapper>
                <ul>
                    <li>
                        <h1>TGL</h1>
                        <h4>Home</h4>
                    </li>
                    <li>
                        <h4>Account</h4>
                        <h4>Log out </h4>
                    </li>
                </ul>
            </Wrapper>
            <Underline />
        </header>
    );
};

export default Navbar;