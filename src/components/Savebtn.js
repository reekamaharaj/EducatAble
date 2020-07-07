import * as React from 'react';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';


const useStyle = makeStyles({
    truefavBtn: {
        backgroundColor: '#4f88b1',
        margin: '5px',
        color: 'pink'
    },
    falsefavBtn: {
        backgroundColor: '#4f88b1',
        margin: '5px',
        color: 'white'
    }
});


function SaveBtn(props) {
    const classes = useStyle();
    const [save, setSave] = React.useState(true);
    const saveClick = () => {
        if (save === false) {
            saveQs(props.email, props.qid);
            alert("unSave");
        } else {
            unsaveQs(props.email, props.qid);
            alert("Save");
        }
        setSave(!save);
    };

    const saveQs = (email, qid) => {
        axios
            .post('/api/SavedQ/' + email + '/' + qid)
            .then((res) => setSave(res.data))
            .catch((err) => console.log(err));
    };

    const unsaveQs = (email, qid) => {
        axios
            .post('/api/unsaveQ/' + email + '/' + qid)
            .then((res) => setSave(res.data))
            .catch((err) => console.log(err));
    };

    return (
        <>
            {save ? (
                <Button className={classes.falsefavBtn} onClick={saveClick}>
                    <Icon>favorite</Icon>
                </Button>
            ) : (
                <Button className={classes.truefavBtn} onClick={saveClick}>
                    <Icon>favorite</Icon>
                </Button>
            )}
        </>
    );
}

export default SaveBtn;