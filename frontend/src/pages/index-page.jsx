import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {Navbar, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import {Avatar, AvatarGroup, AvatarIcon} from "@nextui-org/react";
import './index-page.css'
import { userIcon, receiptIcon, statisticsIcon, shopingIcon, registerIcon } from '../assets/icons';


export default function IndexPage() {

    return (

        <>
            <div className='navbar'>
                <div className='flex flex-row items-center justify-around pt-4 pl-4 pb-4 pr-4'>
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                react
                </div>
                <hr />
                <div className='inventario flex flex-col items-start  pb-4'>
                    <p className='pb-2 pt-6'>inventario</p>
                    <span><button>{ statisticsIcon } estadisticas</button></span>
                    <span><button>{ statisticsIcon } gestionar inventario</button></span>
                </div>
                <div className='ventas flex flex-col items-start pb-4'>
                    <p className='pb-2'>gestion de ventas</p>
                    <span><button>{ receiptIcon } factura de venta</button></span>
                </div>
                <div className='usuarios flex flex-col items-start pb-4'>
                    <p className='pb-2'>gestion de usuarios</p>
                    <span><button>{ userIcon } usuarios</button></span>
                </div>
                <div className='compras flex flex-col items-start pb-4'>
                    <p className='pb-2'>gestion de compras</p>
                    <span><button>{ shopingIcon } compras</button></span>
                    <span><button>{ receiptIcon } factura de compras</button></span>
                    <span><button>{ registerIcon } registro de gastos</button></span>
                </div>
            </div>
        </>
    )
}

