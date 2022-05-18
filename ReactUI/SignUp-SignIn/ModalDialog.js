import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import From from './From';

const ModalDialog = ({ open, handleClose }) => {
    return (
        // App.jsからとる
        <Dialog open={open} onClose={handleClose}>
            // form to be created
            <Form handleClose={handleClose} />
        </Dialog>
    );
};

export default ModalDialog;

