import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { Detail } from "../views/Detail";
import { Home } from "../views/Home";
import { UsersView } from "../views/UsersView";
import { View404 } from "../views/View404";

export function AppRouter() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/users" element={<UsersView />}></Route>
            <Route path="/user/detail/:id" element={<Detail />}></Route>
            <Route path="*" element={<View404 />} />
        </Routes>
        </BrowserRouter>
    )
}