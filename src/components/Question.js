import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteBtn from '../components/FavoriteBtn';

const useStyle = makeStyles({
    nested: {
        backgroundColor: '#fdfaf6',
        color: '#4f88b1'
    },
    favBtn: {
        backgroundColor: '#4f88b1',
        margin: '5px',
        color: 'pink'
    }
});

function Question(props) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const classes = useStyle();

    const [token, setToken] = React.useState(localStorage.getItem('token'));
    const guest = !token;

    React.useEffect(
        function () {
            if (!!token) {
                localStorage.setItem('token', token);
            } else {
                localStorage.removeItem('token');
            }
        },
        [token]
    );

    return (
        <>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <QuestionAnswerIcon />
                </ListItemIcon>
                <ListItemText primary={props.question} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                    <ListItem className={classes.nested}>
                        <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                        <Typography>{props.answer}</Typography>
                        <br />
                        {guest ? (<></>) : (<FavoriteBtn email={props.email} id={props.id} />)}
                    </ListItem>
                </List>
            </Collapse>
        </>
    );
}
export default Question;
