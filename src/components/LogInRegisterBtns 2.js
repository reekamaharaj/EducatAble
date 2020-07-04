import * as React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles({
    mainBtn: {
        margin: '10px',
        padding: '10px 20px',
        color: 'white',
        fontSize: '16px',
    },
    iconSpacing: {
        paddingRight: '5px'
    }
})

const LoggedOutView = function LoggedOutView() {
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.contentPlacing}>
                <Button component='a' href='/login' className={classes.mainBtn}><Icon className={classes.iconSpacing}>account_circle</Icon>Log-In</Button> |
                <Button component='a' href='/register' className={classes.mainBtn}><Icon className={classes.iconSpacing}>how_to_reg</Icon>Register</Button>
            </Box>
        </div>
    )
}

export default LoggedOutView;