import React from "react";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Login from "./login";
import Home from "./home";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    flex: {
        flex: 1,
    }
};

class AuthExample extends React.Component {
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
                {/*<Button color="inherit">Logout</Button>*/}
              </Toolbar>
            </AppBar>

            <Route path="/home" component={Home} />
            <Route path="/" component={Login} />
          </div>
        </Router>
    )
  }
}

export default withStyles(styles)(AuthExample);