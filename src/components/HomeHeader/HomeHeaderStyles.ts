import styled from 'styled-components';

export const StyledHomeHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 1.5rem;

    h4 {
        margin-left: .5rem;
    }

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
            cursor: pointer;

            &:hover {
                filter: brightness(1.1);
                transition-duration: .2s;
            }
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
    }

    h4 {
        color: #707070;
        font-weight: bold;
        font-size: 1.5rem;
    }

    a {
        text-decoration: none;
        color: #B5C401;
    }

    #newbet {
        color: #B5C401;
        cursor: pointer;

        &:hover {
            filter: brightness(.75);
            transition-duration: 0.4s;
        }
    }
`;