import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card, Stack, Typography } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import { Bar, Line } from 'react-chartjs-2';
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
            ticks: {color: "#512da8"},
            border:{
                color:'#512da8',
                width:2,
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
            text: '',
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
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
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




export default function BasicGrid() {




    const defaultProps = {
        options: timePeriod,
        getOptionLabel: (option) => option.name,
    };
    const flatProps = {
        options: timePeriod.map((option) => option.name),
    };
    const [value, setValue] = React.useState(0);


    const theme = useTheme();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Box sx={{ flexGrow: 1, bgcolor: '#d1c4e9', mt: 2, height: '100vh' }}>
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
                    <Box sx={{ borderRadius: 10, bgcolor: '#b39ddb', overflow: 'hidden', padding: 2 }}>
                        <Typography>Company growth graph</Typography>
                        <Line
                            options={{
                                scales: {
                                    x: {
                                       border:{
                                        color:'#512da8',
                                        width:5,
                                        
                                       },
                                        grid: {
                                            display: false,
                                        },
                                        display: true,
                                        ticks: {color: "#512da8"},
                                        grace:'50%'
                                    },
                                    y: {
                                        display: false,
                                        
                                    },

                                },
                                responsive: true,
                                plugins: {
                                    filler: {
                                        propagate: true
                                    },
                                    legend: {
                                        display: false,
                                    },
                                    title: {
                                        display: true,


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
                                }
                            }}
                            data={{
                                labels: [2020, 2021, 2022, 2023, 2024],

                                datasets: [
                                    {
                                        label: 'Dataset 1',

                                        data: [100, 133, 255, 200, 272],
                                        borderWidth: 2,
                                        borderColor: '#673ab7',
                                        backgroundColor: '#d1c4e9',
                                        fill: {
                                            target: 'origin',
                                            above: '#9575cd',   // Area will be red above the origin
                                            below: '#d1c4e9'    // And blue below the origin
                                        }
                                    },

                                ]
                            }}

                        />
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <Box sx={{ bgcolor: '#b39ddb', borderRadius: 5, width: '64vw', height: '100%', overflow: 'hidden' }}>
                        <AppBar position="static">
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                sx={{ bgcolor: '#9575cd' }}
                                textColor="inherit"
                                variant="fullWidth"
                                aria-label="full width tabs example"
                            >
                                <Tab label="Revenue" {...a11yProps(0)} />
                                <Tab label="Profit" {...a11yProps(1)} />
                                <Tab label="Total Assets" {...a11yProps(2)} />
                            </Tabs>
                        </AppBar>

                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <Bar options={options} data={data} />
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <Bar options={options} data={data} />
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            <Bar options={options} data={data} />
                        </TabPanel>

                    </Box>

                </Grid>
            </Grid>
        </Box>
    );
}