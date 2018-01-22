import React from 'react';
import UsernameInput from './UsernameInput.js';
import UserPasswordInput from './UserPasswordInput.js';
import SubmitButton from './SubmitButton.js';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '1',
            password: '1'
        };
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUsername(event) {
        this.setState({ username: event.target.value });
    }
    handlePassword(event) {
        this.setState({ passowrd: event.target.value });
    }
    handleSubmit(event) {
        alert('username: ' + this.state.username);
        event.preventDefault();
    }
    render() {
        return (
            <form method='get'>
                <UsernameInput value={this.state.username} onChange={this.handleUsername} />
                <UserPasswordInput value={this.state.password} onChange={this.handlePassword} />
                <SubmitButton />
            </form>
        )
    }
}
export default LoginForm

