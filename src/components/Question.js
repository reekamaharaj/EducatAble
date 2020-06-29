import * as React from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    nested: {
        backgroundColor: "#fdfaf6",
        color: "#4f88b1",
    }
});

function Question(props) {

    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    const classes = useStyle();

    return (
        <>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <QuestionAnswerIcon />
                </ListItemIcon>
                <ListItemText primary={props.question} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem className={classes.nested}>
                        <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                        <Typography>{props.answer}</Typography>
                    </ListItem>
                </List>
            </Collapse>
        </>
    );
}
export default Question;