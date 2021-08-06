import styled from 'styled-components';

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 1.5rem;
    gap: 1rem;
    color: #868686;

    .editIcon {
        margin-left: .5rem;
        cursor: pointer;
        color: #B5C401;
    }

    #changePassword {
        padding-top: 2rem;
        cursor: pointer;
        width: 10rem;

        &:hover {
            filter: brightness(1.3);
            transition-duration: .2s;
        }
    }

    .changeForm {
        display: flex;
        flex-direction: column;
        border-radius: 1rem;

        #pass {
            border-radius: 1rem 1rem 0 0;
        }
    }

    .nameEdit, .emailEdit {
        display: flex;
        align-items: center;
    }

    .nameEdit p, .emailEdit p {
        padding-bottom: 1rem;
    }

    .nameEdit input, .emailEdit input {
        max-width: 20rem;
        border-radius: 1rem 0 0 1rem;
    }

    .confirmEdit {
        padding: 1.45rem;
        background-color: #fff;
        border: 2px solid #EBEBEB;
        border-left: none;
        border-top: none;
        border-radius: 0 .8rem .8rem 0;
        cursor: pointer;
        color: #B5C401;

        &:hover {
            background-color: #B5C401;
            color: #fff;
            transition-duration: .4s;
        }
    }
`;