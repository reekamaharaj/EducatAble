import * as React from 'react';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyle = makeStyles({
    nested: {
        backgroundColor: '#fdfaf6',
        color: '#4f88b1'
    },
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
    const [save, setSave] = React.useState(false);
    const saveClick = () => {
        if (save === false) {
            // saveQs();
            alert("Save");
        } else {
            // unsaveQs();
            alert("unSave");
        }
        setSave(!save);
    };

    // const saveQs = () => {
    //     axios
    //         .post('/api/saveQ')
    //         .then((res) => setSave(res.data))
    //         .catch((err) => console.log(err));
    // };

    // const unsaveQs = () => {
    //     axios
    //         .post('/api/unsaveQ')
    //         .then((res) => setSave(res.data))
    //         .catch((err) => console.log(err));
    // };

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