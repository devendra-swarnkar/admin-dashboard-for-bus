import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import bus from "../assets/bus.png";
import {  AirlineSeatFlatAngled, AirlineSeatReclineExtraSharp, ArrowRightAltTwoTone, DragHandle, EventSeat, OpenInFull, SwapHorizSharp } from '@mui/icons-material';
import { ArrowLeftIcon, ArrowRightIcon } from '@mui/x-date-pickers';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
    return (
        <Box sx={{ flexGrow: 1 ,marginTop:2}}>
            <Grid container spacing={2} sx={{backgroundColor:'#d1c4e9',height:'100vh'}}>
                <Grid item xs={4}>
                    <Item></Item>
                </Grid>
                <Grid item xs={8}>
                    <Card elevation={10} sx={{ display: 'flex',margin:2 ,backgroundColor:'#b39ddb',borderRadius:5}}>

                        <CardMedia
                            component="img"
                            sx={{ width: 151,padding:1,borderRadius:7 }}
                            image={bus}
                            alt="Live from space album cover"
                            
                        />
                        <CardContent sx={{width:'100%' , display:'flex',padding:1}}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Typography component="div" variant="h5" sx={{ justifyContent: 'left' }}>
                                        Tata LP 912
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        MP-44-6312
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} >


                                    <Typography sx={{display:'flex',justifyContent:"right",alignItems:'center',gap:1,fontSize:'18px',fontStyle:'oblique',fontWeight:700}}>
                                       Route<DragHandle/>Singoli<SwapHorizSharp/>Neemuch
                                    </Typography>
                                    <Typography sx={{display:'flex',justifyContent:"right",alignItems:'center',gap:1,fontSize:'18px',fontStyle:'oblique',fontWeight:700}}>
                                       FuelStatus<DragHandle/>70%
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography sx={{display:'flex',justifyContent:"left",alignItems:'center',fontSize:'18px',fontStyle:'oblique',fontWeight:700}}>
                                      <AirlineSeatReclineExtraSharp/>  Seater bus
                                    </Typography>
                                    <Typography sx={{paddingBottom:0}}>
                                        Via = Ratangarh
                                    </Typography>
                                    </Grid>

                               
                            </Grid>
                        </CardContent>

                    </Card>
                </Grid>

            </Grid>
        </Box>
    );
}