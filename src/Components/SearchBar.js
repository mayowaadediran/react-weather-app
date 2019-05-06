import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';


const styles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 500,
    margin: "0 auto",
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
  form: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    margin: "0 auto",
  },
};

const SearchBar = (props) => {

const { classes, submit, handleSearch } = props;

  return (
    <Paper className={classes.root} elevation={1}>
      <form className={classes.form} onSubmit={submit}>
       <InputBase 
        className={classes.input}
        type="text" 
        placeholder="Type in your location" 
        name="location"
        onChange={handleSearch}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="Search" >
          <SearchIcon />
        </IconButton>
      </form>
    </Paper>
  );
}

export default withStyles(styles)(SearchBar);