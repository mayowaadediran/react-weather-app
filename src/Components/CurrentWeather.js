import React from 'react';
import {convertUnixMonth, convertUnixDate, convertUnixDay, convertUnixTime} from '../utils/unixTime';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { CardContent } from '@material-ui/core';

const styles = {
  card: {
    width: '40%',
    margin: '0 auto',
    marginTop: '5%',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
};


const CurrentWeather = (props) => {
  const { classes, currentWeather } = props;

  const imgSrc = `http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`
  
  return (
  <Card className={classes.card}>
    <CardContent>
      <Grid container>
        <Grid item>
          <Typography variant='h5'>
            {currentWeather.name}, {currentWeather.sys.country}
          </Typography>
          <Typography>
            {convertUnixDay(currentWeather.dt)}, {convertUnixDate(currentWeather.dt)} {convertUnixMonth(currentWeather.dt)}
          </Typography>
          <Typography>
            {convertUnixTime(currentWeather.dt)}
          </Typography>
          <Typography>
            {currentWeather.weather[0].main} - 
            {currentWeather.weather[0].description}
          </Typography>
        </Grid>
        <Divider />
        <Grid 
          item 
          container
          direction = "row"
          justify = "flex-start"
          alignItems = "center"
        >
          <div className={classes.image}>
            <img className={classes.img} alt="complex" src={imgSrc} />
          </div>
          <Typography variant="h3">
            {currentWeather.main.temp}
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
  )
}

export default withStyles(styles)(CurrentWeather)