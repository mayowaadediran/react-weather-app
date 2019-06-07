import React from 'react';
import {convertUnixMonth, convertUnixDate, convertUnixDay, convertUnixTime} from '../utils/unixTime';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';
import humidityIcon from '../images/weather-icons/humidity.svg';
import windIcon from '../images/weather-icons/wind.svg';
import pressureIcon from '../images/weather-icons/pressure.svg';

const styles = {
  card: {
    width: '50%',
    margin: '0 auto',
    marginTop: '5%',
    backgroundImage: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);'
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
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: 128,
      height: 128,
      alignItems: 'center'
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    icons: {
      width: 50,
      height: 50,
      marginRight: '10px'
    }
};


const CurrentWeather = (props) => {
  const { classes, currentWeather } = props;

  const imgSrc = `http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`
  
  return (
  <Card className={classes.card}>
    <CardContent>
        <Grid 
          container
          direction = "row">

          <Grid
            item
            xs = {6}>
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
              {currentWeather.weather[0].main} - {currentWeather.weather[0].description}
            </Typography>
          </Grid>

          <Grid 
            item 
            container
            direction = "row"
            justify = "flex-start"
            alignItems = "center"
            xs = {6}>
            <div className={classes.image}>
              <img className={classes.img} alt="complex" src={imgSrc} />
            </div>
            <Typography variant="h3">
              {currentWeather.main.temp}<sup>o</sup>C
            </Typography>
          </Grid>

        </Grid>

        <Grid 
          item
          container
          direction = "row">
          <Grid item xs container justify = "flex-start">
            <Grid item container xs alignItems = "center">
              <div className={classes.icons}>
                <img className={classes.img} src={humidityIcon} alt="humdity icon"/>
              </div>
              <Typography>
                Humidity: {currentWeather.main.humidity}%
              </Typography>
            </Grid>
            <Grid item container xs alignItems = "center">
              <div className={classes.icons}>
                <img className={classes.img} src={windIcon} alt="wind icon"/>
              </div>
               <Typography>
                Wind: {currentWeather.wind.speed}m/s
              </Typography>
            </Grid>
            <Grid item container xs alignItems = "center">
              <div className={classes.icons}>
                <img className={classes.img} src={pressureIcon} alt="wind icon"/>
              </div>
               <Typography>
                Pressure: {currentWeather.main.pressure}hPa
              </Typography>
            </Grid>
          </Grid>
        </Grid>

    </CardContent>
  </Card>
  )
}

export default withStyles(styles)(CurrentWeather)