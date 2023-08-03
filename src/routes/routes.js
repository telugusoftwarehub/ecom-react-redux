import RegistrationPage from "../pages/registration_page";
import LandingPage from "../pages/landing_page";
import SmartPhones from "../components/smartphones";

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
        component: SmartPhones
    }
]
