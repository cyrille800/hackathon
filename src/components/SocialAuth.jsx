import * as React from 'react';
import { Icon } from "@iconify/react";
import { Stack, IconButton, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import "../css.css"
import LoginFormk1c from './LoginFormk1c';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24
};


const SocialAuth = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Stack spacing={2}>
        <IconButton
          sx={{
            borderRadius: "5px",
            padding: "0.5675rem",
            flex: 1,
            background: "#2D241E"
          }}
          className={"iconButtonLogin"}
        >
          <Icon icon="eva:google-fill" color="#DF3E30" width={22} height={22} />
          <Typography variant="h6"><Typography sx={{
            color: "white",
            fontSize:"0.7em",
            marginLeft:"1em"
          }}>Continué avec Google</Typography></Typography>
        </IconButton>
        <IconButton
          sx={{
            borderRadius: "5px",
            padding: "0.5675rem",
            flex: 1,
            background: "#2D241E"
          }}
          className={"iconButtonLogin"}

          onClick={handleOpen}
        >
          <img
            src="/static/cost.png"
            alt="icon k1c"
            width="10%"
          />
          <Typography variant="h6"><Typography sx={{
            color: "white",
            fontSize:"0.7em",
            marginLeft:"1em"
          }}>Continué avec K1C</Typography></Typography>
        </IconButton>
      </Stack>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <LoginFormk1c />
        </Box>
      </Modal>
    </>
  );
};

export default SocialAuth;
