import styled from "styled-components";

interface NumberProps {
    bgc: boolean;
}

export const SelectedNumber = styled.button<NumberProps>`
    width: 3.5rem;
    height: 3.7rem;
    background-color: ${props => props.bgc ? '#000' : '#ADC0C4'};
    font-weight: bold;
    font-size: 1.25rem;
    margin: .375rem;
    color: #fff;
    border: none;
    border-radius: 6rem;
    cursor: pointer;

    &:hover {
        filter: brightness(.85);
        transition-duration: .2s;
    }
`;