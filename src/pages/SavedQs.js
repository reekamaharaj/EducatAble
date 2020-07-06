import * as React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Question from '../components/Question';
import Footer from '../components/Footer';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

const useStyle = makeStyles({
    boxStyle: {
        justifyContent: 'center',
        padding: '20px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '700',
        color: 'white',
        backgroundColor: '#72A0C1'
    },
    inputStyle: {
        width: '100%',
        backgroundColor: '#72A0C1'
    },
    boxStyleTwo: {
        padding: '20px',
        backgroundColor: '#72A0C1',
        color: 'white',
        fontFamily: 'Roboto, sans-serif'
    },
    mainBtn: {
        margin: '10px',
        padding: '10px 20px',
        color: 'white',
        fontSize: '16px',
        float: 'right'
    }
});

const savedQA = [
    {
        question: "What is it like to be deaf?",
        answer:
            "I cannot speak for all deaf folks out there, but I do know that there’s a large continuum of experiences of what it’s like to be deaf. There are varying levels of deafnesses too, it’s never really the same among the community. Some are hard of hearing, some are TOTALLY deaf (like me), some have hearing in one ear and zero hearing in the other. Point bottom, it varies. If you were born deaf , your world is silent. And you don’t really know any other unless you experience having a cochlear implant. Imagine you’re walking in a brightly lit room, and someone switches the light off, and all of the sudden there’s darkness. Or if you’re in the middle of a dream and you’re screaming (in your dream) and no one can hear you, and you can’t hear yourself.",
    },
    {
        question: "Do all Deaf people know sign language?",
        answer:
            "Short answer is, no. Deaf people sign, talk, or sign and talk at the same time. Deaf people make their choices on how they prefer to communicate. Try your best to be accommodating to how deaf people would like to communicate with you. Deaf people often are oppressed by the hearing world and often have to jump hoops to be able to communicate with others that are not willing to do so. If you encounter a deaf person who signs, either get your phone or pen and paper and you can communicate with them that way. If a deaf person prefers to gesture, pay close attention to what they’re trying to tell you. If a deaf person who speaks, be sure to look in their face, be clear and enunciate what you’re saying.",
    },
];

function SavedQs() {
    // Declare and initalize state with an empty map
    const [popSavedQs, setPopSavedQs] = React.useState('');

    const populateSavedQs = () => {
        axios
            .get('/api/savedQuestion')
            .then((res) => setPopSavedQs(res.data))
            .catch((err) => console.log(err));
    };

    const classes = useStyle();
    const [token, setToken] = React.useState(localStorage.getItem('token'));
    const guest = !token;

    React.useEffect(
        function () {
            populateSavedQs();
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
            {guest ? (
                <p>You don't have an account LEAVE XD!!</p>
            ) : (
                <div style={{ width: '100%' }} className={classes.root}>
                <div className={classes.root}>
                    <br />
                    <Paper elevation={3} className={classes.paperStyle}>
                        <Typography variant='subtitle' className={classes.bio}>
                            <h2>Your Favorites Page</h2>
                        </Typography>
                        {savedQA.length > 0 ? (
                            <>
                                <Box className={classes.boxStyle}>
                                    {savedQA.map((qa) => (
                                        <Question
                                            key={qa._id}
                                            question={qa.question}
                                            answer={qa.answer}
                                        />
                                    ))}
                                </Box>
                            </>
                        ) : (
                            <>
                                <p>No saved questions</p>
                            </>
                        )}
                    </Paper>
                    <br />
                </div>
                <Footer />
            </div>
            )}
        </>
    );
}
export default SavedQs;
