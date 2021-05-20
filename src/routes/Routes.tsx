import { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from "../pages";
import { AppView } from "../components/AppView";
import classes from './Routes.module.scss';

const Routes:FC = () => {
    return (
        <div className={classes.routesWrapper}>
            <div className={classes.routes}>
                <Router>
                    <Switch>
                        <Route path="/login" component={ Login } />
                        <AppView />
                    </Switch>
                </Router>
            </div>
        </div>
    )
}
export { Routes };