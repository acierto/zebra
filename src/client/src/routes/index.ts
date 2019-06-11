// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';
// core components/views for Admin layout
import DashboardPage from '../views/Dashboard/Dashboard';
import ProductItems from '../views/ProductItems/ProductItems';

const dashboardRoutes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        icon: Dashboard,
        component: DashboardPage,
        layout: '/admin'
    },
    {
        path: "/table",
        name: "Items",
        icon: "content_paste",
        component: ProductItems,
        layout: "/admin"
    }
];

export default dashboardRoutes;
