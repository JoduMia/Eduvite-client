import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import ShowCourse from "../components/ShowCourse";
import Main from "../layouts/Main/Main";
import Secondary from "../layouts/Secondary";
import Checkout from "../pages/Checkout";
import Details from "../pages/Details";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Update from "../pages/Update";
import PrivateRoute from "./Private/PrivateRoute";

export const routes = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route path='/' element={<Main />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="update" element={<Update />} />
            <Route
                path="/detail/:id" element={<Details />}
                loader={({ params }) => fetch(`https://assignment10-server-seven.vercel.app/datas/${params.id}`)}
            />

            <Route
                path="/checkout/:id" element={<PrivateRoute><Checkout /></PrivateRoute>}
                loader={({ params }) => fetch(`https://assignment10-server-seven.vercel.app/datas/${params.id}`)}
            />
            <Route path="*" element={<NotFound />} />

            <Route path="/courses" element={<Secondary />}>
                <Route index element={<ShowCourse />} />
            </Route>
        </Route>
    </Route>
))