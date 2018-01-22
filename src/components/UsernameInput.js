import React, { Component } from 'react';

class UsernameInput extends Component {
    render(){
        return (
            <p>User name: <input type="text" className="username" id="user-name" /></p>
        )
    }
}

export default UsernameInput