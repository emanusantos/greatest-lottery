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

    .Lotofácil, .Mega-Sena, .Quina {
            padding: .3rem 1rem;
            background-color: #fff;
            border-radius: 6rem;
            font-style: italic;
            font-weight: bold;
            cursor: pointer;
        }

        .Lotofácil {
            color: #7F3992;
            border: .15rem solid #7F3992;

            &:hover {
                color: #fff;
                background-color: #7F3992;
                transition-duration: 0.4s;
            }
            
        }

        .Mega-Sena {
            color: #01AC66;
            border: .15rem solid #01AC66;

            &:hover {
                color: #fff;
                background-color: #01AC66;
                transition-duration: 0.4s;
            }
        }

        .Quina {
            color: #F79C31;
            border: .15rem solid #F79C31;

            &:hover {
                color: #fff;
                background-color: #F79C31;
                transition-duration: 0.4s;
            }
        }
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