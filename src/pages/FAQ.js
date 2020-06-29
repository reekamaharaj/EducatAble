import * as React from "react";
import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Question from "../components/Question";
import Footer from "../components/Footer/index";

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
    {
        question: "Can all Deaf people read lips?",
        answer:
            "Again, the short answer is, no. Don’t assume that all deaf people can read lips. Don’t ask them ‘Can you read my lips?’ If deaf people cannot understand you, be patient and repeat what you said. Or if someone prefers to communicate via sign, and you don’t know how to sign, offer to write via pen and paper or use your phone. It’s really annoying when someone says ‘cAn yOu rEaD mY LiPs’ and deaf people have to really work hard to understand what you’re saying, it’s exhausting. It also creates more room for miscommunication/misunderstanding. Do the right thing by either being patient to repeat something you said or write it down.",
    },
    {
        question: "What is Deaf culture?",
        answer:
            "Yes, you read that right. Deaf culture is a thing. Deaf culture has a language (American Sign Language/or Sign Languages), it’s own grammar and syntax, poems, music, dance, songs, ideas, norms, idioms, nuances, and much more. This doesn’t mean that all deaf people associate themselves with Deaf culture. Again, there’s a wide continuum of deaf folks out there with varying levels of deafness.",
    },
    {
        question: "What kinds of barriers do Deaf people face everyday?",
        answer:
            "Communication barriers, discrimination, oppression, and exclusion, to name a few. Read further on barriers here, it's worth the read.",
    },
    {
        question: "What is dinner table syndrome?",
        answer:
            "Ah, good ol’ dinner table syndrome. Dinner Table Syndrome is real. There are different variations of it, but it occurs way too often, unfortunately. For five minutes, imagine that you cannot hear. You’re sitting down at the table with your family who can hear. They’re laughing about something really hilarious and you don’t know what it is. So you naturally ask your neighbor, what’s so funny? ‘Oh it’s not important’, ‘I’ll tell you later (but really don’t), ‘It’s nothing’, ‘Nevermind’, and many more. What’s happening here is: Your neighbor is too lazy or doesn’t want to spend the time explaining to you what happened. How do you feel?",
    },
    {
        question: "Can Deaf people drive?",
        answer:
            "Yes, Deaf people can drive. As a matter of fact, studies show that Deaf people are really good drivers (not all, though). Deaf people are very highly attuned to our surroundings and rely heavily on sight awareness.",
    },
    {
        question: "Is American Sign Language (ASL) an universal language?",
        answer:
            "No, American Sign Language is not a universal language. There are 135 sign languages around the world, maybe more. ",
    },
    {
        question:
            "I don’t like saying deaf, I prefer to say hearing-impaired. Why is hearing impaired wrong?",
        answer:
            "We deaf folks prefer to be called deaf. While we understand that ‘hearing-impaired’ may seem more logical and polite, it’s actually the opposite. Deaf people take offense because the word ‘impaired’ means that something is broken in the dictionary. There’s absolutely nothing wrong with being deaf. We just cannot hear.",
    },
    {
        question: "Do Deaf people listen to music?",
        answer:
            "Not all Deaf people like music, but a lot of deaf people do! Many Deaf people love to feel/listen to bass music with heavy vibrations. Those with cochlear implants may like varieties of music. Some don’t really care for music, and that’s okay! ",
    },
    {
        question: "How can I learn American Sign Language?",
        answer:
            "There are many ways to do so! First, ask yourself, is American Sign Language something that you really want to learn because it seems easy? It’s not easy. I picked up American Sign Language at the age of 21 and 7 years later, I’m still learning with full immersion in the language. The ASL App is a fantastic start: https://theaslapp.com/. If you want more, look into your local community college for classes. Many community colleges will offer ASL classes. Or, hire a deaf person to be your tutor!",
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
    }
});

// const [resText, setResText] = React.useState("");
// function logOut() {
//     axios.post("/auth/logout").then((result) => {
//         const data = result.data;
//         if (result.status === 200) {
//             console.log(data);
//             return setResText(data);
//         } else {
//             return setResText("Not logged in, you can't log out.");
//         }
//     });
// }

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
                        {savedQA.map((qa) => (
                            <Question
                                question={qa.question}
                                answer={qa.answer}
                            />
                        ))}
                    </Box>
                ) : (
                    <p>No questions</p>
                )}
            </div>
            <Footer />
        </div>
    );
}
export default FAQ;
