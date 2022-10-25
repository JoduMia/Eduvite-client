import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const routes = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={ <Main />}>
        <Route index element={ <Home /> } />
        <Route path="login" element={ <Login /> } />
        <Route path="register" element={ <Register /> } />
    </Route>
))