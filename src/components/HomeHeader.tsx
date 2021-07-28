import React from 'react';
import styled from 'styled-components';

const StyledHomeHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-left: 3.5rem;
    padding: 5rem 10rem 5rem 5rem;
    justify-content: space-between;

    .filters {
        display: flex;
        align-items: center;
        margin-right: 9rem;
        gap: 1rem;

        button {
            margin-bottom: 1rem;
        }

        p {
            color: #C1C1C1;
        }

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
        }

        #Mega-Sena {
            color: #01AC66;
            border: .15rem solid #01AC66;
        }

        #Quina {
            color: #F79C31;
            border: .15rem solid #F79C31;
        }
    }

    h4 {
        color: #707070;
        font-weight: bold;
        font-size: 1.5rem;
    }

    #newbet {
        color: #B5C401;
        cursor: pointer;
    }
`;

const HomeHeader = () => {
    return (
        <StyledHomeHeader>
            <h4>RECENT GAMES</h4>
            <div className="filters">
                <p>Filters</p>
                <button id="Lotofácil">Lotofácil</button>
                <button id="Mega-Sena">Mega-Sena</button>
                <button id="Quina">Quina</button>
            </div>
            <h4 id="newbet">New Bet ➝</h4>
        </StyledHomeHeader>
    );
};

export default HomeHeader;