/* eslint-disable no-unused-vars */
import { BsArrowLeftShort, BsChevronDown } from "react-icons/bs"
import { ImStatsBars } from "react-icons/im";
import { IoReceiptSharp } from "react-icons/io5";
import { TbReportMoney, TbUsersPlus } from "react-icons/tb";
import { BiSolidPurchaseTagAlt } from "react-icons/bi";
import { Avatar } from "@nextui-org/react";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import LogoutButton from "./LogOut";

const Menus = [
    {
        title: "Inventario",
        icon: <ImStatsBars />,
        path: "",
        submenu: true,
        submenuItems: [
            {
                title: "Estadísticas",
                path: "/dashboard/statistics",
            },
            {
                title: "Gestionar inventario",
                path: "/dashboard/manage",

            },
        ],
    },
    {
        title: "Gestión de ventas",
        path: "",
        icon: <BiSolidPurchaseTagAlt />,
        submenu: true,
        submenuItems: [
            {
                title: "Factura de venta",
                path: "/dashboard/sales",
            },
        ],
    },
    {
        title: "Gestión de compras",
        path: "",
        icon: <IoReceiptSharp />,
        submenu: true,
        submenuItems: [
            {
                title: "Gestión de usuarios",
                path: "*"
            },
        ],
    },
    {
        title: "Reportes",
        path: "",
        icon: <TbReportMoney />,
        submenu: true,
        submenuItems: [
            {
                title: "Gastos operacionales",
                path: "",
            },
            {
                title: "Balance",
                path: "",
            },
            {
                title: "Gastos no operacionales",
                path: "",
            },
        ],
    },
    {
        title: "Gestión de Usuarios",
        path: "",
        icon: <TbUsersPlus />,
        submenu: true,
        submenuItems: [
            {
                title: "Gestión de usuarios",
                path: "",
            },
        ],
    },
];


export const MenuElement = () => {
    const [open, setOpen] = useState(true)
    const [submenuOpen, setSubmenuOpen] = useState(Array(Menus.length).fill(false));
    const handleSubmenuToggle = (index) => {
        const newSubmenuOpen = [...submenuOpen];
        newSubmenuOpen[index] = !newSubmenuOpen[index];
        setSubmenuOpen(newSubmenuOpen);
    };
    return (
        <div className="flex">
            <div className={`bg-blue-900 h-screen rounded-xl p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
                <BsArrowLeftShort className={`bg-white text-black text-3xl rounded-full absolute -right-3 top-9 border-2 cursor-pointer ${!open && "rotate-180"} duration-300`} onClick={() => setOpen(!open)} />
                <div className="inline-flex items-center">
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" className="text-4xl rounded cursor-pointer block float-left mr-2" />
                    <h1 className={` origin-left font-medium text-2xl duration-300 text-white ${!open && "scale-0"}`}>React</h1>
                </div>
                <ul className="pt-2 capitalize">
                    {Menus.map((menu, index) => (
                        <li key={index} className="relative">
                            <h1 className={`text-white text-sm flex items-center gap-x-4 p-2 cursor-pointer hover:bg-blue-800 rounded-md mt-2"`} onClick={() => handleSubmenuToggle(index)} style={{ userSelect: "none" }} >
                                <span className="text-2xl block float-left">
                                    {menu.icon ? menu.icon : <ImStatsBars />}
                                </span>
                                <span className={`text-base font-medium flex-1 duration-300 transition-opacity ${!open && 'opacity-0 h-0'}`}>{menu.title}</span>
                                {menu.submenu && open && (
                                    <BsChevronDown className={`${submenuOpen[index] && "rotate-180"} duration-300`} />
                                )}
                            </h1>
                            {menu.submenu && (
                                <ul className={`ml-6 ${submenuOpen[index] && open ? 'duration-300 transition-all opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                                    {menu.submenuItems.map((submenuItem, subIndex) => (
                                        <Link to={submenuItem.path} key={subIndex} className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-800  rounded-md">

                                            {submenuItem.title}

                                        </Link>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>

                <div className={`absolute bottom-10 ${open ? "left-0" : "left-3"} w-full p-2`}>
                    <LogoutButton minimized={!open} />
                </div>
            </div>
        </div>
    )
}
