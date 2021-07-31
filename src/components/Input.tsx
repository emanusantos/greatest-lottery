import { ChangeEvent } from 'hoist-non-react-statics/node_modules/@types/react';
import styled from 'styled-components';

const StyledInput = styled.input`

        border: none;
        padding: 1.5rem;
        border-bottom: 2px solid #EBEBEB;
        width: 100%;
        outline: none;

        &::placeholder {
            color: #9D9D9D;
            font-style: italic;
            font-weight: bold;
        }

        &:focus::placeholder {
            color: transparent;
            transition-duration: 0.4s;
        }

`;

interface InputProps {
    type: string;
    placeholder: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    id?: string;
    value?: any;
}

export const Input: React.FC<InputProps> = (props) => {

    
    return (
        <StyledInput type={props.type} placeholder={props.placeholder} onChange={props.onChange} id={props.id} value={props.value}  />
    )
};