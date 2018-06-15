import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Button, Card, CardContent, CardActions, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';

const styles = theme => ({
    card: {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: 600,
    },
    root: {
        textAlign: 'center',
        paddingTop: theme.spacing.unit * 20,
    },
});

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
    }

    render() {
        const { classes } = this.props;

        if (this.state.submitted) {
            return <Redirect to="/home" />;
        }

        return (
            <Router>
                <div className={classes.root}>
                    <form className={classes.container} onSubmit={this.handleSubmit}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography gutterBottom variant="headline" component="h2">
                                    MACHINA
                                </Typography>
                                <TextField
                                    id="email"
                                    label="Email"
                                    className={classes.textField}
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    fullWidth/>
                                <TextField
                                    id="password"
                                    type="password"
                                    label="Password"
                                    className={classes.textField}
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    fullWidth/>
                            </CardContent>
                            <CardActions>
                                <Button color="primary" className={classes.button} type="submit">
                                    Login
                                </Button>
                            </CardActions>
                        </Card>
                    </form>
                </div>
            </Router>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Login));
