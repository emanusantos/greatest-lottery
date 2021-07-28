import styled from 'styled-components';

interface Props {
    padding?: string;
    fd?: string;
    mw?: string;
    jc?: string;
    ai?: string;
    mt?: string;
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
    text-align: center;
    font-style: italic;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 20rem;
    margin-top: 1rem;
    border-radius: 1rem;
    box-shadow: 0px 3px 25px #00000014;

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

    input {
        border: none;
        padding: 1.5rem;
        border-bottom: 2px solid #EBEBEB;
        width: 100%;
        outline: none;

        &::placeholder {
            color: #9D9D9D;
            font-style: italic;
            font-weight: bold;
        }

        &:focus::placeholder {
            color: transparent;
            transition-duration: 0.2s;
        }
    }

    #email {
        border-radius: 1rem 1rem 0 0;
    }

    a {
        font-size: .9rem;
        text-decoration: none;
        color: #C1C1C1;
        padding: 1rem;
        margin-left: 8rem;
    }
`;