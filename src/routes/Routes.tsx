import { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from "../pages";
import { AppView } from "../components/app-view/AppView";
import classes from './Routes.module.scss';

const Routes:FC = () => {
    return (
        <div className={classes.routesWrapper}>
            <Router>
                <Switch>
                    <Route path="/login" exact component={ Login } />
                    <AppView />
                </Switch>
            </Router>
        </div>
    )
}
export { Routes };