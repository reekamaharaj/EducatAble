import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        height: '400px',
        borderRight: '2px solid #fff',
        backgroundColor: '#72A0C1',
    },
    boxStyle: {
        justifyContent: 'center',
        padding: '40px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '700',
        color: 'white'
    }
})

export default function DYKSection() {
    const classes = useStyles();

    const DYK = [ 
        'Sign language isn’t universal and there are actually many different versions of it.',
        'Deaf people have their own culture separate from the hearing community.', 
        'There are different levels of Deafness.',
        'Negative attitudes toward deaf individuals are created and perpetuated by societal beliefs and behaviors that assume the superiority of hearing over deaf individuals. This belief structure is known as audism.',
        'The ADA is a civil rights law that prohibits discrimination against individuals with disabilities in all areas of public life, including employment, education, transportation, and all public and private places that are open to the general public, regardless of whether they receive federal financial assistance.' 
    ]

    let blurb = DYK[Math.floor(Math.random() * DYK.length)];

    return (
        <div style={{width: '50%'}} className={classes.root}>
            <Box display='flex' className={classes.boxStyle}>
                <Typography variant='h2'>Did you know?</Typography>
            </Box>
            <Box display='flex' className={classes.boxStyle}>
                <Typography variant='p'> 
                    {blurb}
                </Typography>
            </Box>
        </div>
    )
}
