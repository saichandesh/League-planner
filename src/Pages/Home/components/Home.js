import './home.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { actions } from '../'

export class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
    }

    componentWillMount() {
        const { history, loggedIn } = this.props;
        if(loggedIn) {
            history.pushState(null, '/dashboard');
        }
    }

    render() {
        return (
            <div className="home-page">
                <header>Welcome to League Planner</header>
                <Link onClick={this.props.performLogin(true)} to="/dashboard">
                    <button className="btn btn-primary">Login</button>
                </Link>
            </div>);
    }
}

function mapStatetoProps(state) {
    return {
        loggedIn: state.auth.loggedIn
    };
}

function mapDispatchtoProps(dispatch) {
    return {
        performLogin: (login) => {
            dispatch(actions.performLogin(login));
        }
    };
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Home);