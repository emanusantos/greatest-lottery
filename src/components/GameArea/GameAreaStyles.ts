import styled from 'styled-components';

export const Game = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 39rem;

    .descriptionArea {
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    #newbet {
        padding-top: .7rem;
        font-size: 1.3rem;
    }
`;

export const GameButtons = styled.div`
    display: flex;
    gap: 1.5rem;
`;

interface BetButtonProps {
    width: string;
}

export const BetButton = styled.button<BetButtonProps>`
    width: ${props => props.width};
    height: 3.25rem;
    border: 1px solid #27C383;
    border-radius: .6rem;
    color: #27C383;
    background-color: #fff;
    font-weight: bold;
    margin-right: 1.5rem;
    cursor: pointer;

    &:hover {
        color: #fff;
        background-color: #27C383;
        transition-duration: 0.4s;
    }
`

export const AddButton = styled.button`
    width: 13rem;
    height: 3.25rem;
    margin-left: 4rem;
    background-color: #27C383;
    color: #fff;
    border: 1px solid #27C383;
    border-radius: .6rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        filter: brightness(1.25);
        transition-duration: 0.2s;
    }
`;