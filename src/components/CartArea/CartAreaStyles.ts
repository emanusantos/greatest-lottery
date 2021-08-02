import styled from 'styled-components';

export const CartContainer = styled.div`
    width: 20rem;
    height: 50%;
    display: flex;
    flex-direction: column;
    border: .06rem solid #E2E2E2;
    border-radius: .8rem;
    background-color: #fff;

    h4 {
        padding: 2rem 1rem;
        text-align: center;
        color: #e2e2e2;
    }

    .padding {
        padding: 1rem;
    }

    .cartItem {
        padding: 1rem;
    }

    button {
        width: 100%;
        height: 6rem;
        font-size: 2.2rem;
        font-style: italic;
        font-weight: bold;
        color: #27C383;
        border: none;
        cursor: pointer;
        border-top: 1px solid #E2E2E2;
        border-radius: 0 0 .7rem .7rem;

        &:hover {
            background-color: #27C383;
            color: #fff;
            transition-duration: .4s;
        }
    }
`;