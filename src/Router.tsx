import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Booking } from "./pages/Booking";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },

            {
                path: "/booking",
                element: <Booking></Booking>
            },

            {
                path: "/contact",
                element: <Contact></Contact>
            },

            {
                path: "/about",
                element: <About></About>
            },
        ]
    }
])