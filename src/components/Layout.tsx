import { Button, ThemeProvider } from "@mui/material";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import theme from "./theme";

export function Layout() {
    const navigate = useNavigate();

    if (localStorage.getItem('token') == null) {
        return <Navigate to="/login" replace />;
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/user">User</Link>
                        </li>
                        <li>
                            <Link to="/task">Task</Link>
                        </li>
                    </ul>
                </nav>

                <Outlet />
                <Button onClick={handleLogout} variant="contained" color="secondary">Log out</Button>
            </ThemeProvider>

        </>
    );
}
