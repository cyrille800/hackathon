import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormControl, FormLabel, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { motion } from "framer-motion";
import { DropzoneArea } from "material-ui-dropzone";

const steps = [
  "Vos informations Personnelles",
  "Piece d'identite",
  "Confirmation",
];
const LoginFormk1c = ({ setAuth }) => {
  const [cniRecto, setCniRecto] = React.useState({
    files: [],
  });
  const [cniVerso, setCniVerso] = React.useState({
    files: [],
  });
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const handleChangeCniRecto = (files) => {
    setCniRecto({
      files: files,
    });
  };

  const handleChangeCniVerso = (files) => {
    setCniVerso({
      files: files,
    });
  };
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  let easing = [0.6, -0.05, 0.01, 0.99];
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.6, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  };
  return (
    <form autoComplete="off" noValidate>
      <Box>
        <div style={{ background: "#00093f" }}>
          <img
            src="/static/cost.png"
            alt="icon k1c"
            width="12%"
            style={{ verticalAlign: "middle" }}
          />
          <img
            src="/static/logo.png"
            alt="logo"
            style={{ verticalAlign: "middle" }}
            width="7%"
          />
        </div>
        <Stepper activeStep={activeStep} style={{ margin: "8% 3%" }}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div style={{ margin: "1% 3%" }}>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                {activeStep === 0 ? (
                  <center>
                    <Stack
                      spacing={2}
                      style={{ width: "60%" }}
                      component={motion.div}
                      {...fadeInUp}
                    >
                      <FormControl>
                        <FormLabel>Prenom</FormLabel>
                        <TextField
                          size="small"
                          style={{ fontSize: "0.1em" }}
                        ></TextField>
                      </FormControl>
                      <FormControl>
                        <FormLabel>Nom</FormLabel>
                        <TextField
                          size="small"
                          style={{ fontSize: "0.1em" }}
                        ></TextField>
                      </FormControl>
                      <FormControl>
                        <FormLabel>Adresse mail</FormLabel>
                        <TextField
                          size="small"
                          style={{ fontSize: "0.1em" }}
                        ></TextField>
                      </FormControl>
                    </Stack>
                  </center>
                ) : (
                  <React.Fragment>
                    {activeStep === 1 ? (
                      <Stack component={motion.div}
                      {...fadeInUp}>
                        <center>
                        <DropzoneArea
                          onChange={handleChangeCniRecto.bind(this)}
                          acceptedFiles={['image/jpeg', 'image/png', 'image/PNG']}
                          dropzoneText = "ajouter votre cni (version vecto)"
                          showPreviews ={false}
                          showPreviewsInDropzone = {false}
                          showFileNamesInPreview = {true}
                        />

                        <DropzoneArea
                          onChange={handleChangeCniVerso.bind(this)}
                          acceptedFiles={['image/jpeg', 'image/png', 'image/PNG']}
                          dropzoneText = "ajouter votre cni (version recto)"
                          showPreviews = {false}
                          showPreviewsInDropzone = {false}
                          showFileNamesInPreview = {true}
                        />
                        </center>
                      </Stack>
                    ) : (
                      <div>Step {activeStep + 1}</div>
                    )}
                  </React.Fragment>
                )}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 4, mb: 5 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                  variant="contained"
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />

                <Button onClick={handleNext} variant="contained">
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </div>
      </Box>
    </form>
  );
};

export default LoginFormk1c;
