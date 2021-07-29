import React from 'react';
import styled from 'styled-components';

const GameButtons = styled.div`
    display: flex;
    gap: 1.5rem;

    #Lotofácil, #Mega-Sena, #Quina {
            padding: .3rem 1rem;
            background-color: #fff;
            border-radius: 6rem;
            font-style: italic;
            font-weight: bold;
            cursor: pointer;
        }

        #Lotofácil {
            color: #7F3992;
            border: .15rem solid #7F3992;

            &:hover {
                color: #fff;
                background-color: #7F3992;
                transition-duration: 0.4s;
            }
        }

        #Mega-Sena {
            color: #01AC66;
            border: .15rem solid #01AC66;

            &:hover {
                color: #fff;
                background-color: #01AC66;
                transition-duration: 0.4s;
            }
        }

        #Quina {
            color: #F79C31;
            border: .15rem solid #F79C31;

            &:hover {
                color: #fff;
                background-color: #F79C31;
                transition-duration: 0.4s;
            }
        }
`;

const Buttons: React.FC = () => {
    return (
        <GameButtons>
            <button id="Lotofácil">Lotofácil</button>
            <button id="Mega-Sena">Mega-Sena</button>
            <button id="Quina">Quina</button>
        </GameButtons>
    );
};

export default Buttons;