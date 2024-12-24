import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card, CardContent } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Dashboardpage() {
    return ( 
        <div>

        <Box sx={{ flexGrow: 1, padding: "15px" }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Card  variant="outlined">
                        <CardContent>
                            <Grid container>
                                <Grid item xs={6}>
                                    <h1>700K</h1>
                                </Grid>
                                <Grid item xs={6}>

                                </Grid>
                            </Grid>
                        </CardContent></Card>
                </Grid>
                <Grid item xs={4}>
                    <Card  variant="outlined">
                        <CardContent>
                            <Grid container>
                                <Grid item xs={6}>
                                    <h1>700K</h1>
                                </Grid>
                                <Grid item xs={6}>

                                </Grid>
                            </Grid>
                        </CardContent></Card>
                </Grid>
                <Grid item xs={4}>
                    <Card  variant="outlined">
                        <CardContent>
                            <Grid container>
                                <Grid item xs={6}>
                                    <h1>700K</h1>
                                </Grid>
                                <Grid item xs={6}>

                                </Grid>
                            </Grid>
                        </CardContent></Card>
                </Grid>
              
            </Grid>
        </Box>
        
        </div>
    );
}