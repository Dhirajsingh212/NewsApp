import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    btn: {
        textDecoration: 'none',
        color: 'white',
        fontWeight:'bolder',
        marginLeft:'30px',
        margintRight:'30px',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
        '&:hover': {
            color:'#F8DF8B'
          }
    },
    drop: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    text:{
        textDecoration:'none'
    },
    title:{
        color:'#F9ED69'
    }
}));
export default function Navbar() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const classes = useStyles();
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{ flexGrow: 1 }}
                            className={classes.title}
                        >
                            NewsMonkey
                        </Typography>
                        <Link
                            to="/Business"
                            className={clsx(classes.btn)}
                        >
                           BUSINESS
                        </Link>
                        <Link
                            to="/Entertainment"
                            className={clsx(classes.btn)}
                        >
                            ENTERTAINMENT
                        </Link>
                        <Link
                            to="/General"
                            className={clsx(classes.btn)}
                        >
                            GENERAL
                        </Link>
                        <Link
                            to="/Health"
                            className={clsx(classes.btn)}
                        >
                           HEALTH
                        </Link>
                        <Link
                            to="/Science"
                            className={clsx(classes.btn)}
                        >
                           SCIENCE
                        </Link>
                        <Link
                            to="/Sports"
                            className={clsx(classes.btn)}
                        >
                           SPORTS
                        </Link>
                        <Link
                            to="/Technology"
                            className={clsx(classes.btn)}
                        >
                           TECHNOLOGY
                        </Link>
                        <Box sx={{ minWidth: 120 }} className={classes.drop}>
                            <FormControl fullWidth className="bg-light">
                                <InputLabel id="demo-simple-select-label" className="">
                                    Category
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="category"
                                    value={age}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="BUSINESS" >
                                        <Link to="/Business" className={classes.text}>
                                            BUSINESS
                                        </Link>
                                    </MenuItem>
                                    <MenuItem value="ENTERTAINMENT">
                                        <Link to="/Entertainment" className={classes.text}>
                                            ENTERTAINMENT
                                        </Link>
                                    </MenuItem>
                                    <MenuItem value="GENERAL">
                                        <Link to="/General" className={classes.text}>
                                            GENERAL
                                        </Link>
                                    </MenuItem>
                                    <MenuItem value="HEALTH">
                                        <Link to="/Health" className={classes.text}>
                                            HEALTH
                                        </Link>
                                    </MenuItem>
                                    <MenuItem value="SCIENCE">
                                        <Link to="/Science" className={classes.text}>
                                            SCIENCE
                                        </Link>
                                    </MenuItem>
                                    <MenuItem value="SPORTS">
                                        <Link to="/Sports" className={classes.text}>
                                            SPORTS
                                        </Link>
                                    </MenuItem>
                                    <MenuItem value="TECHNOLOGY">
                                        <Link to="/Technology" className={classes.text}>
                                           TECHNOLOGY
                                        </Link>
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}
