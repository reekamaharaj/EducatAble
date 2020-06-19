import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';


export default function Section() {
  
    return (
        <div style={{ width: '100%'}}>
            <Box display='flex'>
                <h2>Did you know?</h2>
            </Box>
            <Box display='flex'>
                <p>Content</p>
            </Box>
        </div>
    )
}
