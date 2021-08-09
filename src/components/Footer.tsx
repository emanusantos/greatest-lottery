import React from 'react';
import styled from 'styled-components';


const StyledFooter = styled.footer`
    height: 2rem;
    text-align: center;
    color: #C2C2C2;
    font-size: .7rem;
    border-top: #C2C2C2;

    hr {
        border-top: .1rem solid #F5F5F5;
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