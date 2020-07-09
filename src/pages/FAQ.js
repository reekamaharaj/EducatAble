import * as React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Question from '../components/Question';
import Footer from '../components/Footer';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
        backgroundColor: '#fdfaf6'
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
        float: 'right',
        borderBottom: '2px solid white',
        borderRadius: '0px'
        
    }
});

function FAQ() {
    const [popQs, setPopQs] = React.useState('');
    const [newQ, setNewQ] = React.useState('');
    const [token, setToken] = React.useState(localStorage.getItem('token'));

    const classes = useStyle();
    const guest = !token;

    React.useEffect(
        function () {
            populateQs();
            if (!!token) {
                localStorage.setItem('token', token);
            } else {
                localStorage.removeItem('token');
            }
        },
        [token]
    );

    // will populate questions from db to the page
    const populateQs = () => {
        axios
            .get('/api/question')
            .then((res) => setPopQs(res.data))
            .catch((err) => console.log(err));
    };

    // handles the submission of a new question
    function qSubmit() {
        axios
            .post('/api/newQuestion', { newQ }, { headers: { Authorization: "Bearer " + token } })
            .then((result) => {
                if (result.status === 200) {
                    return alert('Question submitted!');
                } else {
                    return alert("Sorry, something didn't work!");
                }
            })
            .catch((err) => console.log(err));
    }

    return (
        <>
            {guest ? (
                //Guest User!
                <>
                    <Box className={classes.boxStyle}>
                        <Typography variant='h2'>
                            Frequently Asked Questions
                        </Typography>
                        <Typography variant='h6'>
                            All Questions have been answered by a member of the
                            Deaf community.
                        </Typography>
                    </Box>
                </>
            ) : (
                //Registered User!
                <>
                    <Box className={classes.boxStyle}>
                        <Typography variant='h2'>
                            Frequently Asked Questions
                        </Typography>
                        <Typography variant='h6'>
                            All Questions have been answered by a member of the
                            Deaf community.
                        </Typography>
                    </Box>
                    {/* Question component that should only be visible on log on */}

                    <Box className={classes.boxStyleTwo}>
                        <Typography variant='p' className={classes.paraStyles}>
                            Have a question that wasn't answered below? Ask a
                            question and get a response from Admins!
                        </Typography>
                        <br />
                        <form>
                            <TextField
                                type='text'
                                label='Ask a question'
                                id='questionInput'
                                variant='outlined'
                                className={classes.inputStyle}
                                value={newQ}
                                onChange={(e) => {
                                    setNewQ(e.target.value);
                                }}
                            />
                            <Button
                                className={classes.mainBtn}
                                onClick={qSubmit}>
                                Submit
                            </Button>
                        </form>
                    </Box>
                </>
            )}
            <div>
                {popQs ? (
                    /* Questions Section */
                    <>
                        <Box className={classes.boxStyle}>
                            {popQs.map((qa) => (
                                <>
                                    <Question
                                        key={qa._id}
                                        question={qa.question}
                                        answer={qa.answer}
                                        id={qa._id}
                                    />
                                </>
                            ))}
                        </Box>
                    </>
                ) : (
                    <>
                        <p>No questions</p>
                    </>
                )}
                <Footer />
            </div>
        </>
    );
}
export default FAQ;
