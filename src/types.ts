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