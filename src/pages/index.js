import React from "react";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Login from "./login";
import Home from "./home";
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    flex: {
        flex: 1,
    }
};

class Main extends React.Component {
  render() {
    const { classes } = this.props;

    return (
        <Router>
          <div>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="title" color="inherit" className={classes.flex}>
                  MACHINA
                </Typography>
                <Avatar>A</Avatar>
              </Toolbar>
            </AppBar>

            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={Login} />
          </div>
        </Router>
    )
  }
}

export default withStyles(styles)(Main);