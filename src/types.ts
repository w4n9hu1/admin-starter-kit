interface LoginParams {
    email: string;
    password: string;
}

interface LoginResponse {
    token: string;
    user: {
        username: string;
        email: string;
    };
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