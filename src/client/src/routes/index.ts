import ProductItems from '../views/ProductItems/ProductItems';

const dashboardRoutes = [
    {
        path: "/table",
        name: "Items",
        icon: "content_paste",
        component: ProductItems,
        layout: "/admin"
    }
];

export default dashboardRoutes;
