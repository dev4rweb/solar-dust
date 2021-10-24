import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {publicRoutes} from "../routes";
import {HOME_PAGE} from "../utils/consts";

const AppRouter = () => {
    return (
        <Switch>
            {
                publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>
                )
            }
            <Redirect to={HOME_PAGE} />
        </Switch>
    );
};

export default AppRouter;