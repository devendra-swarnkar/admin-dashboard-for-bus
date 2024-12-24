import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { lighten, darken } from '@mui/system';
import { Card, CardContent, CardMedia, Container, Stack, Typography } from '@mui/material';
import bus from "../assets/bus.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const GroupHeader = styled('div')(({ theme }) => ({
  position: 'sticky',
 
  padding: '4px 10px',
  color: theme.palette.primary.main,
  backgroundColor:
    theme.palette.mode === 'light'
      ? lighten(theme.palette.primary.light, 0.85)
      : darken(theme.palette.primary.main, 0.8),
}));

const GroupItems = styled('ul')({
  padding: 0,
});


const BusRoutes = [
  { Route: 'Neemuch-Singoli' },
  { Route: 'Indore-Singoli' },
  { Route: 'Alirajpur-Indore' },
  { Route: 'Bhopal-Indore' }
];

const map = new mappls.Map('map', {center:{lat:22.719568,lng:75.857727},fullscreenControl: false });


export default function BasicGrid() {
  const options = BusRoutes.map((option) => {
    const firstLetter = option.Route[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });
  return (
    <Box disableEqualOverflow sx={{ flexGrow: 1, bgcolor: '#d1c4e9' }}>
      <Grid container >
        <Grid item xs={4}>
          <Stack>
            <Toolbar>
              <Autocomplete
              
                id="grouped-demo"
                options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                groupBy={(option) => option.firstLetter}
                getOptionLabel={(option) => option.Route}
                sx={{ width: 300 ,paddingLeft:5.5,paddingRight:2,paddingTop:3}}
                renderInput={(params) => <TextField {...params} label="Bus Routes" />}
                renderGroup={(params) => (
                  <li key={params.key}>
                    <GroupHeader>{params.group}</GroupHeader>
                    <GroupItems>{params.children}</GroupItems>
                  </li>
                )}
              />

            </Toolbar>
            <Container maxWidth="sm">
              <Box sx={{ bgcolor: '#d1c4e9', height: '100vh' }} >

                <Card elevation={15} sx={{ height: 450, width: 340, marginLeft: 2, marginRight: 2, borderRadius: 7, marginTop: 7, marginBottom: 0, bgcolor: '#b39ddb' }}>
                  <Grid container >
                    <Grid item xs={6}>
                      <CardMedia
                        component="img"
                        sx={{ width: 120, padding: 1, borderRadius: 10, alignItems: 'center', paddingX: 3, paddingY: 3 }}
                        image={bus}
                        alt="BusImage"
                      />
                    </Grid>
                    <Grid item xs={6}>

                      <Typography component="div" variant="h6" sx={{ fontWeight: 600, alignContent: 'start', paddingTop: 5 }} >
                        Tata LP 912
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        MP-44-6312
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <CardContent sx={{ paddingLeft: 3,paddingTop:0 }}>
                        <Typography sx={{lineHeight:2}}>
                          Route:  Neemuch to  Indore
                          <br />
                          Driver Name: Shyam
                          <br />
                          Bus status: On the way
                          <br />
                          Fuel capacity:  50 litres
                          <br />
                          Current fuel level:  38 litres
                          <br/>
                          Seating capacity :  70
                        </Typography>
                      </CardContent>

                    </Grid>

                  </Grid>
                </Card>




              </Box>

            </Container>
          </Stack>
        </Grid>
        <Grid item xs={8}>
          <Box
          sx={{
            display: 'flex',
           height:600,
            backgroundColor:'#b39ddb',
            padding:0,
            overflow:'hidden',
            margin:3,
            borderRadius:10,

          }} 
          >
         <div  id="map" style={{height:'600px',width:'100%'}}></div>

          </Box>
        </Grid>

      </Grid>
    </Box>
  );
}