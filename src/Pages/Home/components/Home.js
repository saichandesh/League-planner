import './home.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
    render() {
        return (
            <div className="home-page">
                <header>Welcome to League Planner</header>
                <Link to="./dashboard">
                    <button className="btn btn-primary">Login</button>
                </Link>
            </div>);
    }
}

export default Home;