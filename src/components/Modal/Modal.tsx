import ReactDOM from 'react-dom';
import { StyledModal, StyledBackdrop } from './ModalStyles';

const Backdrop = ({ onClose }: { onClose: any }) => {
    return <StyledBackdrop onClick={() => onClose} />;
};
  
const ModalOverlay = ({ children }: { children: any }) => {
    return (
        <StyledModal>
            {children}
        </StyledModal>
    );
};
  
const portalElement = document.getElementById('overlays')!;
  
const Modal = ({ onClose, children }: { onClose: any, children: any }) => {
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
