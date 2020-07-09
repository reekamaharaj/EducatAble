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
    const token = props.token;
    const id = props.id;

    const [save, setSave] = React.useState(true);

    React.useEffect(
        () => {saveStatusCheck(token, id);}, [save]
    );

    // If a user is logged in, this will check if they have any saved questions and make sure the fav buttons are in the state they should be in
    const saveStatusCheck = (token, id) => {
        axios.post('/api/saveQCheck/', { id }, { headers: { Authorization: "Bearer " + token }}).then(result => {
            if (result.status === 200) {
                const savedQArray = result.data;
                if (savedQArray.includes(id) === true){
                    setSave(false)
                }
            } else {
                alert("Nothing saved");
            }
        }).catch(err => console.log(err));
    };

    // Triggers the saving or deleting of questions to a user's account
    const handleSave = () => {
        if (save === false) {
            unsavedQs(token, id);
        } else {
            savedQs(token, id);
        }
        setSave(!save);
    };

    // Saving a question to a user's account
    const savedQs = (token, id) => {
        axios
            .post('/api/SavedQuestions/', { id }, { headers: { Authorization: "Bearer " + token }})
            .then((result) => {
                if (result.status === 200) {
                    alert('Question saved!');
                } else {
                    alert('Oops. Something went wrong!');
                }
            })
            .catch((err) => console.log(err));
    };

    // Removing a question from a user's account
    const unsavedQs = (token, id) => {
        axios.post('/api/UnsavedQuestions/', { id }, { headers: { Authorization: "Bearer " + token }}).then((result) => {
            if (result.status === 200) {
                alert('Your question was removed!');
            } else {
                alert('Oops. Something went wrong!');
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
