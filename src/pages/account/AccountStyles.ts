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

        #enter {
            border-radius: 1rem 1rem 0 0;
        }
    }
`;