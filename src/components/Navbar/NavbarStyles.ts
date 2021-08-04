import styled from 'styled-components';

export const Wrapper = styled.div`
    border-bottom: 2px solid #EBEBEB;
    color: #707070;

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-style: italic;
        font-weight: bold;
        padding: .6rem;
        margin: 0 9rem;

        li {
            display: flex;
            justify-content: space-around;
            align-items: center;
            gap: 4rem;
        }

        h1, h4 {
            cursor: pointer;
        }

        a {
            text-decoration: none;
            color: #707070;
        }
    }
`;

export const Underline = styled.div`
    position: absolute;
    top: 3.1rem;
    left: 8.6rem;
    width: 5.94rem;
    height: .44rem;
    background-color: #B5C401;
    border-radius: .4rem;
`;