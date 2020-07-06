import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Icon from '@material-ui/core/Icon';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    mainBtn: {
        margin: '10px',
        padding: '10px 20px',
        color: 'white',
        fontSize: '16px'
    },
    iconSpacing: {
        paddingRight: '5px'
    }
});

const Loginmessage = function Loginmessage() {
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.contentPlacing}>
                <Typography>
                    <Icon className={classes.iconSpacing}>done_all</Icon>You are
                    logged in!
                </Typography>
            </Box>
        </div>
    );
};

export default Loginmessage;
