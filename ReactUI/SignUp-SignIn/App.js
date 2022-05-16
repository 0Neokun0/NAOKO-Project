import { useState } from 'react';
import Button from '@material-ui/core/Button';
import ModalDialog from './ModalDialog';

const App = () => {
  // declare a new state variable for modal open
  const [open, setOpen] = useState(false);

  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <Button variant="contained" color="primary" onClick={handleOpen}>
        サインアップ
      </Button>
      // display the modal and pass props
      <ModalDialog open={open} handleClose={handleClose} />
    </div>
  );
};

export default App;