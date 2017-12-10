import './main.scss';
import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { Header } from '../../Header';
import { Dashboard } from '../../Dashboard';
import PropTypes from 'prop-types';

export const Main = ({ children }) => {
    return (
        <div>
            <Helmet>
                <title>League Planner</title>
                <meta name="description" content="league-planner" />
            </Helmet>
            <Header />
            <div className="row">
                <div className="col-xs-12 main-content">
                    <div className="main-content-page">
                        <Switch>
                            <Route path="/dashboard" component={Dashboard} />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
