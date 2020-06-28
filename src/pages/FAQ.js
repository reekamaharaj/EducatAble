import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

// import { useAuth } from '../context/auth';

const useStyle = makeStyles({
  boxStyle: {
        justifyContent: 'center',
        padding: '20px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '700',
        color: 'white',
        backgroundColor: '#72A0C1'
  },
  nested: {
    backgroundColor: '#fdfaf6',
    color: '#4f88b1'
  }
})
function FAQ(props) {
  // const { setAuthTokens } = useAuth();

  // function logOut() {
  //   setAuthTokens();
  // }

  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  
  const classes = useStyle();

  return (
    <div>
      <div>
      <Box className={classes.boxStyle}>
        <Typography variant='h2'>Frequently Asked Questions</Typography>
        <Typography variant='h6'>All Questions have been answered by a member of the Deaf community.</Typography>
      </Box>
      {/* Questions Section */}
      <Box className={classes.boxStyle}>
      {/* Question 1 */}
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <QuestionAnswerIcon />
        </ListItemIcon>
        <ListItemText primary=
          "What is it like to be deaf?" 
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem className={classes.nested}>
            <ListItemIcon>
              {/* <StarBorder /> */}
            </ListItemIcon>
            <Typography>
            I cannot speak for all deaf folks out there, but I do know that there’s a large continuum of experiences of what it’s like to be deaf. There are varying levels of deafnesses too, it’s never really the same among the community. Some are hard of hearing, some are TOTALLY deaf (like me), some have hearing in one ear and zero hearing in the other. Point bottom, it varies. 

            If you were born deaf , your world is silent. And you don’t really know any other unless you experience having a cochlear implant. 

            Imagine you’re walking in a brightly lit room, and someone switches the light off, and all of the sudden there’s darkness. Or if you’re in the middle of a dream and you’re screaming (in your dream) and no one can hear you, and you can’t hear yourself. 

            </Typography>
          </ListItem>
        </List>
      </Collapse>
      {/* Question 2 */}
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <QuestionAnswerIcon />
        </ListItemIcon>
        <ListItemText primary=
          "Do all Deaf people know sign language?" 
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem className={classes.nested}>
            <ListItemIcon>
              {/* <StarBorder /> */}
            </ListItemIcon>
            <Typography>
            Short answer is, no. Deaf people sign, talk, or sign and talk at the same time. Deaf people make their choices on how they prefer to communicate. 

            Try your best to be accommodating to how deaf people would like to communicate with you. Deaf people often are oppressed by the hearing world and often have to jump hoops to be able to communicate with others that are not willing to do so. If you encounter a deaf person who signs, either get your phone or pen and paper and you can communicate with them that way. If a deaf person prefers to gesture, pay close attention to what they’re trying to tell you. If a deaf person who speaks, be sure to look in their face, be clear and enunciate what you’re saying. 

            </Typography>
          </ListItem>
        </List>
      </Collapse>
      </Box>
      </div>
      {/* <Button onClick={logOut}>Log Out</Button> */}
    </div>
  )
}

export default FAQ;

