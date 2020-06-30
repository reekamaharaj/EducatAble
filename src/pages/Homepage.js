import * as React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Logo from "../components/Logo";
import LearnMore from "../components/LearnMore";
import DYKSection from "../components/DYKSection";
import Resources from "../components/Resources";
import Footer from "../components/Footer";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        backgroundColor: "#72A0C1",
    },
});

function Homepage() {
    const classes = useStyles();
    const [token, setToken] = React.useState(localStorage.getItem("token"));
    const guest = !token;
    const logout = () => setToken("");

    React.useEffect(function(){
        if(!!token){
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
        }
    }, [token]);

    return (
        <>
            {guest ? (
                //Guest User!
                <p>
                    If you would like to save anything or submit a question
                    please login or create and account!
                </p>
            ) : (
                //Registered User!
                <>
                    <p>You are logged </p>
                    <Button variant="contained" onClick={logout}>
                        Logout
                    </Button>
                </>
            )}

            <div style={{ width: "100%" }} className={classes.root}>
                <Container className={classes.root}>
                    <Logo />
                    <LearnMore />
                </Container>
                <Box display="flex" flexWrap="nowrap" p={1} m={1}>
                    <DYKSection />
                    <Resources />
                </Box>
                <Footer />
            </div>
        </>
    );
}

export default Homepage;
