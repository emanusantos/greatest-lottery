import styled from 'styled-components';

export const CartContainer = styled.div`
    width: 18rem;
    height: 50%;
    display: flex;
    flex-direction: column;
    border: .06rem solid #E2E2E2;
    border-radius: .8rem;
    background-color: #fff;

    .titleFont {
        font-size: 1.3rem;
        font-weight: bold;
        font-style: italic;
    }

    span {
        font-style: normal;
        font-weight: lighter;
    }

    h4 {
        padding: 2rem 1rem;
        text-align: center;
        color: #e4e4e4;
    }

    #titleFont {
        padding: 1.5rem 0 0 1rem;
    }

    #footerFont {
        padding: 0 0 1.5rem 1rem;
    }

    .cartItem {
        padding: 1rem;
    }

    .numbersBet {
        max-width: 11rem;
    }

    .parent {
        display: flex;
        padding: .5rem 0;
        align-items: center;

        .icon {
            cursor: pointer;
        }

        .nameAndPrice {
            display: flex;
            gap: .4rem;

            #price {
                font-weight: lighter;
                font-style: normal;
            }
        }

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

interface ColorProp {
    bgc: string;
}

export const ColoredBar = styled.div<ColorProp>`
    width: .25rem;
    height: 5.4rem;
    border-radius: 6.25rem 0 0 6.25rem;
    margin: .6rem;
    background-color: ${props => props.bgc};
`;

export const BetCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .6rem;

    p {
        font-size: .9rem;
        font-weight: bold;
        font-style: italic;
        color: ${props => props.color};
    }
`;

export const BetGameType = styled.p`
    color: ${props => props.color};
`;