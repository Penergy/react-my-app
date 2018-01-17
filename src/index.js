import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import LoginForm from './components/LoginForm.js'

import './index.css';

ReactDOM.render(
    <LoginForm />,
    // <LoginControl isLoggedIn={true} />,
    // <Greeting isLoggedIn={true} />,
    document.getElementById('root')
);