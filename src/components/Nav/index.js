import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        color: 'white',
        backgroundColor: '#72A0C1'
    },
    mainBtn: {
        margin: '10px',
        padding: '10px 20px',
        color: 'white',
        fontSize: '16px'
    },
    space: {
        flexGrow: 1
    }
})
function Nav() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar className={classes.root}>
                    <Typography variant='h5'>EducatAble</Typography>
                    <a href="/"><Button className={classes.mainBtn}>Home</Button></a>
                    <a href="/FAQ"><Button className={classes.mainBtn}>FAQ</Button></a>
                    <Typography className={classes.space}>{' '}</Typography>
                    <a href="/login"><Button className={classes.mainBtn}>Log-In</Button></a> |
                    <a href="/register"><Button className={classes.mainBtn}>Register</Button></a>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Nav;
