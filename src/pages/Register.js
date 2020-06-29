import * as React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { TextField, Button, Card } from "@material-ui/core";

function Register() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [resText, setResText] = React.useState('');

    function postRegister(){
        axios
        .post("/auth/register", {
            email,
            password
        })
        .then((result) => {
            const data = result.data;
            if (result.status === 200) {
                return setResText(data);
            } else {
                setResText("Error");
            }
        });
    }
    return (
        <>
            <div>
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
                    </Button>
                </Card>
            </div>
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

export default Register;


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
//             label="Enter Your Password"
//             variant="outlined"
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
//             primary={"true"}
//             style={styles.button}
//             onClick={postRegister}>
//             Register
//         </Button>
//         <br />
//         <Button style={styles.button}>
//             <Link to="/login" style={styles.link}>
//                 Already have an account?
//             </Link>
//             { isError &&<p>The username or password provided were incorrect!</p> }
//         </Button>
//     </Card>
//     )}