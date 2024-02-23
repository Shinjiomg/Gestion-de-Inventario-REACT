/* eslint-disable no-unused-vars */
import { BsArrowLeftShort, BsChevronDown } from "react-icons/bs"
import { ImStatsBars } from "react-icons/im";
import { IoReceiptSharp } from "react-icons/io5";
import { TbReportMoney, TbUsersPlus, TbLogout2 } from "react-icons/tb";
import { BiSolidPurchaseTagAlt } from "react-icons/bi";
import { Avatar } from "@nextui-org/react";
import React, { useState } from 'react';
import { Link } from "react-router-dom";

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
                title: "Gestión de usuarios"
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
export default function Menu() {
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
                <BsArrowLeftShort className={`bg-white text-black text-3xl rounded-full absolute -right-3 top-9 border-2 cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
                <div className="inline-flex items-center">
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" className={`text-4xl rounded  cursor-pointer block float-left mr-2 duration-500`} />
                    <h1 className={` origin-left font-medium text-2xl duration-300 text-white ${!open && "scale-0"}`}>React</h1>
                </div>
                <ul className="pt-2 capitalize">
                    {Menus.map((menu, index) => (
                        <li key={index} className="relative">
                            <a className="text-white text-sm flex items-center gap-x-4 p-2 cursor-pointer hover:bg-blue-800 rounded-md mt-2" onClick={() => handleSubmenuToggle(index)} >
                                <span className="text-2xl block float-left">
                                    {menu.icon ? menu.icon : <ImStatsBars />}
                                </span>
                                <span className={`text-base font-medium flex-1 duration-200 ${!open && 'hidden'}`}>{menu.title}</span>
                                {menu.submenu && open && (
                                    <BsChevronDown className={`${submenuOpen[index] && "rotate-180"}`} />
                                )}
                            </a>
                            {menu.submenu && submenuOpen[index] && open && (
                                <ul className="ml-6">
                                    {menu.submenuItems.map((submenuItem, subIndex) => (
                                        <li key={subIndex} className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-800  rounded-md">
                                            <Link to={submenuItem.path}>
                                                {submenuItem.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}