import { ThemeProvider } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import theme from "./theme";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import { getUserAuthConfig } from "../services/auth";

export function Layout() {
    const [authUserInfo, setAuthUserInfo] = useState<AuthUserInfo>({
        name: '',
        email: '',
        companyName: '',
        menus: [],
    });

    const token = localStorage.getItem('token');
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    const fetchUserAuthConfig = async () => {
        const authUserInfo = await getUserAuthConfig(token);
        setAuthUserInfo(authUserInfo);
    };

    useEffect(() => {
        fetchUserAuthConfig();
    }, [])


    return (
        <>
            <ThemeProvider theme={theme}>
                <div className="flex h-full">
                    <div className="flex h-full w-[280px]">
                        <SideBar menus={authUserInfo.menus}
                            userInfo={{ name: authUserInfo.name, email: authUserInfo.email }}
                            companyName={authUserInfo.companyName} />
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
