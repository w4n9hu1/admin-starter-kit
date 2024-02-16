import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import FaceIcon from '@mui/icons-material/Face';

export default function SideBar(props: SideBarProps) {
    const [openMenuList, setOpenMenuList] = useState([] as string[]);

    const groupedMenus: Record<string, SidebarItem[]> = {};
    props.menuList.forEach(item => {
        if (groupedMenus[item.group]) {
            groupedMenus[item.group].push(item);
        } else {
            groupedMenus[item.group] = [item];
        }
    });

    const handleClickMenu = (menu: string) => {
        if (openMenuList.includes(menu)) {
            setOpenMenuList(openMenuList.filter(item => item !== menu));
        } else {
            setOpenMenuList([...openMenuList, menu]);
        }
    }

    return (
        <div className="flex flex-col bg-zinc-900 text-white w-[280px]">
            <div className="text-lg font-bold py-8 text-center border-zinc-700 border-b-1 border">
                <Link to="/">
                    <h1 >{props.companyName}</h1>
                </Link>
            </div>
            <nav className="grow overflow-y-auto pt-6">
                {
                    Object.entries(groupedMenus).map(([group, items]) => (
                        <div key={group}>
                            <div className="flex py-2 px-4 rounded hover:bg-zinc-600 cursor-pointer" onClick={() => handleClickMenu(group)}>
                                <p className="grow">{group}</p>
                                {openMenuList.includes(group) ? <ExpandLess /> : <ExpandMore />}
                            </div>
                            <div className="text-sm ">
                                {openMenuList.includes(group) && (
                                    items.map((menuItem, index) => (
                                        <div key={index} className="pl-4">
                                            <Link className="block py-2 px-8 truncate rounded hover:bg-zinc-600" to={menuItem.path}>{menuItem.title}</Link>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    ))
                }
            </nav>
            <SidebarFooter userInfo={props.userInfo} />
        </div >
    )
}

function SidebarFooter({ userInfo }: { userInfo: { username: string, email: string } }) {
    const navigate = useNavigate();

    const [openSettings, setOpenSettings] = useState(false);
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <>
            {openSettings && <div className="flex flex-col bg-zinc-800 text-sm m-4 rounded">
                <div className="hover:bg-zinc-600 cursor-pointer p-4 rounded flex items-center">
                    <div className="mr-2"> <SettingsIcon /></div>
                    Settings
                </div>
                <div className="hover:bg-zinc-600 cursor-pointer p-4 rounded flex items-center" onClick={handleLogout} >
                    <div className="mr-2"> <LogoutIcon /></div>
                    Log out
                </div>
            </div>}
            <div className=" flex items-center hover:bg-zinc-600 cursor-pointer w-full p-4 rounded" onClick={() => setOpenSettings(!openSettings)}>
                <div className="mr-4">
                    <FaceIcon />
                </div>
                <div className="grow" >
                    <p>  {userInfo.username}</p>
                    <p className="text-sm text-zinc-300">  {userInfo.email}</p>
                </div>
                <MenuIcon />
            </div>
        </>
    )
}