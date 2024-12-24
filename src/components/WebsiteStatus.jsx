import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card, Stack, Typography } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    scales,
    PointElement,
    LineElement,
    Filler
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels, PointElement, LineElement, Filler,
);

const options = {

    scales: {
        x: {
            display: true,
            ticks: { color: "#512da8" },
            border: {
                color: '#512da8',
                width: 2,
            },
        },
        y: {
            display: false

        }


    },

    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: 'Revenue',
            color:'#512da8',
            font: { size: 20,weight:'bold'}
        },
        datalabels: {
            // Position of the labels 
            // (start, end, center, etc.)
            anchor: 'end',
            // Alignment of the labels 
            // (start, end, center, etc.)
            align: 'end',
            // Color of the labels
            color: '#673ab7',
            font: {
                weight: 'bold',
            },
            formatter: function (value, context) {
                // Display the actual data value
                return value;
            }
        }
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [300, 200, 500, 100, 450, 400, 250],
            backgroundColor: '#7e57c2',

        },

    ],
};
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 12,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorSecondary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#673ab7' : '#308fe8',
    },
}));

const timePeriod = [
    { name: "Today", value: "day" },
    { name: "This Week", value: "week" },
    { name: "This Month", value: "month" },
    { name: "This Year", value: "year" },
];

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{pt: 2}}>
                    {children}
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function LabTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const defaultProps = {
        options: timePeriod,
        getOptionLabel: (option) => option.name,
    };
    const flatProps = {
        options: timePeriod.map((option) => option.name),
    };


    const theme = useTheme();



    const handleChangeIndex = (index) => {
        setValue(index);
    };
    return (
        <Box sx={{ width: '100%', typography: 'body1',padding:0 }}>
            <TabContext value={value} >
                <Box sx={{ borderBottom: 2, borderColor: 'divider', bgcolor: '#b39ddb' ,margin:0,padding:0}}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Bus Conductor View" value={0} style={{ color: '#5e35b1', fontWeight: 'bold' }} />
                        <Tab label="Redbus" value={1} style={{ color: '#5e35b1', fontWeight: 'bold' }} />
                        <Tab label="Other Ticket Booking App" value={2} style={{ color: '#5e35b1', fontWeight: 'bold' }} />
                    </TabList>
                </Box>
              
               <TabPanel value={value} index={0} sx={{ width: '100%', typography: 'body1'}}>
                    <Box sx={{ flexGrow: 1, bgcolor: '#d1c4e9', height: '100%',width:'100%', margin: 0}}>
                    <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Stack direction='row' sx={{ padding: 3 }} >
                                    <Grid container spacing={4}>
                                        <Grid item xs={4} >
                                            <Card elevation={10} sx={{
                                                border: 1,
                                                borderRadius: 5,
                                                borderColor: '#b39ddb',
                                                backgroundColor: '#9575cd',
                                                height: '17vh'
                                            }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6}>
                                                        <Typography sx={{ fontSize: 35, fontWeight: 'bold', marginLeft: 3, marginTop: 1, fontFamily: 'sans-serif', letterSpacing: 0 }}>
                                                            714k
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Autocomplete
                                                            {...defaultProps}
                                                            id="open-on-focus"
                                                            openOnFocus
                                                            sx={{ width: 150 }}
                                                            renderInput={(params) => (
                                                                <TextField {...params} label="TimePeriod" variant="standard" />
                                                            )}
                                                        />
                                                    </Grid>
                                                </Grid>

                                                <Typography sx={{ fontSize: 15, fontWeight: 750, marginLeft: 3 }}>
                                                    Total Booking
                                                </Typography>
                                                <Typography sx={{ alignItems: 'flex-end', paddingLeft: 2, paddingRight: 2 }}>
                                                    <BorderLinearProgress variant="determinate" value={50} />
                                                </Typography>

                                            </Card>
                                        </Grid>
                                        <Grid item xs={4} >
                                            <Card elevation={10} sx={{
                                                border: 1,
                                                borderRadius: 5,
                                                borderColor: '#b39ddb',
                                                backgroundColor: '#9575cd',
                                                height: '17vh'
                                            }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6}>
                                                        <Typography sx={{ fontSize: 35, fontWeight: 'bold', marginLeft: 3, marginTop: 1, fontFamily: 'sans-serif', letterSpacing: 0 }}>
                                                            486k
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Autocomplete
                                                            {...defaultProps}
                                                            id="open-on-focus"
                                                            openOnFocus
                                                            sx={{ width: 150 }}
                                                            renderInput={(params) => (
                                                                <TextField {...params} label="TimePeriod" variant="standard" />
                                                            )}
                                                        />
                                                    </Grid>
                                                </Grid>

                                                <Typography sx={{ fontSize: 15, fontWeight: 750, marginLeft: 3 }}>
                                                    Sold
                                                </Typography>
                                                <Typography sx={{ alignItems: 'flex-end', paddingLeft: 2, paddingRight: 2 }}>
                                                    <BorderLinearProgress variant="determinate" value={50} />
                                                </Typography>

                                            </Card>
                                        </Grid>
                                        <Grid item xs={4} >
                                            <Card elevation={10} sx={{
                                                border: 1,
                                                borderRadius: 5,
                                                borderColor: '#b39ddb',
                                                backgroundColor: '#9575cd',
                                                height: '17vh'
                                            }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6}>
                                                        <Typography sx={{ fontSize: 35, fontWeight: 'bold', marginLeft: 3, marginTop: 1, fontFamily: 'sans-serif', letterSpacing: 0 }}>
                                                            314k
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Autocomplete
                                                            {...defaultProps}
                                                            id="open-on-focus"
                                                            openOnFocus
                                                            sx={{ width: 150 }}
                                                            renderInput={(params) => (
                                                                <TextField {...params} label="TimePeriod" variant="standard" />
                                                            )}
                                                        />
                                                    </Grid>
                                                </Grid>

                                                <Typography sx={{ fontSize: 15, fontWeight: 750, marginLeft: 3 }}>
                                                    Canceled
                                                </Typography>
                                                <Typography sx={{ alignItems: 'flex-end', paddingLeft: 2, paddingRight: 2 }}>
                                                    <BorderLinearProgress variant="determinate" value={50} />
                                                </Typography>

                                            </Card>
                                        </Grid>



                                    </Grid>

                                </Stack>
                            </Grid>

                            <Grid item xs={4}>
                                <Stack spacing={2} sx={{pl:2}}>
                                    <Card elevation={10} sx={{
                                                border: 1,
                                                borderRadius: 5,
                                                borderColor: '#b39ddb',
                                                backgroundColor: '#9575cd',
                                                height: '15vh',
                                                width:'30vw',
                                                ml:2,
                                            }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6}>
                                                        <Typography sx={{ fontSize: 30, fontWeight: 'bold', marginLeft: 3, marginTop: 1, fontFamily: 'sans-serif', letterSpacing: 0 }}>
                                                            14k
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Autocomplete
                                                            {...defaultProps}
                                                            id="open-on-focus"
                                                            openOnFocus
                                                            sx={{ width: 150 }}
                                                            renderInput={(params) => (
                                                                <TextField {...params} label="TimePeriod" variant="standard" />
                                                            )}
                                                        />
                                                    </Grid>
                                                </Grid>

                                                <Typography sx={{ fontSize: 15, fontWeight: 750, marginLeft: 3 }}>
                                                    Sleeper Booking
                                                </Typography>
                                                <Typography sx={{ alignItems: 'flex-end', paddingLeft: 2, paddingRight: 2 }}>
                                                    <BorderLinearProgress variant="determinate" value={50} />
                                                </Typography>

                                            </Card>
                                            <Card elevation={10} sx={{
                                                border: 1,
                                                borderRadius: 5,
                                                borderColor: '#b39ddb',
                                                backgroundColor: '#9575cd',
                                                height: '15vh',
                                                width:'30vw',
                                                ml:2,
                                            }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6}>
                                                        <Typography sx={{ fontSize: 30, fontWeight: 'bold', marginLeft: 3, marginTop: 1, fontFamily: 'sans-serif', letterSpacing: 0 }}>
                                                            14k
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Autocomplete
                                                            {...defaultProps}
                                                            id="open-on-focus"
                                                            openOnFocus
                                                            sx={{ width: 150 }}
                                                            renderInput={(params) => (
                                                                <TextField {...params} label="TimePeriod" variant="standard" />
                                                            )}
                                                        />
                                                    </Grid>
                                                </Grid>

                                                <Typography sx={{ fontSize: 15, fontWeight: 750, marginLeft: 3 }}>
                                                    Seat Booking
                                                </Typography>
                                                <Typography sx={{ alignItems: 'flex-end', paddingLeft: 2, paddingRight: 2 }}>
                                                    <BorderLinearProgress variant="determinate" value={50} />
                                                </Typography>

                                            </Card>
                                            <Card elevation={10} sx={{
                                                border: 1,
                                                borderRadius: 5,
                                                borderColor: '#b39ddb',
                                                backgroundColor: '#9575cd',
                                                height: '15vh',
                                                width:'30vw',
                                                ml:2,
                                            }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6}>
                                                        <Typography sx={{ fontSize: 30, fontWeight: 'bold', marginLeft: 3, marginTop: 1, fontFamily: 'sans-serif', letterSpacing: 0 }}>
                                                            10k
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Autocomplete
                                                            {...defaultProps}
                                                            id="open-on-focus"
                                                            openOnFocus
                                                            sx={{ width: 150 }}
                                                            renderInput={(params) => (
                                                                <TextField {...params} label="TimePeriod" variant="standard" />
                                                            )}
                                                        />
                                                    </Grid>
                                                </Grid>

                                                <Typography sx={{ fontSize: 15, fontWeight: 750, marginLeft: 3 }}>
                                                Commodity Booking
                                                </Typography>
                                                <Typography sx={{ alignItems: 'flex-end', paddingLeft: 2, paddingRight: 2 }}>
                                                    <BorderLinearProgress variant="determinate" value={50} />
                                                </Typography>

                                            </Card>
                                </Stack>
                            
                            </Grid>
                            <Grid item xs={8}>
                                <Box sx={{ bgcolor: '#b39ddb', borderRadius: 5, width: '64vw', height: '100%', overflow: 'hidden' }}>
                                    
                                    <Bar options={options} data={data} />

                                </Box>

                            </Grid>
                        </Grid>
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={1}>
                <Box sx={{ flexGrow: 1, bgcolor: '#d1c4e9', height: '100%',width:'100%', margin: 0}}>
                    <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Stack direction='row' sx={{ padding: 3 }} >
                                    <Grid container spacing={4}>
                                        <Grid item xs={4} >
                                            <Card elevation={10} sx={{
                                                border: 1,
                                                borderRadius: 5,
                                                borderColor: '#b39ddb',
                                                backgroundColor: '#9575cd',
                                                height: '17vh'
                                            }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6}>
                                                        <Typography sx={{ fontSize: 40, fontWeight: 'bold', marginLeft: 3, marginTop: 1, fontFamily: 'sans-serif', letterSpacing: 0 }}>
                                                            714k
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Autocomplete
                                                            {...defaultProps}
                                                            id="open-on-focus"
                                                            openOnFocus
                                                            sx={{ width: 150 }}
                                                            renderInput={(params) => (
                                                                <TextField {...params} label="TimePeriod" variant="standard" />
                                                            )}
                                                        />
                                                    </Grid>
                                                </Grid>

                                                <Typography sx={{ fontSize: 15, fontWeight: 750, marginLeft: 3 }}>
                                                    Total Booking
                                                </Typography>
                                                <Typography sx={{ alignItems: 'flex-end', paddingLeft: 2, paddingRight: 2 }}>
                                                    <BorderLinearProgress variant="determinate" value={50} />
                                                </Typography>

                                            </Card>
                                        </Grid>
                                        <Grid item xs={4} >
                                            <Card elevation={10} sx={{
                                                border: 1,
                                                borderRadius: 5,
                                                borderColor: '#b39ddb',
                                                backgroundColor: '#9575cd',
                                                height: '17vh'
                                            }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6}>
                                                        <Typography sx={{ fontSize: 40, fontWeight: 'bold', marginLeft: 3, marginTop: 1, fontFamily: 'sans-serif', letterSpacing: 0 }}>
                                                            486k
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Autocomplete
                                                            {...defaultProps}
                                                            id="open-on-focus"
                                                            openOnFocus
                                                            sx={{ width: 150 }}
                                                            renderInput={(params) => (
                                                                <TextField {...params} label="TimePeriod" variant="standard" />
                                                            )}
                                                        />
                                                    </Grid>
                                                </Grid>

                                                <Typography sx={{ fontSize: 15, fontWeight: 750, marginLeft: 3 }}>
                                                    Sold
                                                </Typography>
                                                <Typography sx={{ alignItems: 'flex-end', paddingLeft: 2, paddingRight: 2 }}>
                                                    <BorderLinearProgress variant="determinate" value={50} />
                                                </Typography>

                                            </Card>
                                        </Grid>
                                        <Grid item xs={4} >
                                            <Card elevation={10} sx={{
                                                border: 1,
                                                borderRadius: 5,
                                                borderColor: '#b39ddb',
                                                backgroundColor: '#9575cd',
                                                height: '17vh'
                                            }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6}>
                                                        <Typography sx={{ fontSize: 40, fontWeight: 'bold', marginLeft: 3, marginTop: 1, fontFamily: 'sans-serif', letterSpacing: 0 }}>
                                                            314k
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Autocomplete
                                                            {...defaultProps}
                                                            id="open-on-focus"
                                                            openOnFocus
                                                            sx={{ width: 150 }}
                                                            renderInput={(params) => (
                                                                <TextField {...params} label="TimePeriod" variant="standard" />
                                                            )}
                                                        />
                                                    </Grid>
                                                </Grid>

                                                <Typography sx={{ fontSize: 15, fontWeight: 750, marginLeft: 3 }}>
                                                    Canceled
                                                </Typography>
                                                <Typography sx={{ alignItems: 'flex-end', paddingLeft: 2, paddingRight: 2 }}>
                                                    <BorderLinearProgress variant="determinate" value={50} />
                                                </Typography>

                                            </Card>
                                        </Grid>



                                    </Grid>

                                </Stack>
                            </Grid>

                            <Grid item xs={4}>
                                <Stack spacing={2} sx={{pl:2}}>
                                    <Card elevation={10} sx={{
                                                border: 1,
                                                borderRadius: 5,
                                                borderColor: '#b39ddb',
                                                backgroundColor: '#9575cd',
                                                height: '15vh',
                                                width:'30vw',
                                                ml:2,
                                            }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6}>
                                                        <Typography sx={{ fontSize: 40, fontWeight: 'bold', marginLeft: 3, marginTop: 1, fontFamily: 'sans-serif', letterSpacing: 0 }}>
                                                            14k
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Autocomplete
                                                            {...defaultProps}
                                                            id="open-on-focus"
                                                            openOnFocus
                                                            sx={{ width: 150 }}
                                                            renderInput={(params) => (
                                                                <TextField {...params} label="TimePeriod" variant="standard" />
                                                            )}
                                                        />
                                                    </Grid>
                                                </Grid>

                                                <Typography sx={{ fontSize: 15, fontWeight: 750, marginLeft: 3 }}>
                                                    Sleeper Booking
                                                </Typography>
                                                <Typography sx={{ alignItems: 'flex-end', paddingLeft: 2, paddingRight: 2 }}>
                                                    <BorderLinearProgress variant="determinate" value={50} />
                                                </Typography>

                                            </Card>
                                            <Card elevation={10} sx={{
                                                border: 1,
                                                borderRadius: 5,
                                                borderColor: '#b39ddb',
                                                backgroundColor: '#9575cd',
                                                height: '15vh',
                                                width:'30vw',
                                                ml:2,
                                            }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6}>
                                                        <Typography sx={{ fontSize: 40, fontWeight: 'bold', marginLeft: 3, marginTop: 1, fontFamily: 'sans-serif', letterSpacing: 0 }}>
                                                            14k
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Autocomplete
                                                            {...defaultProps}
                                                            id="open-on-focus"
                                                            openOnFocus
                                                            sx={{ width: 150 }}
                                                            renderInput={(params) => (
                                                                <TextField {...params} label="TimePeriod" variant="standard" />
                                                            )}
                                                        />
                                                    </Grid>
                                                </Grid>

                                                <Typography sx={{ fontSize: 15, fontWeight: 750, marginLeft: 3 }}>
                                                    Seat Booking
                                                </Typography>
                                                <Typography sx={{ alignItems: 'flex-end', paddingLeft: 2, paddingRight: 2 }}>
                                                    <BorderLinearProgress variant="determinate" value={50} />
                                                </Typography>

                                            </Card>
                                            <Card elevation={10} sx={{
                                                border: 1,
                                                borderRadius: 5,
                                                borderColor: '#b39ddb',
                                                backgroundColor: '#9575cd',
                                                height: '15vh',
                                                width:'30vw',
                                                ml:2,
                                            }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6}>
                                                        <Typography sx={{ fontSize: 40, fontWeight: 'bold', marginLeft: 3, marginTop: 1, fontFamily: 'sans-serif', letterSpacing: 0 }}>
                                                            10k
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Autocomplete
                                                            {...defaultProps}
                                                            id="open-on-focus"
                                                            openOnFocus
                                                            sx={{ width: 150 }}
                                                            renderInput={(params) => (
                                                                <TextField {...params} label="TimePeriod" variant="standard" />
                                                            )}
                                                        />
                                                    </Grid>
                                                </Grid>

                                                <Typography sx={{ fontSize: 15, fontWeight: 750, marginLeft: 3 }}>
                                                Commodity Booking
                                                </Typography>
                                                <Typography sx={{ alignItems: 'flex-end', paddingLeft: 2, paddingRight: 2 }}>
                                                    <BorderLinearProgress variant="determinate" value={50} />
                                                </Typography>

                                            </Card>
                                </Stack>
                            
                            </Grid>
                            <Grid item xs={8}>
                                <Box sx={{ bgcolor: '#b39ddb', borderRadius: 5, width: '64vw', height: '100%', overflow: 'hidden' }}>
                                    
                                    <Bar options={options} data={data} />

                                </Box>

                            </Grid>
                        </Grid>
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={2}>
                <Box sx={{ flexGrow: 1, bgcolor: '#d1c4e9', height: '100%',width:'100%', margin: 0}}>
                    <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Stack direction='row' sx={{ padding: 3 }} >
                                    <Grid container spacing={4}>
                                        <Grid item xs={4} >
                                            <Card elevation={10} sx={{
                                                border: 1,
                                                borderRadius: 5,
                                                borderColor: '#b39ddb',
                                                backgroundColor: '#9575cd',
                                                height: '17vh'
                                            }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6}>
                                                        <Typography sx={{ fontSize: 40, fontWeight: 'bold', marginLeft: 3, marginTop: 1, fontFamily: 'sans-serif', letterSpacing: 0 }}>
                                                            714k
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Autocomplete
                                                            {...defaultProps}
                                                            id="open-on-focus"
                                                            openOnFocus
                                                            sx={{ width: 150 }}
                                                            renderInput={(params) => (
                                                                <TextField {...params} label="TimePeriod" variant="standard" />
                                                            )}
                                                        />
                                                    </Grid>
                                                </Grid>

                                                <Typography sx={{ fontSize: 15, fontWeight: 750, marginLeft: 3 }}>
                                                    Total Booking
                                                </Typography>
                                                <Typography sx={{ alignItems: 'flex-end', paddingLeft: 2, paddingRight: 2 }}>
                                                    <BorderLinearProgress variant="determinate" value={50} />
                                                </Typography>

                                            </Card>
                                        </Grid>
                                        <Grid item xs={4} >
                                            <Card elevation={10} sx={{
                                                border: 1,
                                                borderRadius: 5,
                                                borderColor: '#b39ddb',
                                                backgroundColor: '#9575cd',
                                                height: '17vh'
                                            }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6}>
                                                        <Typography sx={{ fontSize: 40, fontWeight: 'bold', marginLeft: 3, marginTop: 1, fontFamily: 'sans-serif', letterSpacing: 0 }}>
                                                            486k
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Autocomplete
                                                            {...defaultProps}
                                                            id="open-on-focus"
                                                            openOnFocus
                                                            sx={{ width: 150 }}
                                                            renderInput={(params) => (
                                                                <TextField {...params} label="TimePeriod" variant="standard" />
                                                            )}
                                                        />
                                                    </Grid>
                                                </Grid>

                                                <Typography sx={{ fontSize: 15, fontWeight: 750, marginLeft: 3 }}>
                                                    Sold
                                                </Typography>
                                                <Typography sx={{ alignItems: 'flex-end', paddingLeft: 2, paddingRight: 2 }}>
                                                    <BorderLinearProgress variant="determinate" value={50} />
                                                </Typography>

                                            </Card>
                                        </Grid>
                                        <Grid item xs={4} >
                                            <Card elevation={10} sx={{
                                                border: 1,
                                                borderRadius: 5,
                                                borderColor: '#b39ddb',
                                                backgroundColor: '#9575cd',
                                                height: '17vh'
                                            }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6}>
                                                        <Typography sx={{ fontSize: 40, fontWeight: 'bold', marginLeft: 3, marginTop: 1, fontFamily: 'sans-serif', letterSpacing: 0 }}>
                                                            314k
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Autocomplete
                                                            {...defaultProps}
                                                            id="open-on-focus"
                                                            openOnFocus
                                                            sx={{ width: 150 }}
                                                            renderInput={(params) => (
                                                                <TextField {...params} label="TimePeriod" variant="standard" />
                                                            )}
                                                        />
                                                    </Grid>
                                                </Grid>

                                                <Typography sx={{ fontSize: 15, fontWeight: 750, marginLeft: 3 }}>
                                                    Canceled
                                                </Typography>
                                                <Typography sx={{ alignItems: 'flex-end', paddingLeft: 2, paddingRight: 2 }}>
                                                    <BorderLinearProgress variant="determinate" value={50} />
                                                </Typography>

                                            </Card>
                                        </Grid>



                                    </Grid>

                                </Stack>
                            </Grid>

                            <Grid item xs={4}>
                                <Stack spacing={2} sx={{pl:2}}>
                                    <Card elevation={10} sx={{
                                                border: 1,
                                                borderRadius: 5,
                                                borderColor: '#b39ddb',
                                                backgroundColor: '#9575cd',
                                                height: '15vh',
                                                width:'30vw',
                                                ml:2,
                                            }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6}>
                                                        <Typography sx={{ fontSize: 40, fontWeight: 'bold', marginLeft: 3, marginTop: 1, fontFamily: 'sans-serif', letterSpacing: 0 }}>
                                                            14k
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Autocomplete
                                                            {...defaultProps}
                                                            id="open-on-focus"
                                                            openOnFocus
                                                            sx={{ width: 150 }}
                                                            renderInput={(params) => (
                                                                <TextField {...params} label="TimePeriod" variant="standard" />
                                                            )}
                                                        />
                                                    </Grid>
                                                </Grid>

                                                <Typography sx={{ fontSize: 15, fontWeight: 750, marginLeft: 3 }}>
                                                    Sleeper Booking
                                                </Typography>
                                                <Typography sx={{ alignItems: 'flex-end', paddingLeft: 2, paddingRight: 2 }}>
                                                    <BorderLinearProgress variant="determinate" value={50} />
                                                </Typography>

                                            </Card>
                                            <Card elevation={10} sx={{
                                                border: 1,
                                                borderRadius: 5,
                                                borderColor: '#b39ddb',
                                                backgroundColor: '#9575cd',
                                                height: '15vh',
                                                width:'30vw',
                                                ml:2,
                                            }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6}>
                                                        <Typography sx={{ fontSize: 40, fontWeight: 'bold', marginLeft: 3, marginTop: 1, fontFamily: 'sans-serif', letterSpacing: 0 }}>
                                                            14k
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Autocomplete
                                                            {...defaultProps}
                                                            id="open-on-focus"
                                                            openOnFocus
                                                            sx={{ width: 150 }}
                                                            renderInput={(params) => (
                                                                <TextField {...params} label="TimePeriod" variant="standard" />
                                                            )}
                                                        />
                                                    </Grid>
                                                </Grid>

                                                <Typography sx={{ fontSize: 15, fontWeight: 750, marginLeft: 3 }}>
                                                    Seat Booking
                                                </Typography>
                                                <Typography sx={{ alignItems: 'flex-end', paddingLeft: 2, paddingRight: 2 }}>
                                                    <BorderLinearProgress variant="determinate" value={50} />
                                                </Typography>

                                            </Card>
                                            <Card elevation={10} sx={{
                                                border: 1,
                                                borderRadius: 5,
                                                borderColor: '#b39ddb',
                                                backgroundColor: '#9575cd',
                                                height: '15vh',
                                                width:'30vw',
                                                ml:2,
                                            }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6}>
                                                        <Typography sx={{ fontSize: 40, fontWeight: 'bold', marginLeft: 3, marginTop: 1, fontFamily: 'sans-serif', letterSpacing: 0 }}>
                                                            10k
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Autocomplete
                                                            {...defaultProps}
                                                            id="open-on-focus"
                                                            openOnFocus
                                                            sx={{ width: 150 }}
                                                            renderInput={(params) => (
                                                                <TextField {...params} label="TimePeriod" variant="standard" />
                                                            )}
                                                        />
                                                    </Grid>
                                                </Grid>

                                                <Typography sx={{ fontSize: 15, fontWeight: 750, marginLeft: 3 }}>
                                                Commodity Booking
                                                </Typography>
                                                <Typography sx={{ alignItems: 'flex-end', paddingLeft: 2, paddingRight: 2 }}>
                                                    <BorderLinearProgress variant="determinate" value={50} />
                                                </Typography>

                                            </Card>
                                </Stack>
                            
                            </Grid>
                            <Grid item xs={8}>
                                <Box sx={{ bgcolor: '#b39ddb', borderRadius: 5, width: '64vw', height: '100%', overflow: 'hidden',boxShadow:10 }}>
                                    
                                    <Bar options={options} data={data} />

                                </Box>

                            </Grid>
                        </Grid>
                    </Box>
                </TabPanel>
              
            </TabContext>
        </Box>
    );
}   