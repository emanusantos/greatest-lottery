import { ReactNode } from 'hoist-non-react-statics/node_modules/@types/react';
import ReactDOM from 'react-dom';
import { StyledModal, StyledBackdrop } from './ModalStyles';

const Backdrop = ({ onClose }: { onClose: () => void }) => {
    return <StyledBackdrop onClick={onClose} />;
};
  
const ModalOverlay = ({ children }: { children: ReactNode }) => {
    return (
        <StyledModal>
            {children}
        </StyledModal>
    );
};
  
const portalElement = document.getElementById('overlays')!;
  
const Modal = ({ onClose, children }: { onClose: any, children: ReactNode }) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
            {ReactDOM.createPortal(
            <ModalOverlay>{children}</ModalOverlay>,
            portalElement
        )}
        </>
    );
};
  
export default Modal;
