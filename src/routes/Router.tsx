import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {AuthLayout} from "../layouts/AuthLayout.tsx";
import {Login} from "../pages/auth/Login.tsx";
import {Register} from "../pages/auth/Register.tsx";

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AuthLayout />}>
                    <Route index element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
            </Routes>
        </Router>
    )
}