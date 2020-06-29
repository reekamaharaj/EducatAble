import * as React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { TextField, Button, Card } from "@material-ui/core";

function Login() {
    const [isError, setIsError] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [resText, setResText] = React.useState("");

    function postLogin(){
        axios
        .post("/auth/login", {
            email,
            password
        })
        .then((result) => { 
            const data = result.data;
            if (result.status === 200) {
                setIsError(false);
                console.log(data);
                return setResText(data);
            } else {
                setIsError(true);
                return setResText("Username or password was incorrect");
            }
        });
        }

    return (
        <>
            <br />
                <Card style={styles.card}>
                    <Button style={styles.button}>{resText}</Button>
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
                        variant="outlined"
                        label="Enter Your Password"
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
                        onClick={postLogin}
                        style={styles.button}>
                        Log-in
                    </Button>
                    <br />
                    <Button style={styles.button}>
                        <Link to="/register" style={styles.link}>
                            Don't have an account?
                        </Link>
                    </Button>
                </Card>
        </>
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

export default Login;


// {setIsError === true ? (
//     <Card style={styles.card}>
//         <p>You are logged in as: {email} </p>
//     </Card>
// ) : (
//     <Card style={styles.card}>
//         <br />
//         <TextField
//             style={styles.text}
//             id="standard-basic"
//             label="Enter Your Email"
//             variant="outlined"
//             type="username"
//             value={email}
//             onChange={(e) => {
//                 setEmail(e.target.value);
//             }}
//             placeholder="email"
//         />
//         <br />
//         <TextField
//             style={styles.text}
//             id="filled-password-input"
//             variant="outlined"
//             label="Enter Your Password"
//             type="password"
//             value={password}
//             onChange={(e) => {
//                 setPassword(e.target.value);
//             }}
//             placeholder="password"
//         />
//         <br />
//         <Button
//             variant="contained"
//             onClick={postLogin}
//             style={styles.button}>
//             Log-in
//         </Button>
//         <br />
//         <Button style={styles.button}>
//             <Link to="/register" style={styles.link}>
//                 Don't have an account?
//             </Link>
//             { isError &&<p>The username or password provided were incorrect!</p> }
//         </Button>
//     </Card>
// )}