import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { Detail } from "../views/Detail";
import { Home } from "../views/Home";
import { View404 } from "../views/View404";

export function AppRouter() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/detail/:id" element={<Detail />}></Route>
            <Route path="*" element={<View404 />} />
        </Routes>
        </BrowserRouter>
    )
}