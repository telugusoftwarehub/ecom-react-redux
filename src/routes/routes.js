import RegistrationPage from "../pages/registration_page";
import LandingPage from "../pages/landing_page";
import Products from "../components/products";
import ProductDetails from "../pages/product_details_page";
import PaymentGateWay from "../pages/payment_page";

export const routes = [
    {
        path: "/",
        component: LandingPage
    },
    {
        path: "/registration",
        component: RegistrationPage
    },
    {
        path: "/products/:item",
        component: Products
    },
    {
        path: "/product/details/:id",
        component: ProductDetails
    },
    {
        path: "/buy",
        component: PaymentGateWay
    }
]
