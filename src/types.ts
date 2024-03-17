interface LoginParams {
    email: string;
    password: string;
}

interface AccessTokenResponse{
    accessToken: string;
    refreshToken: string;
}

interface UserAuthConfig {
    userInfo: UserInfo;
    sidebarItems: SidebarItem[];
    companyName: string;
}

interface SidebarItem {
    group: string;
    title: string;
    path: string;
}

interface SideBarProps {
    companyName: string;
    userInfo: UserInfo;
    menuList: SidebarItem[];
}

interface UserInfo {
    username: string;
    email: string;
}

interface Task {
    id: number;
    title: string;
    description: string;
    status: "open" | "in-progress" | "done";
    createdAt: string;
}