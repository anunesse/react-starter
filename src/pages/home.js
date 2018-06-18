import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import data from '../data';

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: '2vh 2vw',
    },
});

class ButtonAppBar extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Router>
                <Grid container className={classes.root} spacing={16}>
                    {[0].map(value => (
                        <Grid key={value} item sm={4}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography gutterBottom variant="headline" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species,[1]
                                        ranging across all continents except Antarctica, as well as most oceanic island
                                        chains. The group is paraphyletic as it excludes the snakes and Amphisbaenia
                                        which are also squamates.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                    <Button size="small" color="primary">
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                    <Grid item sm={8}>
                        <Card className={classes.card}>
                            <CardContent>
                                <LineChart
                                    width={1100} height={500} data={data}
                                    margin={{ top: 40, right: 40, bottom: 20, left: 20 }}>
                                    <CartesianGrid vertical={false} />
                                    <Tooltip/>
                                    <XAxis dataKey="date" minTickGap={40} />
                                    <YAxis domain={['auto', 'auto']} />
                                    <Line dataKey="price" stroke="#ff7300" dot={false} />
                                    <Line dataKey="trend" stroke="#f573f0" dot={false} />
                                </LineChart>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Router>
        )
    }
}

export default withStyles(styles)(ButtonAppBar);