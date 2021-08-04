import styled from "styled-components";

export const BetContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 4rem 8.5rem;
    font-style: italic;
    color: #868686;
`;

interface TypeButtonProps {
    color: string;
    bgc: string;
    border: string;
}

export const GameTypeButton = styled.button<TypeButtonProps>`
    padding: .3rem 1rem;
    background-color: #fff;
    border-radius: 6rem;
    font-style: italic;
    font-weight: bold;
    cursor: pointer;
    color: ${props => props.color};
    background-color: ${props => props.bgc ?? '#fff'};
    border: ${props => props.border};

    &:hover {
        filter: brightness(.95);
        transition-duration: 0.4s;
    }
`;