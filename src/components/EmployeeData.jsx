import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Backdrop, FormControl, Input, InputLabel, List, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from '@mui/material';
import { Circle } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import AppBar from '@mui/material/AppBar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ram from "../assets/ram.png";
import Chip from '@mui/material/Chip';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import SaveIcon from '@mui/icons-material/Save';
import Button from '@mui/material/Button';
import { GridCloseIcon } from '@mui/x-data-grid';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import MobileStepper from '@mui/material/MobileStepper';
import { useTheme } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
// import { IMaskInput } from 'react-imask';
import { NumericFormat } from 'react-number-format';
import Tooltip from '@mui/material/Tooltip';
import PropTypes from 'prop-types';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const ProSpan = styled('span')({
  display: 'inline-block',
  height: '1em',
  width: '100%',
  verticalAlign: 'middle',
  marginLeft: '0.3em',
  marginBottom: '0.08em',

  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundImage: 'url(https://mui.com/static/x/pro.svg)',
});

function Label({ componentName, valueType, isProOnly }) {
  const content = (
    <span>
      <strong>{componentName}</strong>
    </span>
  );

  if (isProOnly) {
    return (
      <Stack direction="row" spacing={0.5} component="span">
        <Tooltip title="Included on Pro package">
          <a
            href="https://mui.com/x/introduction/licensing/#pro-plan"
            aria-label="Included on Pro package"
          >
            <ProSpan />
          </a>
        </Tooltip>
        {content}
      </Stack>
    );
  }

  return content;
}


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  const [currentCity, selectCity] = React.useState("Neemuch");
  const [currentDepartment, selectDepartment] = React.useState("Tech");
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));


  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };
  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    width: '100%';
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 20;
    font-weight: 500;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backdropFilter: 'blur(10px)',
    width: 900,
    height: 600,
    bgcolor: '#ffffff70',
    border: '2px solid #673ab7',
    boxShadow: 40,
    borderRadius: 10,
    p: 5,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = (e) => {
    setOpen(true)
  };
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 5,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#ffffff50' : '#1A2027',
      border: '1px solid',
      borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
      fontSize: 18,
      width: '100%',
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));

  const [open1, setOpen1] = React.useState(false);
  const EmphandleOpen = () => setOpen1(true);
  const EmphandleClose = () => setOpen1(false);



  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const theme = useTheme();

  const branchName = [
    {
      value: 'Singoli',
      label: 'Singoli',
    },
    {
      value: 'Neemuch',
      label: 'Neemuch',
    },
    {
      value: 'Indore',
      label: 'Indore',
    },
    {
      value: 'Bhopal',
      label: 'Bhopal',
    },
  ];


  const DepartmentName = [
    {
      value: 'Company administrative function',
      label: 'Company administrative function',
    },
    {
      value: 'Finance and Accounts Department',
      label: 'Finance and Accounts Department',
    },
    {
      value: 'Marketing Department',
      label: 'Marketing Department',
    },
    {
      value: 'IT Department',
      label: 'IT Department',
    },
    {
      value: 'Management Department',
      label: 'Management Department',
    }, {
      value: 'Servies: Driver, Bus conductor and Helper ',
      label: 'Servies: Driver, Bus conductor and Helper',
    },
  ];




  const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="(#00) 000-0000"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  });

  TextMaskCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  const NumericFormatCustom = React.forwardRef(
    function NumericFormatCustom(props, ref) {
      const { onChange, ...other } = props;

      return (
        <NumericFormat

          {...other}
          getInputRef={ref}
          onValueChange={(values) => {
            onChange({
              target: {
                name: props.name,
                value: values.value,
              },
            });
          }}
          thousandSeparator
          prefix="₹"
        />
      );
    },
  );

  NumericFormatCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  const [values, setValues] = React.useState({

    numberformat: '0',
  });
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };


  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });




  return (


    <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
      <Modal
        open={open}
        onClose={(e) => handleClose(e)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >
        <Box sx={style}>


          <Stack direction={"column"} justifyContent={"space-between"} sx={{ height: "100%" }}>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography id="modal-modal-title" variant="h6" component="h2">Branch Data Form</Typography>
              <IconButton onClick={(e) => setOpen(false)}><GridCloseIcon /></IconButton>
            </Stack>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl variant="standard" sx={{ margin: 2 }}>
                  <InputLabel sx={{ fontSize: 20 }} shrink htmlFor="bootstrap-input">
                    Branch Name
                  </InputLabel>
                  <BootstrapInput id="bootstrap-input" />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl variant="standard" sx={{ margin: 2 }}>
                  <InputLabel sx={{ fontSize: 20 }} shrink htmlFor="bootstrap-input">
                    District
                  </InputLabel>
                  <BootstrapInput id="bootstrap-input" />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl variant="standard" sx={{ margin: 2 }}>
                  <InputLabel sx={{ fontSize: 20 }} shrink htmlFor="bootstrap-input">
                    State
                  </InputLabel>
                  <BootstrapInput id="bootstrap-input" />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl variant="standard" sx={{ margin: 2 }}>
                  <InputLabel sx={{ fontSize: 20 }} shrink htmlFor="bootstrap-input">
                    Country
                  </InputLabel>
                  <BootstrapInput id="bootstrap-input" />
                </FormControl>
              </Grid>
            </Grid>
            <Stack direction={"row"} justifyContent={"flex-end"}>
              <Button variant="outlined" startIcon={<SaveIcon />}>
                Save
              </Button>
            </Stack>
          </Stack>


        </Box>
      </Modal>


      <Modal
        open={open1}
        onClose={EmphandleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h1" sx={{ fontWeight: 600 }}>Employee Data Entry</Typography>
          <Stack direction={'column'} justifyContent={'space-between'} sx={{ height: '100%' }}>
            <Stepper activeStep={activeStep} alternativeLabel >
              <Step key={1} >
                <StepLabel>Personal Details</StepLabel>
              </Step>
              <Step key={2}>
                <StepLabel>offical Details</StepLabel>

              </Step>
              <Step key={3}>
                <StepLabel>Verification</StepLabel>

              </Step>
            </Stepper>
            {activeStep == 0 && (
              <Box sx={{ height: '100%', overflowY: 'auto', overflowX: 'hidden' }}   >
                <Grid container spacing={2} sx={{ margin: 2 }}>
                  <Typography sx={{ fontSize: 18 }}>Full Name</Typography>

                  <Stack direction={'row'} sx={{ width: '100%' }}>
                    <Grid item xs={6} >
                      <FormControl variant="standard" sx={{ margin: 2, mt: 0, width: '100%' }}>
                        <InputLabel sx={{ fontSize: 16 }} shrink htmlFor="bootstrap-input">
                          First Name
                        </InputLabel>
                        <BootstrapInput />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl variant="standard" sx={{ margin: 2, mt: 0, width: '100%' }}>
                        <InputLabel sx={{ fontSize: 16 }} shrink htmlFor="bootstrap-input">
                          Last Name
                        </InputLabel>
                        <BootstrapInput />
                      </FormControl>
                    </Grid></Stack>

                  <Grid item xs={6}>
                    <FormControl variant="standard" sx={{ margin: 2, width: '100%' }}>
                      <InputLabel sx={{ fontSize: 20, fontWeight: 650 }} shrink htmlFor="bootstrap-input">
                        Email
                      </InputLabel>
                      <BootstrapInput id="bootstrap-input" />
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl variant="standard" sx={{ margin: 2, width: '100%' }}>
                      <InputLabel sx={{ fontSize: 20, fontWeight: 650 }} shrink htmlFor="bootstrap-input">
                        Moblie Number
                      </InputLabel>
                      <BootstrapInput id="bootstrap-input" />
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}><LocalizationProvider dateAdapter={AdapterDayjs}>

                    <DemoContainer
                      components={[
                        'DatePicker',

                      ]}

                    >
                      <DemoItem label={<Label componentName="Date of Birth" valueType="date" />} >
                        <DatePicker />
                      </DemoItem>

                    </DemoContainer>



                  </LocalizationProvider></Grid>
                  <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer
                        components={[
                          'DatePicker',

                        ]}
                      >
                        <DemoItem label={<Label componentName="Job Starting date" valueType="date" />}>
                          <DatePicker />
                        </DemoItem>

                      </DemoContainer>

                    </LocalizationProvider>
                  </Grid>
                  <Typography sx={{ fontSize: 18, mt: 2, fontWeight: 650 }}>
                    Current Address
                  </Typography>
                  <Grid item xs={12}>
                    <Textarea aria-label="minimum height" minRows={2} placeholder="Enter the Address" sx={{ width: '100%', bgcolor: '#ffffff50' }} />

                  </Grid>
                  <Grid item xs={4}>
                    <span>
                      <strong>Country</strong>
                    </span>
                    <Autocomplete

                      id="country-select-demo"
                      sx={{ width: '100%' }}
                      options={countries}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                          <img
                            loading="lazy"
                            width="20"
                            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                            alt=""
                          />

                          {option.label} ({option.code}) +{option.phone}
                        </Box>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Choose a country"
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password', // disable autocomplete and autofill
                          }}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl variant="standard">
                      <InputLabel sx={{ fontSize: 20 }} shrink htmlFor="bootstrap-input">
                        <strong>State</strong>
                      </InputLabel>
                      <BootstrapInput id="bootstrap-input" />
                    </FormControl>

                  </Grid>
                  <Grid item xs={4}>
                    <FormControl variant="standard">
                      <InputLabel sx={{ fontSize: 20 }} shrink htmlFor="bootstrap-input">
                        <strong>City</strong>
                      </InputLabel>
                      <BootstrapInput id="bootstrap-input" />
                    </FormControl>

                  </Grid>
                  <Grid item xs={12}>
                    <hr />
                    <Typography sx={{ fontSize: 18, mt: 2, fontWeight: 650 }}>
                      Permanent Address
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Textarea aria-label="minimum height" minRows={2} placeholder="Enter the Address" sx={{ width: '100%', bgcolor: '#ffffff50' }} />

                  </Grid>
                  <Grid item xs={4}>
                    <span>
                      <strong>Country</strong>
                    </span>
                    <Autocomplete

                      id="country-select-demo"
                      sx={{ width: '100%' }}
                      options={countries}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                          <img
                            loading="lazy"
                            width="20"
                            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                            alt=""
                          />

                          {option.label} ({option.code}) +{option.phone}
                        </Box>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Choose a country"
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password', // disable autocomplete and autofill
                          }}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl variant="standard">
                      <InputLabel sx={{ fontSize: 20 }} shrink htmlFor="bootstrap-input">
                        <strong>State</strong>
                      </InputLabel>
                      <BootstrapInput id="bootstrap-input" />
                    </FormControl>

                  </Grid>
                  <Grid item xs={4}>
                    <FormControl variant="standard">
                      <InputLabel sx={{ fontSize: 20 }} shrink htmlFor="bootstrap-input">
                        <strong>City</strong>
                      </InputLabel>
                      <BootstrapInput id="bootstrap-input" />
                    </FormControl>

                  </Grid>
                </Grid>

              </Box>
            )}
            {activeStep == 1 && (
              <Box sx={{ height: '100%', overflowY: 'auto', overflowX: 'hidden' }}   >
                <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
                  <Grid item xs={12}>
                    <Typography sx={{ fontSize: 18, fontWeight: 550, fontFamily: 'BlinkMacSystemFont' }}>
                      Employee offical Detail Entry
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                      component="form"
                      sx={{
                        '& .MuiTextField-root': { width: '90%' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="filled-select-Branch"
                        select
                        label="Select"
                        defaultValue="Indore"
                        helperText="Please select your Branch Name"
                        variant="filled"
                      >
                        {branchName.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                      component="form"
                      sx={{
                        '& .MuiTextField-root': { width: '90%' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="filled-select-Department"
                        select
                        label="Select"
                        defaultValue="Indore"
                        helperText="Please select your Department"
                        variant="filled"
                      >
                        {DepartmentName.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Salary"

                      value={values.numberformat}
                      onChange={handleChange}
                      name="numberformat"
                      id="formatted-numberformat-input"
                      InputProps={{
                        inputComponent: NumericFormatCustom,
                      }}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={6} >
                    <FormControl variant="standard" sx={{ margin: 2, mt: 0, width: '90%' }}>
                      <InputLabel sx={{ fontSize: 18, fontWeight: 600 }} shrink htmlFor="bootstrap-input">
                        Job Post
                      </InputLabel>
                      <BootstrapInput />
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography sx={{fontSize:16, fontWeight:550,fontFamily: 'BlinkMacSystemFont' }}>Resume upload</Typography>
                    <Button
                    component="label"
                    sx={{bgcolor:'#ffffff50', width:'50%'}}
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload Resume
                    <VisuallyHiddenInput type="file" />
                  </Button></Grid>
                  <Grid item xs={6}>
                    <Typography sx={{fontSize:16, fontWeight:550,fontFamily: 'BlinkMacSystemFont' }}>Upload Driving Licence</Typography>
                    <Button
                    component="label"
                    sx={{bgcolor:'#ffffff50', width:'80%'}}
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload Driving Licence
                    <VisuallyHiddenInput type="file" />
                  </Button></Grid>
                </Grid>
              </Box>
            )}
            <MobileStepper
              variant="progress"
              steps={3}
              position="static"
              activeStep={activeStep}
              sx={{ maxWidth: '100%', flexGrow: 1, bgcolor: '#ffffff00' }}
              nextButton={
                <Button size="small" variant="outlined" onClick={handleNext} disabled={activeStep === 2} sx={{ bgcolor: '#ffffff50', fontWeight: 600 }}>
                  {activeStep == 2 ? "Done" : "Save & Next"}
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button size="small" variant="outlined" onClick={handleBack} disabled={activeStep === 0} sx={{ bgcolor: '#ffffff50', fontWeight: 600 }}>
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Stack>
        </Box>

      </Modal>

      <Grid container>
        <Grid xs={3}>
          <Stack spacing={2} sx={{ backgroundColor: '#9575cd', height: '100vh' }}>

            <Box>
              <Typography variant="h5" component="h4" sx={{
                color: '#673ab7',
                fontWeight: 600,
                textAlign: 'left',
                fontFamily: 'BlinkMacSystemFont',
                fontStyle: 'oblique',
                paddingLeft: 2,
                paddingTop: 2,
                paddingBottom: 1, display: 'flex', justifyContent: 'space-between'
              }}>
                Branch <IconButton color="#673ab7" sx={{ marginRight: 2, mb: 1 }} aria-label="add an alarm" onClick={handleOpen}><AddIcon /></IconButton>
              </Typography>
              <Box sx={{ overflowY: 'scroll', height: '40vh', scrollbarWidth: 'none', backgroundColor: '#d1c4e9' }}>

                <List  >
                  {
                    ["Neemuch", "Indore",
                      "Singoli",
                      "Guna",
                      "Bhopal",
                      "Gwalior",
                      "Alirajpur",
                      "Bhilwara",
                      "Chitorgarh"].map(city => {
                        return (<ListItemButton selected={currentCity === city} onClick={() => selectCity(city)}>
                          <ListItemIcon >
                            <Circle sx={{ height: '7px', color: '#7e57c2' }} />
                          </ListItemIcon>
                          <ListItemText primary={city} />
                        </ListItemButton>);
                      })
                  }



                </List>

              </Box>
            </Box>


            <Box sx={{ height: '40vh' }} >
              <Typography variant="h5" component="h4" sx={{ color: '#673ab7', fontWeight: 600, textAlign: 'left', fontFamily: 'BlinkMacSystemFont', fontStyle: 'oblique', paddingLeft: 2, paddingBottom: 0.5, paddingTop: 0, display: 'flex', justifyContent: 'space-between' }}>
                Department
              </Typography>
              <Box sx={{ overflowY: 'scroll', height: '40vh', scrollbarWidth: 'none', backgroundColor: '#d1c4e9' }}>

                <List>

                  {
                    ["Tech",
                      "Accounting",
                      "Driver",
                      "BusConductor",
                      "Helper"

                    ].map(Department => {
                      return (<ListItemButton selected={currentDepartment === Department} onClick={() => selectDepartment(Department)}>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary={Department} />
                      </ListItemButton>);
                    })
                  }






                </List>
              </Box>
            </Box>
          </Stack>
        </Grid>
        <Grid xs={9} >
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar sx={{ backgroundColor: '#7e57c2' }}>

                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                  EmployeeData
                  <IconButton onClick={EmphandleOpen} color="#673ab7" sx={{ marginRight: 2, ml: 2, mb: 1 }} aria-label="add an alarm"><AddIcon /></IconButton>
                </Typography>
                <Search >
                  <SearchIconWrapper >
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
              </Toolbar>
            </AppBar>
            <Grid container spacing={2} sx={{ margin: 2 }} >
              <Grid item xs={4}>

                <Card elevation={10} sx={{ display: 'flex', height: '14vh' }}>

                  <CardMedia
                    component="img"
                    sx={{ width: '8vw' }}
                    image={ram}
                    alt="Live from space album cover"
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto', paddingTop: 0, margin: 0 }} >
                      <Typography component="h6" variant="h5" sx={{
                        marginTop: 0, fontFamily: 'BlinkMacSystemFont',
                      }}>
                        Ram
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div" sx={{
                        fontFamily: 'BlinkMacSystemFont',
                        fontStyle: 'oblique',
                        fontSize: 14
                      }}>
                        Frontend Developer
                      </Typography>
                      <Chip label="Available" size='small' sx={{ fontSize: 10, color: "#7e57c2", marginTop: 2 }} />
                    </CardContent>

                  </Box>

                </Card>

              </Grid>
              <Grid item xs={4}>

                <Card elevation={10} sx={{ display: 'flex', height: '14vh' }}>

                  <CardMedia
                    component="img"
                    sx={{ width: '8vw' }}
                    image={ram}
                    alt="Live from space album cover"
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto', paddingTop: 0, margin: 0 }} >
                      <Typography component="h6" variant="h5" sx={{
                        marginTop: 0, fontFamily: 'BlinkMacSystemFont',
                      }}>
                        Ram
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div" sx={{
                        fontFamily: 'BlinkMacSystemFont',
                        fontStyle: 'oblique',
                        fontSize: 14
                      }}>
                        Frontend Developer
                      </Typography>
                      <Chip label="Available" size='small' sx={{ fontSize: 10, color: "#7e57c2", marginTop: 2 }} />
                    </CardContent>

                  </Box>

                </Card>

              </Grid>
              <Grid item xs={4}>

                <Card elevation={10} sx={{ display: 'flex', height: '14vh' }}>

                  <CardMedia
                    component="img"
                    sx={{ width: '8vw' }}
                    image={ram}
                    alt="Live from space album cover"
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto', paddingTop: 0, margin: 0 }} >
                      <Typography component="h6" variant="h5" sx={{
                        marginTop: 0, fontFamily: 'BlinkMacSystemFont',
                      }}>
                        Ram
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div" sx={{
                        fontFamily: 'BlinkMacSystemFont',
                        fontStyle: 'oblique',
                        fontSize: 14
                      }}>
                        Frontend Developer
                      </Typography>
                      <Chip label="Available" size='small' sx={{ fontSize: 10, color: "#7e57c2", marginTop: 2 }} />
                    </CardContent>

                  </Box>

                </Card>

              </Grid>
              <Grid item xs={4}>

                <Card elevation={10} sx={{ display: 'flex', height: '14vh' }}>

                  <CardMedia
                    component="img"
                    sx={{ width: '8vw' }}
                    image={ram}
                    alt="Live from space album cover"
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto', paddingTop: 0, margin: 0 }} >
                      <Typography component="h6" variant="h5" sx={{
                        marginTop: 0, fontFamily: 'BlinkMacSystemFont',
                      }}>
                        Ram
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div" sx={{
                        fontFamily: 'BlinkMacSystemFont',
                        fontStyle: 'oblique',
                        fontSize: 14
                      }}>
                        Frontend Developer
                      </Typography>
                      <Chip label="Available" size='small' sx={{ fontSize: 10, color: "#7e57c2", marginTop: 2 }} />
                    </CardContent>

                  </Box>

                </Card>

              </Grid>
              <Grid item xs={4}>

                <Card elevation={10} sx={{ display: 'flex', height: '14vh' }}>

                  <CardMedia
                    component="img"
                    sx={{ width: '8vw' }}
                    image={ram}
                    alt="Live from space album cover"
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto', paddingTop: 0, margin: 0 }} >
                      <Typography component="h6" variant="h5" sx={{
                        marginTop: 0, fontFamily: 'BlinkMacSystemFont',
                      }}>
                        Ram
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div" sx={{
                        fontFamily: 'BlinkMacSystemFont',
                        fontStyle: 'oblique',
                        fontSize: 14
                      }}>
                        Frontend Developer
                      </Typography>
                      <Chip label="Available" size='small' sx={{ fontSize: 10, color: "#7e57c2", marginTop: 2 }} />
                    </CardContent>

                  </Box>

                </Card>

              </Grid>
              <Grid item xs={4}>

                <Card elevation={10} sx={{ display: 'flex', height: '14vh' }}>

                  <CardMedia
                    component="img"
                    sx={{ width: '8vw' }}
                    image={ram}
                    alt="Live from space album cover"
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto', paddingTop: 0, margin: 0 }} >
                      <Typography component="h6" variant="h5" sx={{
                        marginTop: 0, fontFamily: 'BlinkMacSystemFont',
                      }}>
                        Ram
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div" sx={{
                        fontFamily: 'BlinkMacSystemFont',
                        fontStyle: 'oblique',
                        fontSize: 14
                      }}>
                        Frontend Developer
                      </Typography>
                      <Chip label="Available" size='small' sx={{ fontSize: 10, color: "#7e57c2", marginTop: 2 }} />
                    </CardContent>

                  </Box>

                </Card>

              </Grid>
              <Grid item xs={4}>

                <Card elevation={10} sx={{ display: 'flex', height: '14vh' }}>

                  <CardMedia
                    component="img"
                    sx={{ width: '8vw' }}
                    image={ram}
                    alt="Live from space album cover"
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto', paddingTop: 0, margin: 0 }} >
                      <Typography component="h6" variant="h5" sx={{
                        marginTop: 0, fontFamily: 'BlinkMacSystemFont',
                      }}>
                        Ram
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div" sx={{
                        fontFamily: 'BlinkMacSystemFont',
                        fontStyle: 'oblique',
                        fontSize: 14
                      }}>
                        Frontend Developer
                      </Typography>
                      <Chip label="Available" size='small' sx={{ fontSize: 10, color: "#7e57c2", marginTop: 2 }} />
                    </CardContent>

                  </Box>

                </Card>

              </Grid>
              <Grid item xs={4}>

                <Card elevation={10} sx={{ display: 'flex', height: '14vh' }}>

                  <CardMedia
                    component="img"
                    sx={{ width: '8vw' }}
                    image={ram}
                    alt="Live from space album cover"
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto', paddingTop: 0, margin: 0 }} >
                      <Typography component="h6" variant="h5" sx={{
                        marginTop: 0, fontFamily: 'BlinkMacSystemFont',
                      }}>
                        Ram
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div" sx={{
                        fontFamily: 'BlinkMacSystemFont',
                        fontStyle: 'oblique',
                        fontSize: 14
                      }}>
                        Frontend Developer
                      </Typography>
                      <Chip label="Available" size='small' sx={{ fontSize: 10, color: "#7e57c2", marginTop: 2 }} />
                    </CardContent>

                  </Box>

                </Card>

              </Grid>
              <Grid item xs={4}>

                <Card elevation={10} sx={{ display: 'flex', height: '14vh' }}>

                  <CardMedia
                    component="img"
                    sx={{ width: '8vw' }}
                    image={ram}
                    alt="Live from space album cover"
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto', paddingTop: 0, margin: 0 }} >
                      <Typography component="h6" variant="h5" sx={{
                        marginTop: 0, fontFamily: 'BlinkMacSystemFont',
                      }}>
                        Ram
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div" sx={{
                        fontFamily: 'BlinkMacSystemFont',
                        fontStyle: 'oblique',
                        fontSize: 14
                      }}>
                        Frontend Developer
                      </Typography>
                      <Chip label="Available" size='small' sx={{ fontSize: 10, color: "#7e57c2", marginTop: 2 }} />
                    </CardContent>

                  </Box>

                </Card>

              </Grid>
              <Grid item xs={4}>

                <Card elevation={10} sx={{ display: 'flex', height: '14vh' }}>

                  <CardMedia
                    component="img"
                    sx={{ width: '8vw' }}
                    image={ram}
                    alt="Live from space album cover"
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto', paddingTop: 0, margin: 0 }} >
                      <Typography component="h6" variant="h5" sx={{
                        marginTop: 0, fontFamily: 'BlinkMacSystemFont',
                      }}>
                        Ram
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div" sx={{
                        fontFamily: 'BlinkMacSystemFont',
                        fontStyle: 'oblique',
                        fontSize: 14
                      }}>
                        Frontend Developer
                      </Typography>
                      <Chip label="Available" size='small' sx={{ fontSize: 10, color: "#7e57c2", marginTop: 2 }} />
                    </CardContent>

                  </Box>

                </Card>

              </Grid>


            </Grid>
          </Box>



        </Grid>

      </Grid>
    </Box>
  );
}





