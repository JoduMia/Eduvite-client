import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import SideNav from "../components/others/SideNav";
import Main from "../layouts/Main/Main";
import Details from "../pages/Details";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const routes = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={ <Main />}>
        <Route index element={ <Home /> } />
        <Route path="login" element={ <Login /> } />
        <Route path="register" element={ <Register /> } />
        <Route path="sideNav" element={ <SideNav /> }
            loader={()=> fetch('https://assignment10-server-seven.vercel.app/datas')}
        />
        <Route
            path="detail/:id" element={<Details />}
            loader={({params}) => fetch(`https://assignment10-server-seven.vercel.app/datas/${params.id}`)}
        />
    </Route>
))