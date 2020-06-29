import { Component } from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { List, ListItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email },
    } = this.props;

    const theme = createMuiTheme();

    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar title='Confirm' />
          <List>
            <ListItem primaryText='First Name' secondaryText={firstName} />
            <ListItem primaryText='Last name' secondaryText={lastName} />
            <ListItem primaryText='Email' secondaryText={email} />
          </List>
          <br />
          <Button
            label='Confirm & Continue'
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <br />
          <Button
            label='Back'
            primary={false}
            style={styles.button}
            onClick={this.back}
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

export default Confirm;
