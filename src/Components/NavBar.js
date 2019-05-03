import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import {
  withStyles
} from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolbar: {
    width: "70%",
    justifyContent: "space-between",
    margin: "0 auto"
  },
  logo: {
    color: "#fff"
  }
};

const NavBar = (props) => {
  const { classes } = props
  return (
    <AppBar>
      <Toolbar  className={classes.toolbar}>
        <Typography variant="h6"  className={classes.logo}>
          Weather Now Now
        </Typography>
        <Link component={RouterLink} to="/about">
          <Button>
            About
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(NavBar);

