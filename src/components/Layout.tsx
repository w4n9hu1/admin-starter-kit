import { ThemeProvider } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import theme from "./theme";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import { getUserAuthConfig } from "../api/auth";

export function Layout() {
    const [userAuthConfig, setUserAuthConfig] = useState<UserAuthConfig>({
        sidebarItems: [],
        userInfo: { username: '', email: '' },
        companyName: ''
    });

    const token = localStorage.getItem('token');
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    const fetchUserAuthConfig = async () => {
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
                    <div className="flex h-full fixed w-[240px] z-50">
                        <SideBar companyName={userAuthConfig.companyName}
                            userInfo={userAuthConfig.userInfo}
                            menuList={userAuthConfig.sidebarItems} />
                    </div>
                    <main className="bg-gray-100 w-full flex flex-col divide-y divide-gray-300 ml-[240px]">
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
