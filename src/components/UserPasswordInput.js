import React from 'react';

class UserPasswordInput extends React.Component {
    render(){
        return (
            <p>password: <input type="text" className="password" id="password" /></p>
        )
    }
}

export default UserPasswordInput