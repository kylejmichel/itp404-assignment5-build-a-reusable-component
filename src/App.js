import React from 'react';
import CheckPassword from './CheckPassword'
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      shouldHide: false
    };
  }
  handleCheck = (event) => {
    this.setState({password: event.target.value})

    if(event.target.value.length > 9) {
      this.setState({shouldHide: true})
    }
    else {
      this.setState({shouldHide: false})
    }

    console.log(this.state.password)
  }
  render() {
  return (
    <div className="App">
    <h1>Enter Your New Password</h1>
    <p>In order to complete your account setup, you'll need to select a password.</p>
    <CheckPassword min={10} password={this.state.password}>
        {
          (remaining) => {
              return (
                <div>
                <input
                  className="password"
                  type="password"
                  placeholder="Please enter your password"
                  onChange={this.handleCheck}
                  minlength="10"
                  maxlength="30"
                  />
                  <div className={this.state.shouldHide ? 'hidden' : ''}>
                  Please enter at least {remaining} more characters
                  </div>
                </div>
              );
            }

          }

      </CheckPassword>
      <div>
        <h2>Usage</h2>
        <p>Developers can use this to quickly create a password input that ensures that the password is within a certain range of characters. The component is set up to both check the min/max values, but also give the user feedback.</p><br />
        <p>I was motivated to make a password input because I was going to use Facebook as inspiration to find components I could build. I forgot my password to Facebook, reset it, and was inspired by the constraints regarding the password itself.</p><br />
        <p>This is reusable because developers can easy changee the min and max lengths, placeholders, error message, the styling, and the containers and context for the component.</p><br />
        <p>I named it CheckPassword because that is what it does. I also named the prop min because it is the minimum length that a password should have. I named password as I did instead of text because I thought it was more specific.</p><br />
      </div>
    </div>
  );
}
}
