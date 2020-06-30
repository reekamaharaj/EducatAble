import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';


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
        fontSize: '16px',
    },
    linkStyling: {
        textDecoration: 'none'
    },
    space: {
        flexGrow: 1
    },
    iconSpacing: {
        paddingRight: '5px'
    }
})
function Nav() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar className={classes.root}>
                    <Typography variant='h5'>EducatAble</Typography>
                    <a href="/" className={classes.linkStyling}><Button className={classes.mainBtn}><Icon className={classes.iconSpacing}>home</Icon> Home</Button></a>
                    <a href="/FAQ" className={classes.linkStyling}><Button className={classes.mainBtn}><Icon className={classes.iconSpacing}>help</Icon>FAQ</Button></a>
                    <Typography className={classes.space}>{' '}</Typography>
                    <a href="/login" className={classes.linkStyling}><Button className={classes.mainBtn}><Icon className={classes.iconSpacing}>account_circle</Icon>Log-In</Button></a> |
                    <a href="/register" className={classes.linkStyling}><Button className={classes.mainBtn}><Icon className={classes.iconSpacing}>how_to_reg</Icon>Register</Button></a>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Nav;
