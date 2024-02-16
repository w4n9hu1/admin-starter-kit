import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';


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
            <div className=" flex items-center hover:bg-zinc-600 cursor-pointer w-full p-4 rounded">
                <div className="grow">
                    <p>  {props.userInfo.username}</p>
                    <p className="text-sm text-zinc-300">  {props.userInfo.email}</p>
                </div>
                <MenuIcon />
            </div>
        </div >
    )
}