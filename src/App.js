import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {RouterProvider , createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
const Cart = lazy (()=> import("./components/Cart"))

const AppLayout = () =>{
    return (
        <Provider store={appStore}>
        <div className="min-h-screen bg-white">
            <Header/>
            <Outlet/>
        </div>
        </Provider>
    )
}

const appRouter = createBrowserRouter([{
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
        {
            path: "/",
            element: <Body />,
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/contact',
            element: <Contact/>
        },
        {
            path: '/restaurant/:resId',
            element: <RestaurantMenu />
        },
        {
            path: '/cart',
            element: <Suspense fallback={<h1>Loading...</h1>}>
                <Cart/>
            </Suspense>
        }
    ]
}])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);