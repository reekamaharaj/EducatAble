
import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Question from "../components/Question";

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

const useStyle = makeStyles({
    boxStyle: {
        justifyContent: "center",
        padding: "20px",
        fontFamily: "Roboto, sans-serif",
        fontWeight: "700",
        color: "white",
        backgroundColor: "#72A0C1",
    },
});

function FAQ(props) {
    const classes = useStyle();

    return (
        <div>
            <div>
                <Box className={classes.boxStyle}>
                    <Typography variant="h2">
                        Frequently Asked Questions
                    </Typography>
                    <Typography variant="h6">
                        All Questions have been answered by a member of the Deaf
                        community.
                    </Typography>
                </Box>
                {savedQA.length > 0 ? (
                    /* Questions Section */
                    <Box className={classes.boxStyle}>
                        {savedQA.map(qa => 
                        <Question question={qa.question} answer={qa.answer} />
                        ) }
                    </Box>
                ) : (
                    <p>No questions</p>
                )}
            </div>
        </div>
    );
}

export default FAQ;
