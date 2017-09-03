import Loadable from 'react-loadable';

import { StaticPage } from './StaticPage';

export interface RouteConfig {
    component: React.ComponentType<any>;
    path: string;
    exact?: boolean;
    routes?: RouteConfig[];
}

export const routes: RouteConfig[] = [
    {
        path: '/',
        exact: true,
        component: Loadable({
            loader: () => import(/* webpackChunkName: "home" */ './Home'),
            loading: () => null
        })
    },
    {
        path: '/page1',
        component: Loadable({
            loader: () => import(/* webpackChunkName: "page1" */ './Page1'),
            loading: () => null
        })
    },
    {
        path: '/page2',
        component: Loadable({
            loader: () => import(/* webpackChunkName: "page2" */ './Page2'),
            loading: () => null
        })
    },
    {
        path: '/static',
        component: StaticPage
    }
]