const countries = [
  { code: 'AD', label: 'Andorra', phone: '376' },
  {
    code: 'AE',
    label: 'United Arab Emirates',
    phone: '971',
  },
  { code: 'AF', label: 'Afghanistan', phone: '93' },
  {
    code: 'AG',
    label: 'Antigua and Barbuda',
    phone: '1-268',
  },
  { code: 'AI', label: 'Anguilla', phone: '1-264' },
  { code: 'AL', label: 'Albania', phone: '355' },
  { code: 'AM', label: 'Armenia', phone: '374' },
  { code: 'AO', label: 'Angola', phone: '244' },
  { code: 'AQ', label: 'Antarctica', phone: '672' },
  { code: 'AR', label: 'Argentina', phone: '54' },
  { code: 'AS', label: 'American Samoa', phone: '1-684' },
  { code: 'AT', label: 'Austria', phone: '43' },
  {
    code: 'AU',
    label: 'Australia',
    phone: '61',
    suggested: true,
  },
  { code: 'AW', label: 'Aruba', phone: '297' },
  { code: 'AX', label: 'Alland Islands', phone: '358' },
  { code: 'AZ', label: 'Azerbaijan', phone: '994' },
  {
    code: 'BA',
    label: 'Bosnia and Herzegovina',
    phone: '387',
  },
  { code: 'BB', label: 'Barbados', phone: '1-246' },
  { code: 'BD', label: 'Bangladesh', phone: '880' },
  { code: 'BE', label: 'Belgium', phone: '32' },
  { code: 'BF', label: 'Burkina Faso', phone: '226' },
  { code: 'BG', label: 'Bulgaria', phone: '359' },
  { code: 'BH', label: 'Bahrain', phone: '973' },
  { code: 'BI', label: 'Burundi', phone: '257' },
  { code: 'BJ', label: 'Benin', phone: '229' },
  { code: 'BL', label: 'Saint Barthelemy', phone: '590' },
  { code: 'BM', label: 'Bermuda', phone: '1-441' },
  { code: 'BN', label: 'Brunei Darussalam', phone: '673' },
  { code: 'BO', label: 'Bolivia', phone: '591' },
  { code: 'BR', label: 'Brazil', phone: '55' },
  { code: 'BS', label: 'Bahamas', phone: '1-242' },
  { code: 'BT', label: 'Bhutan', phone: '975' },
  { code: 'BV', label: 'Bouvet Island', phone: '47' },
  { code: 'BW', label: 'Botswana', phone: '267' },
  { code: 'BY', label: 'Belarus', phone: '375' },
  { code: 'BZ', label: 'Belize', phone: '501' },
  {
    code: 'CA',
    label: 'Canada',
    phone: '1',
    suggested: true,
  },
  {
    code: 'CC',
    label: 'Cocos (Keeling) Islands',
    phone: '61',
  },
  {
    code: 'CD',
    label: 'Congo, Democratic Republic of the',
    phone: '243',
  },
  {
    code: 'CF',
    label: 'Central African Republic',
    phone: '236',
  },
  {
    code: 'CG',
    label: 'Congo, Republic of the',
    phone: '242',
  },
  { code: 'CH', label: 'Switzerland', phone: '41' },
  { code: 'CI', label: "Cote d'Ivoire", phone: '225' },
  { code: 'CK', label: 'Cook Islands', phone: '682' },
  { code: 'CL', label: 'Chile', phone: '56' },
  { code: 'CM', label: 'Cameroon', phone: '237' },
  { code: 'CN', label: 'China', phone: '86' },
  { code: 'CO', label: 'Colombia', phone: '57' },
  { code: 'CR', label: 'Costa Rica', phone: '506' },
  { code: 'CU', label: 'Cuba', phone: '53' },
  { code: 'CV', label: 'Cape Verde', phone: '238' },
  { code: 'CW', label: 'Curacao', phone: '599' },
  { code: 'CX', label: 'Christmas Island', phone: '61' },
  { code: 'CY', label: 'Cyprus', phone: '357' },
  { code: 'CZ', label: 'Czech Republic', phone: '420' },
  {
    code: 'DE',
    label: 'Germany',
    phone: '49',
    suggested: true,
  },
  { code: 'DJ', label: 'Djibouti', phone: '253' },
  { code: 'DK', label: 'Denmark', phone: '45' },
  { code: 'DM', label: 'Dominica', phone: '1-767' },
  {
    code: 'DO',
    label: 'Dominican Republic',
    phone: '1-809',
  },
  { code: 'DZ', label: 'Algeria', phone: '213' },
  { code: 'EC', label: 'Ecuador', phone: '593' },
  { code: 'EE', label: 'Estonia', phone: '372' },
  { code: 'EG', label: 'Egypt', phone: '20' },
  { code: 'EH', label: 'Western Sahara', phone: '212' },
  { code: 'ER', label: 'Eritrea', phone: '291' },
  { code: 'ES', label: 'Spain', phone: '34' },
  { code: 'ET', label: 'Ethiopia', phone: '251' },
  { code: 'FI', label: 'Finland', phone: '358' },
  { code: 'FJ', label: 'Fiji', phone: '679' },
  {
    code: 'FK',
    label: 'Falkland Islands (Malvinas)',
    phone: '500',
  },
  {
    code: 'FM',
    label: 'Micronesia, Federated States of',
    phone: '691',
  },
  { code: 'FO', label: 'Faroe Islands', phone: '298' },
  {
    code: 'FR',
    label: 'France',
    phone: '33',
    suggested: true,
  },
  { code: 'GA', label: 'Gabon', phone: '241' },
  { code: 'GB', label: 'United Kingdom', phone: '44' },
  { code: 'GD', label: 'Grenada', phone: '1-473' },
  { code: 'GE', label: 'Georgia', phone: '995' },
  { code: 'GF', label: 'French Guiana', phone: '594' },
  { code: 'GG', label: 'Guernsey', phone: '44' },
  { code: 'GH', label: 'Ghana', phone: '233' },
  { code: 'GI', label: 'Gibraltar', phone: '350' },
  { code: 'GL', label: 'Greenland', phone: '299' },
  { code: 'GM', label: 'Gambia', phone: '220' },
  { code: 'GN', label: 'Guinea', phone: '224' },
  { code: 'GP', label: 'Guadeloupe', phone: '590' },
  { code: 'GQ', label: 'Equatorial Guinea', phone: '240' },
  { code: 'GR', label: 'Greece', phone: '30' },
  {
    code: 'GS',
    label: 'South Georgia and the South Sandwich Islands',
    phone: '500',
  },
  { code: 'GT', label: 'Guatemala', phone: '502' },
  { code: 'GU', label: 'Guam', phone: '1-671' },
  { code: 'GW', label: 'Guinea-Bissau', phone: '245' },
  { code: 'GY', label: 'Guyana', phone: '592' },
  { code: 'HK', label: 'Hong Kong', phone: '852' },
  {
    code: 'HM',
    label: 'Heard Island and McDonald Islands',
    phone: '672',
  },
  { code: 'HN', label: 'Honduras', phone: '504' },
  { code: 'HR', label: 'Croatia', phone: '385' },
  { code: 'HT', label: 'Haiti', phone: '509' },
  { code: 'HU', label: 'Hungary', phone: '36' },
  { code: 'ID', label: 'Indonesia', phone: '62' },
  { code: 'IE', label: 'Ireland', phone: '353' },
  { code: 'IL', label: 'Israel', phone: '972' },
  { code: 'IM', label: 'Isle of Man', phone: '44' },
  { code: 'IN', label: 'India', phone: '91' },
  {
    code: 'IO',
    label: 'British Indian Ocean Territory',
    phone: '246',
  },
  { code: 'IQ', label: 'Iraq', phone: '964' },
  {
    code: 'IR',
    label: 'Iran, Islamic Republic of',
    phone: '98',
  },
  { code: 'IS', label: 'Iceland', phone: '354' },
  { code: 'IT', label: 'Italy', phone: '39' },
  { code: 'JE', label: 'Jersey', phone: '44' },
  { code: 'JM', label: 'Jamaica', phone: '1-876' },
  { code: 'JO', label: 'Jordan', phone: '962' },
  {
    code: 'JP',
    label: 'Japan',
    phone: '81',
    suggested: true,
  },
  { code: 'KE', label: 'Kenya', phone: '254' },
  { code: 'KG', label: 'Kyrgyzstan', phone: '996' },
  { code: 'KH', label: 'Cambodia', phone: '855' },
  { code: 'KI', label: 'Kiribati', phone: '686' },
  { code: 'KM', label: 'Comoros', phone: '269' },
  {
    code: 'KN',
    label: 'Saint Kitts and Nevis',
    phone: '1-869',
  },
  {
    code: 'KP',
    label: "Korea, Democratic People's Republic of",
    phone: '850',
  },
  { code: 'KR', label: 'Korea, Republic of', phone: '82' },
  { code: 'KW', label: 'Kuwait', phone: '965' },
  { code: 'KY', label: 'Cayman Islands', phone: '1-345' },
  { code: 'KZ', label: 'Kazakhstan', phone: '7' },
  {
    code: 'LA',
    label: "Lao People's Democratic Republic",
    phone: '856',
  },
  { code: 'LB', label: 'Lebanon', phone: '961' },
  { code: 'LC', label: 'Saint Lucia', phone: '1-758' },
  { code: 'LI', label: 'Liechtenstein', phone: '423' },
  { code: 'LK', label: 'Sri Lanka', phone: '94' },
  { code: 'LR', label: 'Liberia', phone: '231' },
  { code: 'LS', label: 'Lesotho', phone: '266' },
  { code: 'LT', label: 'Lithuania', phone: '370' },
  { code: 'LU', label: 'Luxembourg', phone: '352' },
  { code: 'LV', label: 'Latvia', phone: '371' },
  { code: 'LY', label: 'Libya', phone: '218' },
  { code: 'MA', label: 'Morocco', phone: '212' },
  { code: 'MC', label: 'Monaco', phone: '377' },
  {
    code: 'MD',
    label: 'Moldova, Republic of',
    phone: '373',
  },
  { code: 'ME', label: 'Montenegro', phone: '382' },
  {
    code: 'MF',
    label: 'Saint Martin (French part)',
    phone: '590',
  },
  { code: 'MG', label: 'Madagascar', phone: '261' },
  { code: 'MH', label: 'Marshall Islands', phone: '692' },
  {
    code: 'MK',
    label: 'Macedonia, the Former Yugoslav Republic of',
    phone: '389',
  },
  { code: 'ML', label: 'Mali', phone: '223' },
  { code: 'MM', label: 'Myanmar', phone: '95' },
  { code: 'MN', label: 'Mongolia', phone: '976' },
  { code: 'MO', label: 'Macao', phone: '853' },
  {
    code: 'MP',
    label: 'Northern Mariana Islands',
    phone: '1-670',
  },
  { code: 'MQ', label: 'Martinique', phone: '596' },
  { code: 'MR', label: 'Mauritania', phone: '222' },
  { code: 'MS', label: 'Montserrat', phone: '1-664' },
  { code: 'MT', label: 'Malta', phone: '356' },
  { code: 'MU', label: 'Mauritius', phone: '230' },
  { code: 'MV', label: 'Maldives', phone: '960' },
  { code: 'MW', label: 'Malawi', phone: '265' },
  { code: 'MX', label: 'Mexico', phone: '52' },
  { code: 'MY', label: 'Malaysia', phone: '60' },
  { code: 'MZ', label: 'Mozambique', phone: '258' },
  { code: 'NA', label: 'Namibia', phone: '264' },
  { code: 'NC', label: 'New Caledonia', phone: '687' },
  { code: 'NE', label: 'Niger', phone: '227' },
  { code: 'NF', label: 'Norfolk Island', phone: '672' },
  { code: 'NG', label: 'Nigeria', phone: '234' },
  { code: 'NI', label: 'Nicaragua', phone: '505' },
  { code: 'NL', label: 'Netherlands', phone: '31' },
  { code: 'NO', label: 'Norway', phone: '47' },
  { code: 'NP', label: 'Nepal', phone: '977' },
  { code: 'NR', label: 'Nauru', phone: '674' },
  { code: 'NU', label: 'Niue', phone: '683' },
  { code: 'NZ', label: 'New Zealand', phone: '64' },
  { code: 'OM', label: 'Oman', phone: '968' },
  { code: 'PA', label: 'Panama', phone: '507' },
  { code: 'PE', label: 'Peru', phone: '51' },
  { code: 'PF', label: 'French Polynesia', phone: '689' },
  { code: 'PG', label: 'Papua New Guinea', phone: '675' },
  { code: 'PH', label: 'Philippines', phone: '63' },
  { code: 'PK', label: 'Pakistan', phone: '92' },
  { code: 'PL', label: 'Poland', phone: '48' },
  {
    code: 'PM',
    label: 'Saint Pierre and Miquelon',
    phone: '508',
  },
  { code: 'PN', label: 'Pitcairn', phone: '870' },
  { code: 'PR', label: 'Puerto Rico', phone: '1' },
  {
    code: 'PS',
    label: 'Palestine, State of',
    phone: '970',
  },
  { code: 'PT', label: 'Portugal', phone: '351' },
  { code: 'PW', label: 'Palau', phone: '680' },
  { code: 'PY', label: 'Paraguay', phone: '595' },
  { code: 'QA', label: 'Qatar', phone: '974' },
  { code: 'RE', label: 'Reunion', phone: '262' },
  { code: 'RO', label: 'Romania', phone: '40' },
  { code: 'RS', label: 'Serbia', phone: '381' },
  { code: 'RU', label: 'Russian Federation', phone: '7' },
  { code: 'RW', label: 'Rwanda', phone: '250' },
  { code: 'SA', label: 'Saudi Arabia', phone: '966' },
  { code: 'SB', label: 'Solomon Islands', phone: '677' },
  { code: 'SC', label: 'Seychelles', phone: '248' },
  { code: 'SD', label: 'Sudan', phone: '249' },
  { code: 'SE', label: 'Sweden', phone: '46' },
  { code: 'SG', label: 'Singapore', phone: '65' },
  { code: 'SH', label: 'Saint Helena', phone: '290' },
  { code: 'SI', label: 'Slovenia', phone: '386' },
  {
    code: 'SJ',
    label: 'Svalbard and Jan Mayen',
    phone: '47',
  },
  { code: 'SK', label: 'Slovakia', phone: '421' },
  { code: 'SL', label: 'Sierra Leone', phone: '232' },
  { code: 'SM', label: 'San Marino', phone: '378' },
  { code: 'SN', label: 'Senegal', phone: '221' },
  { code: 'SO', label: 'Somalia', phone: '252' },
  { code: 'SR', label: 'Suriname', phone: '597' },
  { code: 'SS', label: 'South Sudan', phone: '211' },
  {
    code: 'ST',
    label: 'Sao Tome and Principe',
    phone: '239',
  },
  { code: 'SV', label: 'El Salvador', phone: '503' },
  {
    code: 'SX',
    label: 'Sint Maarten (Dutch part)',
    phone: '1-721',
  },
  {
    code: 'SY',
    label: 'Syrian Arab Republic',
    phone: '963',
  },
  { code: 'SZ', label: 'Swaziland', phone: '268' },
  {
    code: 'TC',
    label: 'Turks and Caicos Islands',
    phone: '1-649',
  },
  { code: 'TD', label: 'Chad', phone: '235' },
  {
    code: 'TF',
    label: 'French Southern Territories',
    phone: '262',
  },
  { code: 'TG', label: 'Togo', phone: '228' },
  { code: 'TH', label: 'Thailand', phone: '66' },
  { code: 'TJ', label: 'Tajikistan', phone: '992' },
  { code: 'TK', label: 'Tokelau', phone: '690' },
  { code: 'TL', label: 'Timor-Leste', phone: '670' },
  { code: 'TM', label: 'Turkmenistan', phone: '993' },
  { code: 'TN', label: 'Tunisia', phone: '216' },
  { code: 'TO', label: 'Tonga', phone: '676' },
  { code: 'TR', label: 'Turkey', phone: '90' },
  {
    code: 'TT',
    label: 'Trinidad and Tobago',
    phone: '1-868',
  },
  { code: 'TV', label: 'Tuvalu', phone: '688' },
  {
    code: 'TW',
    label: 'Taiwan',
    phone: '886',
  },
  {
    code: 'TZ',
    label: 'United Republic of Tanzania',
    phone: '255',
  },
  { code: 'UA', label: 'Ukraine', phone: '380' },
  { code: 'UG', label: 'Uganda', phone: '256' },
  {
    code: 'US',
    label: 'United States',
    phone: '1',
    suggested: true,
  },
  { code: 'UY', label: 'Uruguay', phone: '598' },
  { code: 'UZ', label: 'Uzbekistan', phone: '998' },
  {
    code: 'VA',
    label: 'Holy See (Vatican City State)',
    phone: '379',
  },
  {
    code: 'VC',
    label: 'Saint Vincent and the Grenadines',
    phone: '1-784',
  },
  { code: 'VE', label: 'Venezuela', phone: '58' },
  {
    code: 'VG',
    label: 'British Virgin Islands',
    phone: '1-284',
  },
  {
    code: 'VI',
    label: 'US Virgin Islands',
    phone: '1-340',
  },
  { code: 'VN', label: 'Vietnam', phone: '84' },
  { code: 'VU', label: 'Vanuatu', phone: '678' },
  { code: 'WF', label: 'Wallis and Futuna', phone: '681' },
  { code: 'WS', label: 'Samoa', phone: '685' },
  { code: 'XK', label: 'Kosovo', phone: '383' },
  { code: 'YE', label: 'Yemen', phone: '967' },
  { code: 'YT', label: 'Mayotte', phone: '262' },
  { code: 'ZA', label: 'South Africa', phone: '27' },
  { code: 'ZM', label: 'Zambia', phone: '260' },
  { code: 'ZW', label: 'Zimbabwe', phone: '263' },
];