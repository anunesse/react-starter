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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import data from '../data';

let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}

const tableData = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const styles = theme => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        padding: '2vh 2vw',
    },
});

class ButtonAppBar extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Router>
                <Grid container className={classes.root} spacing={8}>
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
                    <Grid item sm={6}>
                        <Card className={classes.card}>
                            <CardContent>
                                <LineChart
                                    width={800} height={500} data={data}
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
                    <Grid item sm={6}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Table className={classes.table}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Dessert (100g serving)</TableCell>
                                            <TableCell numeric>Calories</TableCell>
                                            <TableCell numeric>Fat (g)</TableCell>
                                            <TableCell numeric>Carbs (g)</TableCell>
                                            <TableCell numeric>Protein (g)</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {tableData.map(n => {
                                            return (
                                                <TableRow key={n.id}>
                                                    <TableCell component="th" scope="row">
                                                        {n.name}
                                                    </TableCell>
                                                    <TableCell numeric>{n.calories}</TableCell>
                                                    <TableCell numeric>{n.fat}</TableCell>
                                                    <TableCell numeric>{n.carbs}</TableCell>
                                                    <TableCell numeric>{n.protein}</TableCell>
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Router>
        )
    }
}

export default withStyles(styles)(ButtonAppBar);