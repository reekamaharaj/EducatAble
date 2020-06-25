import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
// import { useAuth } from "../context/auth";
import { Redirect } from "react-router";
import { TextField, Button, Card } from "@material-ui/core";

function Register(props) {
    const [isRegistered, setRegistered] = useState(false);
    const [isError, setIsError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const { setAuthTokens } = useAuth();

    function postRegister() {
        axios
            .post("/auth/register", {
                email,
                password
            })
            .then((result) => {
                if (result.status === 200) {
                    // setAuthTokens(result.data);
                    setRegistered(true);
                } else {
                    setIsError(true);
                }
            });
            //very basic registration setup. Still needs authentication and validation to be added. BUT it will create a user and enter them into the database.
    }

    //works -> will comment out until logout is set up
    // if (isRegistered === true) {
    //     return <Redirect to="/login" />;
    // }

    return (
        <React.Fragment>
            <div>
                <br />
                <Card style={styles.card}>
                    <br />
                    <TextField
                        style={styles.text}
                        id="standard-basic"
                        label="Enter Your Email"
                        variant="outlined"
                        type="username"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        placeholder="email"
                    />
                    <br />
                    <TextField
                        style={styles.text}
                        id="filled-password-input"
                        label="Enter Your Password"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        placeholder="password"
                    />
                    <br />
                    <Button
                        variant="contained"
                        primary={"true"}
                        style={styles.button}
                        onClick={postRegister}>
                        Register
                    </Button>
                    <br />
                    <Button style={styles.button}>
                        <Link to="/login" style={styles.link}>
                            Already have an account?
                        </Link>
                        { isError &&<Error>The username or password provided were incorrect!</Error> }
                    </Button>
                </Card>
            </div>
        </React.Fragment>
    );
}
const styles = {
    button: {
        margin: 10,
        background: "linear-gradient(45deg, #254E58 30%, #88BDBC 90%)",
        border: 0,
        borderRadius: 3,
        color: "white",
        height: 48,
        padding: "0 30px",
    },

    card: {
        boxSizing: "border-box",
        maxWidth: "300px",
        margin: "auto",
        textAlign: "center",
    },

    text: {
        margin: 15,
    },
    link: {
        textDecoration: "none",
        color: "white",
    },
};
export default Register;