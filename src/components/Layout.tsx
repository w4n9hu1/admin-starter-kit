import { ThemeProvider, Tooltip } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import theme from "./theme";
import SideBar from "./SideBar";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useEffect, useState } from "react";
import { getUserAuthConfig } from "../api/auth";

export function Layout() {
    const [openSidebar, setOpenSidebar] = useState(true);
    const [userAuthConfig, setUserAuthConfig] = useState<UserAuthConfig>({
        sidebarItems: [],
        userInfo: { username: '', email: '' },
        companyName: ''
    });

    const fetchUserAuthConfig = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            return <Navigate to="/login" replace />;
        }
        const userAuthConfig = await getUserAuthConfig(token);
        setUserAuthConfig(userAuthConfig);
    };

    useEffect(() => {
        fetchUserAuthConfig();
    }, [])


    return (
        <>
            <ThemeProvider theme={theme}>
                <div className="flex h-full">
                    {openSidebar && <SideBar companyName={userAuthConfig.companyName}
                        userInfo={userAuthConfig.userInfo}
                        menuList={userAuthConfig.sidebarItems} />}
                    <div className="flex items-center bg-gray-100">
                        <div className="cursor-pointer text-zinc-600 hover:text-zinc-900" onClick={() => setOpenSidebar(!openSidebar)}>
                            {openSidebar ? <Tooltip title="Close sidebar" arrow><KeyboardArrowLeftIcon /></Tooltip> :
                                <Tooltip title="Open sidebar" arrow><KeyboardArrowRightIcon /></Tooltip>
                            }
                        </div>
                    </div>
                    <main className="bg-gray-100 w-full flex flex-col divide-y divide-gray-300">
                        <div className="p-6">
                            <h1 className="text-lg font-bold">Subtitle</h1>
                        </div>
                        <div className="p-6 grow flex overflow-auto">
                            <Outlet />
                        </div>
                    </main>
                </div>
            </ThemeProvider>
        </>
    );
}
