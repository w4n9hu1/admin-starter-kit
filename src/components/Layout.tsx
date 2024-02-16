import { ThemeProvider, Tooltip, dividerClasses } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import theme from "./theme";
import SideBar from "./SideBar";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from "react";

const testData: SidebarItem[] = [
    { group: 'Accounts', title: 'User Management', path: '/task' },
    { group: 'Accounts', title: 'Role Management', path: '/user' },
    { group: 'Tasks', title: 'Task List', path: '/task' },
    { group: 'Tasks', title: 'Task Assignments ', path: '/user' },
];

export function Layout() {
    const [openSidebar, setOpenSidebar] = useState(true);

    if (localStorage.getItem('token') == null) {
        return <Navigate to="/login" replace />;
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <div className="flex h-full">
                    {openSidebar && <SideBar companyName="Admin Starter Kit"
                        userInfo={{ username: "Jessica Bona", email: "jessica@gmail.com" }}
                        menuList={testData} />}
                    <div className="flex items-center">
                        <div className="cursor-pointer text-zinc-600 hover:text-zinc-900" onClick={() => setOpenSidebar(!openSidebar)}>
                            {openSidebar ? <Tooltip title="Close sidebar" arrow><KeyboardArrowLeftIcon /></Tooltip> :
                                <Tooltip title="Open sidebar" arrow><KeyboardArrowRightIcon /></Tooltip>
                            }
                        </div>
                    </div>
                    <main>
                        <Outlet />
                    </main>
                </div>
            </ThemeProvider>
        </>
    );
}
