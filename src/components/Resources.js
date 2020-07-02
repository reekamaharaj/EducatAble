import * as React from 'react'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import LinkIcon from '@material-ui/icons/Link';

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
        listStyleType: 'none',
    },
    linkStyle: {
        textDecoration: 'none',
        color: 'white'
    },
    iconSpacing: {
        paddingRight: '5px'
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
                    <ul className={classes.ulStyle}>
                        <li>
                            <Link href='https://gallaudet.edu' className={classes.linkStyle} target='_blank'>
                            <LinkIcon className={classes.iconSpacing}/>
                            Gallaudet Univeristy
                            </Link>
                        </li>
                        <li>
                            <Link href='https://www.csd.org/' className={classes.linkStyle} target='_blank'>
                            <LinkIcon className={classes.iconSpacing}/>
                            Communication Services for the Deaf
                            </Link>
                        </li>
                        <li>
                            <Link href='https://wfdeaf.org/' className={classes.linkStyle} target='_blank'>
                            <LinkIcon className={classes.iconSpacing}/>
                            World Federation of the Deaf
                            </Link>
                        </li>
                        <li>
                            <Link href='https://www.nationaldeafcenter.org' className={classes.linkStyle} target='_blank'>
                            <LinkIcon className={classes.iconSpacing}/>
                            National Deaf Center
                            </Link>
                        </li>
                    </ul>
                </Typography>
            </Box>
        </div>
    )
}
