import React from 'react';
import styled from 'styled-components';


const StyledFooter = styled.footer`
    clear: both;
    position: relative;
    height: 4rem;
    margin-top: 35vh;
    padding: 1rem 0;
    text-align: center;
    color: #C2C2C2;
    font-size: .7rem;
    border-top: #C2C2C2;

    hr {
        border-top: .1rem solid #F5F5F5;
    }

    p {
        margin-top: 1.4rem;
    }
`;

const Footer: React.FC = () => {
    return (
            <StyledFooter>
                <hr />
                <p>Copyright 2021  Luby Software</p>
            </StyledFooter>
        );
};

export default Footer;