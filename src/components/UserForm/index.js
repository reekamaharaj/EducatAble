import React, { Component } from "react";
import FormUserDetails from "../FormUserDetails";
import Confirm from "../Confirm";

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: "",
        lastName: "",
        email: ""
    };

    //Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1,
        });
    };

    // Go back prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1,
        });
    };

    // Handle fields change
    handleChange = (input) => (e) => {
        this.setState({ [input]: e.target.value });
    };

    render() {
        const { step } = this.state;
        const {
            firstName,
            lastName,
            email
        } = this.state;
        const values = { firstName, lastName, email };

        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );

            default:
        }
    }
}

export default UserForm;
