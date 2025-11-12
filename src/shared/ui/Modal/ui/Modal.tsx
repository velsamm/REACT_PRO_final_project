import React, { FC, PropsWithChildren } from "react";
import { createPortal } from 'react-dom';
import cls from './Modal.module.css';
import MuiModal, { type ModalProps }  from '@mui/material/Modal';

export const Modal: FC<PropsWithChildren & ModalProps> = ({ children, open, ...rest }) => {
    const target = window.document.getElementById('modal-root');

    if (!open || !target) {
        return null;
    }

    return createPortal(
        <MuiModal component='div' {...rest} open={true} >
            <div className={cls.modal}>{children}</div>
        </MuiModal>
    , target);
}