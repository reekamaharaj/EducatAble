import * as React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyle = makeStyles({
    save: {
        backgroundColor: '#4f88b1',
        margin: '5px',
        color: 'pink'
    },
    unsave: {
        backgroundColor: '#4f88b1',
        margin: '5px',
        color: 'white'
    }
});

function FavoriteBtn(props) {
    const classes = useStyle();
    const email = props.email;
    const id = props.id;

    const [save, setSave] = React.useState(true);

    React.useEffect(
        () => {saveStatusCheck(email, id);}
    );

    // If a user is logged in, this will check if they have any saved questions and make sure the fav buttons are in the state they should be in
    const saveStatusCheck = (email, id) => {
        axios.post('/api/saveQCheck/', { email, id }).then(result => {
            if (result.status === 200) {
                const savedQArray = result.data;
                if (savedQArray.includes(id) === true){
                    setSave(false)
                }
            } else {
                return alert("Nothing saved");
            }
        }).catch(err => console.log(err));
    };

    // Triggers the saving or deleting of questions to a user's account
    const handleSave = () => {
        if (save === false) {
            unsavedQs(email, id);
        } else {
            savedQs(email, id);
        }
        setSave(!save);
    };

    // Saving a question to a user's account
    const savedQs = (email, id) => {
        axios
            .post('/api/SavedQuestions/', { email, id })
            .then((result) => {
                if (result.status === 200) {
                    return alert('Question saved!');
                } else {
                    return alert('Oops. Something went wrong!');
                }
            })
            .catch((err) => console.log(err));
    };

    // Removing a question from a user's account
    const unsavedQs = (email, id) => {
        axios.post('/api/UnsavedQuestions/', { email, id }).then((result) => {
            if (result.status === 200) {
                return alert('Your question was removed!');
            } else {
                return alert('Oops. Something went wrong!');
            }
        });
    };

    return (
        <>
            {save ? (
                <Button className={classes.unsave} onClick={handleSave}>
                    <Icon>favorite</Icon>
                </Button>
            ) : (
                <Button className={classes.save} onClick={handleSave}>
                    <Icon>favorite</Icon>
                </Button>
            )}
        </>
    );
}

export default FavoriteBtn;
