import ProductItems from '../views/ProductItems/ProductItems';
import {localeMessages} from '../services/locale-service';

const dashboardRoutes = [
    {
        path: "/table",
        name: localeMessages.products,
        icon: "content_paste",
        component: ProductItems,
        layout: "/admin"
    }
];

export default dashboardRoutes;
