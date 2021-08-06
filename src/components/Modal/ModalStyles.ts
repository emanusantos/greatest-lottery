import styled from 'styled-components';

export const StyledBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.75);
`;

export const StyledModal = styled.div`
    position: fixed;
    top: 20vh;
    left: 30%;
    width: 40%;
    background-color: white;
    height: 15rem;
    border-radius: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 30;
    animation: slide-down 300ms ease-out forwards;

    .errorHeader {
        display: flex;
        justify-content: center;
        align-items: center; 
        border-radius: 1rem 1rem 0 0;
        background-color: #e85e6c;

        h2 {
            padding-top: 1rem;
            font-size: 5rem;
            color: #fff;
        }
    }

    .errorText {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        font-style: italic;
        font-weight: bold;
        margin-top: 2rem;

        button {
            border: none;
            padding: .5rem 1.3rem;
            border-radius: 1rem;
            background-color: #B5C401;
            color: #fff;
            font-weight: bold;
            font-style: italic;
            cursor: pointer;
        }
    }
`;
