import * as React from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Grid, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import {  styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import {  alpha } from '@mui/material/styles';




const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#b39ddb',
    '&:hover': {
        backgroundColor: '#9575cd',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

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
        border:'0',
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
const PassengersData = () => {
    const rows = [
        {

            customer: "John Smith",
            date: "1 March",
            time: '2:30',
            amount: 785,
            method: "Cash Payment",
            status: "Approved",
        },
        {
            customer: "Harold Carol",
            date: "2 March",
            time: '2:30',
            amount: 2000,
            method: "Online",
            status: "Cancelled",
        },
        {
            customer: "Michael Doe",
            date: "3 March",
            time: '2:30',
            amount: 900,
            method: "Online Payment",
            status: "Pending",
        },
        {
            customer: "Harold Carol",
            date: "4 March",
            time: '2:30',
            amount: 2000,
            method: "Online",
            status: "Cancelled",
        },
        {

            customer: "John Smith",
            date: "5 March",
            time: '2:30',
            amount: 35,
            method: "Cash Payment",
            status: "Pending",
        },
        {
            customer: "Jane Smith",
            date: "6 March",
            time: '2:30',
            amount: 920,
            method: "Online",
            status: "Approved",
        },
        {
            customer: "Harold Carol",
            date: "7 March",
            time: '2:30',
            amount: 2000,
            method: "Online",
            status: "Pending",
        },
        {
            customer: "Harold Carol",
            date: "8 March",
            time: '2:30',
            amount: 2000,
            method: "Online",
            status: "Cancelled",
        },
        {
            customer: "Harold Carol",
            date: "9 March",
            time: '2:30',
            amount: 2000,
            method: "Online",
            status: "Cancelled",
        },
        {
            customer: "Harold Carol",
            date: "10 March",
            time: '2:30',
            amount: 2000,
            method: "Online",
            status: "Cancelled",
        },
        {
            customer: "Harold Carol",
            date: "11 March",
            time: '2:30',
            amount: 2000,
            method: "Online",
            status: "Cancelled",
        },
        {
            customer: "Harold Carol",
            date: "12 March",
            time: '2:30',
            amount: 2000,
            method: "Online",
            status: "Cancelled",
        },
        {
            customer: "Harold Carol",
            date: "13 March",
            time: '2:30',
            amount: 2000,
            method: "Online",
            status: "Cancelled",
        },
        {
            customer: "Harold Carol",
            date: "14 March",
            time: '2:30',
            amount: 2000,
            method: "Online",
            status: "Cancelled",
        },
    ];

    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    


    
    return (
        <Grid container spacing={2} sx={{ backgroundColor: '#d1c4e9', marginTop: 0 }}>
            <Grid xs={4} >
                <Stack spacing={2} sx={{ padding: 5, backgroundColor: '#d1c4e9' }}>
                    <Box sx={{ background: '#b39ddb', borderRadius: '10px', marginBottom: '20px', boxShadow: '10', color: '#7e57c2' }}>

                        <ListItemButton  >
                            <ListItemIcon></ListItemIcon>
                            <ListItemText primary={"Indore --> Neemuch"} />
                        </ListItemButton>

                    </Box>
                    <Box sx={{ background: '#b39ddb', borderRadius: '10px', marginBottom: '20px', boxShadow: '10', color: '#7e57c2' }}>

                        <ListItemButton  >
                            <ListItemIcon></ListItemIcon>
                            <ListItemText primary={"Indore --> Guna"} />
                        </ListItemButton>

                    </Box>
                    <Box sx={{ background: '#b39ddb', borderRadius: '10px', marginBottom: '20px', boxShadow: '10', color: '#7e57c2' }}>

                        <ListItemButton  >
                            <ListItemIcon></ListItemIcon>
                            <ListItemText primary={"Indore -->Bhopal"} />
                        </ListItemButton>

                    </Box>
                </Stack>
            </Grid>
            <Grid xs={8}>
                <item>
                    <div>
                        <Toolbar sx={{ backgroundColor: '#d1c4e9', padding: 3 }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    boxShadow: 10,
                                    borderRadius: 5,
                                    background: '#b39ddb'
                                }}>
                                    <DateTimePicker
                                        sx={{ border: 2, borderRadius: 5, borderColor: '#512da8' }}
                                        // label="Date&Time picker"
                                        

                                        slotProps={{"textField": {sx:{ border: 2, outline: 'none', borderRadius: 5, borderColor: '#512da8' }}}}
                                        value={value}
                                        onChange={handleChange}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </Box>
                            </LocalizationProvider>
                            <Box sx={{marginLeft:25 }}>
                            <Search >
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search></Box>
                        </Toolbar>

                        <TableContainer component={Paper} className="table" sx={{ backgroundColor: '#d1c4e9', borderRadius: 0 }}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: 10,
                                boxShadow: 15,
                                width: 700,
                                height: 500,
                                border: 3,
                                borderColor: '#512da8',
                                margin: 5,
                                background: '#b39ddb',
                                overflow: 'hidden',
                                overflowY: "scroll",
                                scrollbarColor: 'transperent',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                alignBox: 'center',
                                scrollbarWidth:'none'
                            }}>
                                <Table stickyHeader={true} >
                                    <TableHead  >
                                        <TableRow >
                                            <TableCell sx={{backgroundColor:'#9575cd'}}  className="tableCell">Customer</TableCell>
                                            <TableCell sx={{backgroundColor:'#9575cd'}} className="tableCell">Date</TableCell>
                                            <TableCell sx={{backgroundColor:'#9575cd'}} className="tableCell">Time</TableCell>
                                            <TableCell sx={{backgroundColor:'#9575cd'}} className="tableCell">Amount</TableCell>
                                            <TableCell sx={{backgroundColor:'#9575cd'}}className="tableCell">Payment Method</TableCell>
                                            <TableCell sx={{backgroundColor:'#9575cd'}} className="tableCell">Status</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow >
                                                <TableCell className="tableCell">{row.customer}</TableCell>
                                                <TableCell className="tableCell">{row.date}</TableCell>
                                                <TableCell className="tableCell">{row.time}</TableCell>
                                                <TableCell className="tableCell">{row.amount}</TableCell>
                                                <TableCell className="tableCell">{row.method}</TableCell>
                                                <TableCell className="tableCell">
                                                    <span className={`status ${row.status}`}>{row.status}</span>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>
                        </TableContainer>
                    </div>
                </item>
            </Grid>
        </Grid>
    );
};

export default PassengersData;