import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import LoggedOutView from './LogInRegisterBtns';
import LoggedInView from './LogOutBtn';


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
        textDecoration: 'none',
        color: 'white'
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
    const [token, setToken] = React.useState(localStorage.getItem("token"));
    const guest = !token;
    const logout = () => setToken("");

    React.useEffect(function(){
        if(!!token){
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
        }
    }, [token]);

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar className={classes.root}>
                    <Typography variant='h5'>EducatAble</Typography>
                    <Button component='a' href='/' className={classes.mainBtn}><Icon className={classes.iconSpacing}>home</Icon>HOME</Button>
                    <Button component='a' href='/FAQ' className={classes.mainBtn}><Icon className={classes.iconSpacing}>help</Icon>FAQ</Button>
                    <Typography className={classes.space}>{' '}</Typography>
                    <>
                    {guest ? (
                        <LoggedOutView />
                    ) : (
                        <Button onClick={logout} className={classes.mainBtn}><Icon className={classes.iconSpacing}>clear</Icon>Log Out</Button>
                    )}
                    </>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Nav;
