import React, { Component } from 'react';
import '../styles/DefaultProps/index.css';
import Header from '../components/Header/Header';
import { Link } from 'react-router-dom';
import CredentialsButton from '../components/Button/CredentialsButton';

export class Login extends Component {
    constructor(){
        super();
        this.state={
            userCredencials: {
                email: "",
                username: "",
                password: ""
            }
        }
    }

    componentDidMount(){
        document.title = "Login-Spotify";
    }

    render() {
        return (
            <div className="App">
                <Header />
                <div className="third-party-login">
                    <h3>To continue, log in to Spotify.</h3>
                    <CredentialsButton className="facebook" label="Continue with Facebook" url="https://www.facebook.com/" />
                    <CredentialsButton className="apple" label="Continue with Apple" url="https://www.apple.com/uk/" />
                    <CredentialsButton className="google" label="Continue with Google" url="https://google.com" />
                    <CredentialsButton label="Continue with Phone Number" url="/login-phone-number" />
                </div>
            </div>
        )
    }
}

export default Login
