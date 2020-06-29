import React from 'react'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        height: '400px',
        backgroundColor: '#72A0C1',
    },
    boxStyle: {
        justifyContent: 'center',
        padding: '20px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '700',
        color: 'white'
    },
    ulStyle: {
        textDecoration: 'none',
        listStyleType: 'none',
        color: 'white',
    }
})

export default function Resources() {
    const classes = useStyles();

    return (
        <div style={{width: '50%'}} className={classes.root}>
            <Box display='flex' className={classes.boxStyle}>
                <Typography variant='h2'>Resources:</Typography>
            </Box>
            <Box display='flex' className={classes.boxStyle}>
                <Typography variant='p'>
                    <ul>
                        <a href='https://gallaudet.edu' className={classes.ulStyle} target='_blank'><li>Gallaudet University</li></a>
                        <a href='https://www.csd.org/' className={classes.ulStyle} target='_blank'><li>Communication Services for the Deaf</li></a>
                        <a href='https://wfdeaf.org/' className={classes.ulStyle} target='_blank'><li>World Federation of the Deaf</li></a>
                        <a href='https://www.nationaldeafcenter.org' className={classes.ulStyle} target='_blank'><li>National Deaf Center</li></a>
                    </ul>
                </Typography>
            </Box>
        </div>
    )
}
