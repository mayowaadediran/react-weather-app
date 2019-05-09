import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';



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