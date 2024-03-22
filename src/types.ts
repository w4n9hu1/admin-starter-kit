interface LoginParams {
    email: string;
    password: string;
}

interface AccessTokenResponse {
    accessToken: string;
    refreshToken: string;
}

interface AuthUserInfo {
    name: string;
    email: string;
    companyName: string;
    menus: SidebarItem[];
}

interface SidebarItem {
    group: string;
    name: string;
    path: string;
}

interface SideBarProps {
    companyName: string;
    userInfo: UserInfo;
    menus: SidebarItem[];
}

interface UserInfo {
    name: string;
    email: string;
}

interface Task {
    id: number;
    title: string;
    description: string;
    status: "open" | "in-progress" | "done";
    createdAt: string;
}