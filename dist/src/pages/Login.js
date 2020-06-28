"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var axios_1 = require("axios");
var core_1 = require("@material-ui/core");
function Login() {
    var _a = react_1.useState(false), isError = _a[0], setIsError = _a[1];
    var _b = react_1.useState(""), email = _b[0], setEmail = _b[1];
    var _c = react_1.useState(""), password = _c[0], setPassword = _c[1];
    var _d = react_1.useState(""), resText = _d[0], setResText = _d[1];
    function postLogin() {
        axios_1.default
            .post("/auth/login", {
            email: email,
            password: password
        })
            .then(function (result) {
            var data = result.data;
            if (result.status === 200) {
                setIsError(false);
                console.log(data);
                return setResText(data);
            }
            else {
                setIsError(true);
                return setResText("Username or password was incorrect");
            }
        });
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("br", null),
        react_1.default.createElement(core_1.Card, { style: styles.card },
            react_1.default.createElement(core_1.Button, { style: styles.button }, resText),
            react_1.default.createElement("br", null),
            react_1.default.createElement(core_1.TextField, { style: styles.text, id: "standard-basic", label: "Enter Your Email", variant: "outlined", type: "username", value: email, onChange: function (e) {
                    setEmail(e.target.value);
                }, placeholder: "email" }),
            react_1.default.createElement("br", null),
            react_1.default.createElement(core_1.TextField, { style: styles.text, id: "filled-password-input", variant: "outlined", label: "Enter Your Password", type: "password", value: password, onChange: function (e) {
                    setPassword(e.target.value);
                }, placeholder: "password" }),
            react_1.default.createElement("br", null),
            react_1.default.createElement(core_1.Button, { variant: "contained", onClick: postLogin, style: styles.button }, "Log-in"),
            react_1.default.createElement("br", null),
            react_1.default.createElement(core_1.Button, { style: styles.button },
                react_1.default.createElement(react_router_dom_1.Link, { to: "/register", style: styles.link }, "Don't have an account?")))));
}
var styles = {
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
exports.default = Login;
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
//# sourceMappingURL=Login.js.map