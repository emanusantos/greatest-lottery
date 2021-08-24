import styled from 'styled-components';

interface Props {
    padding?: string;
    fd?: string;
    mw?: string;
    jc?: string;
    ai?: string;
    mt?: string;
    bgc?: string;
}

export const H1 = styled.h1`
    font-size: 5rem;
    color: #707070;
`;

export const H2 = styled.h2`
    font-size: 4rem;
    color: #707070;
`;

export const H3 = styled.h3`
    font-size: 2.2rem;
    color: #707070;
    margin-top: 1rem;
`;

export const BtnFor = styled.button`
    border: none;
    color: #fff;
    background-color: #B5C401;
    width: 9rem;
    height: 2.5rem;
    border-radius: 4rem;
    margin: 1rem;
    font-style: italic;
    font-weight: bold;
`;

export const Container = styled.div<Props>`
    display: flex;
    flex-direction: ${props => props.fd};
    align-items: ${props => props.ai};
    padding: ${props => props.padding};
    max-width: ${props => props.mw};
    justify-content: ${props => props.jc};
    margin-top: ${props => props.mt};
    background-color: ${props => props.bgc};
    font-style: italic;

    .pages {
        align-self: center;
        display: flex;
        gap: 1rem;

        button {
            font-size: 1rem;
            background: inherit;
            font-style: italic;
            border: none;
            cursor: pointer;
        }
    }

    #noBet {
        padding-top: 5rem;
        text-align: center;

        a {
            color: #B5C401;
        }
    }

    #profile {
        color: #B5C401;
        svg {
            cursor: pointer;
        }
    }

    .center {
        text-align: center;
    }

    a {
        text-decoration: none;
        color: #707070;
    }

    #signup {
        cursor: pointer;

        &:hover {
            filter: brightness(1.25);
            transition-duration: 0.4s;
        }

    }

    @media(max-width: 50rem) {
        flex-direction: column;
        position: relative;

        form, h3 {
            margin-left: 5rem;
        }
    };
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 20rem;
    margin-top: 1rem;
    border-radius: 1rem;
    box-shadow: 0px 3px 25px #00000014;

    .fail {
        text-align: center;
        font-size: .8rem;
        color: red;
    }

    .success {
        text-align: center;
        font-size: .8rem;
        color: green;
    }

    button {
        font-style: italic;
        font-weight: bold;
        color: #B5C401;
        background-color: #fff;
        border: none;
        border-radius: 0 0 1rem 1rem;
        height: 7rem;
        font-size: 2rem;
        cursor: pointer;

        &:hover {
            color: #fff;
            background-color: #B5C401;
            transition-duration: 0.4s;
        }
    }

    #radius, #token {
        border-radius: 1rem 1rem 0 0;
    }

    a {
        font-size: .9rem;
        text-decoration: none;
        color: #C1C1C1;
        padding: 1rem;
        margin-left: 8rem;

        &:hover {
            filter: brightness(.75);
            transition-duration: 0.4s;
        }
    }
`;