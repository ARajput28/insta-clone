import { Box, Button, Modal, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  //   border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

// eslint-disable-next-line react/prop-types
function Conformation({ open, handleClose, handleSubmit }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Order Item
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Are you sure you want order?
        </Typography>

        <div>
          <Button
            size="small"
            variant="contained"
            color="success"
            style={{ margin: '5px' }}
            onClick={handleSubmit}
          >
            Yes
          </Button>

          <Button
            size="small"
            color="error"
            variant="contained"
            onClick={handleClose}
          >
            Cancel
          </Button>
        </div>
      </Box>
    </Modal>
  );
}

export default Conformation;
