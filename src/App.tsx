import * as React from 'react';
import { Route, Link } from 'react-router-dom';

import { routes, RouteConfig } from "./routes";

const RouteWithSubRoutes = (route: RouteConfig) => (
    <Route path={ route.path } render={ props => (
        <route.component {...props} routes={ route.routes } />
    ) } />
)

export const App = () => {
    return (
        <div>
            <nav><Link to="/">Home</Link> | <Link to="/page1">Page 1</Link> | <Link to="/page2">Page 2</Link> | <Link to="/static">Page 3</Link></nav>
            { routes.map((route, i) => <RouteWithSubRoutes key={ i } {...route} />) }
        </div>
    )
}
