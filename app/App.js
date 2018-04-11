import React, {Component} from 'react'

import SigninView from './views/SigninView';
import MainView from './views/MainView';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            isLogined: false
        };

        this.onLogin = this.onLogin.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    componentWillMount() {

    }

    onLogin() {
        this.setState({
            isLogined: true
        })
    };

    onLogout() {
        this.setState({
            isLogined: false
        })
    };

    render() {
        const { isLogined } = this.state;

        if(isLogined) {
            return (
                <MainView/>
            )
        }
        else {
            return (
                <SigninView
                    onLogin={this.onLogin}
                />
            )
        }
    }
}
