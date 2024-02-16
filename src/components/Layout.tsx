import { Button, ThemeProvider } from "@mui/material";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import theme from "./theme";
import SideBar from "./SideBar";

const testData: SidebarItem[] = [
    { group: 'Accounts', title: 'User Management', path: '/task' },
    { group: 'Accounts', title: 'Role Management', path: '/user' },
    { group: 'Tasks', title: 'Task List', path: '/task' },
    { group: 'Tasks', title: 'Task Assignments ', path: '/user' },
];

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
                <div className="flex h-full">
                    <SideBar companyName="Admin Starter Kit" userInfo={{ username: "Jessica Bona", email: "jessica@gmail.com" }} menuList={testData} />
                    <main>
                        <Outlet />
                        <Button onClick={handleLogout} variant="contained" color="secondary">Log out</Button>
                    </main>
                </div>
            </ThemeProvider>

        </>
    );
}
