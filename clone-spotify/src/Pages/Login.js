import React, { Component } from 'react';
import '../styles/DefaultProps/index.css';
import Header from '../components/Header/Header';
import CredentialsButton from '../components/Button/CredentialsButton';
import Container from '../components/Container/Container';
import '../styles/pages/login/login.css';
import Row from '../components/Container/Row';
import Col from '../components/Container/Col';
import InputGroup from '../components/Input/InputGroup';
import { Link } from 'react-router-dom';
import Checkbox from '../components/Checkbox/Checkbox';
import Button from '../components/Button/Button';
import Hr from '../components/Container/Hr';

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
                <Container className="spotify-auth-container">
                    <div className="third-party-login">
                        <h3>To continue, log in to Spotify.</h3>
                        <div className="auth-buttons-wrapper">
                            <CredentialsButton className="facebook" label="Continue with Facebook" url="https://www.facebook.com/" />
                            <CredentialsButton className="apple" label="Continue with Apple" url="https://www.apple.com/uk/" />
                            <CredentialsButton className="google" label="Continue with Google" url="https://google.com" />
                            <CredentialsButton label="Continue with Phone Number" url="/login-phone-number" />
                        </div>
                    </div>
                    <Row>
                        <Col className="col-12">
                            <Hr>
                                <strong>or</strong>
                            </Hr>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-12">
                            <InputGroup 
                                label="Email adrress or username"
                                name="email-username"
                                placeholder="Email address or username"
                                error=""
                            />
                        </Col>
                        <Col className="col-12">
                            <InputGroup 
                                label="Password"
                                name="password"
                                type="password"
                                placeholder="Password"
                                error=""
                            />
                        </Col>
                    </Row>
                    <Row styleClass="flex-start">
                        <Col className="col-12">
                            <Link className="forgot-password" to="https://www.spotify.com/password-reset/">Forgot your password?</Link>
                        </Col>
                    </Row>
                    <Row styleClass="flex-start">
                        <Col className="col-12">
                            <Checkbox label="Remember Me" />
                        </Col>
                    </Row>
                    <Row>
                        <Button action="LOG IN" className="auth-btn" />
                    </Row>
                    <Row>
                        <Hr />
                    </Row>
                    <Row>
                        <div className="sign-up-option">
                            <h3>Don't have an account?</h3>
                            <Button action="SIGN UP FOR SPOTIFY" className="auth-btn sign-up" />
                        </div>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default Login
