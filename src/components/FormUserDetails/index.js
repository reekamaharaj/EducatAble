import React, { Component } from "react";
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export class FormUserDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;
        const theme = createMuiTheme();

        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <AppBar title="Enter User Details" />
                    <TextField
                        hinttext="Enter Your First Name"
                        floatinglabeltext="First Name"
                        onChange={handleChange("firstName")}
                        defaultValue={values.firstName}
                    />
                    <br />
                    <TextField
                        hinttext="Enter Your Last Name"
                        floatinglabeltext="Last Name"
                        onChange={handleChange("lastName")}
                        defaultValue={values.lastName}
                    />
                    <br />
                    <TextField
                        hinttext="Enter Your Email"
                        floatinglabeltext="Email"
                        onChange={handleChange("email")}
                        defaultValue={values.email}
                    />
                    <br />
                    <Button
                        label="Continue"
                        primary={"true"}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 15,
    },
};

export default FormUserDetails;
