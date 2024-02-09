import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Avatar } from "@nextui-org/react";
import './index-page.css'
import { userIcon, receiptIcon, statisticsIcon, shopingIcon, registerIcon } from '../assets/icons';
import { Button } from "@nextui-org/react";


export default function IndexPage() {

    return (

        <>
            <div className='navbar'>
                <div className='flex flex-row items-center justify-around pt-4 pl-4 pb-4 pr-4'>
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                react
                </div>
                <hr />
                <div className='inventario flex flex-col pb-4'>
                    <p className='pb-2 pt-6'>inventario</p>
                    <Button className='nextButton'>{ statisticsIcon }estadisticas</Button>
                    <Button className='nextButton'>{ statisticsIcon }gestionar inventario</Button>
                </div>
                <div className='ventas flex flex-col pb-4'>
                    <p className='pb-2'>gestion de ventas</p>
                    <Button className='nextButton'>{ receiptIcon }factura de venta</Button>
                </div>
                <div className='usuarios flex flex-col pb-4'>
                    <p className='pb-2'>gestion de usuarios</p>
                    <Button className='nextButton'>{ userIcon }gestion de usuarios</Button>
                </div>
                <div className='compras flex flex-col pb-4'>
                    <p className='pb-2'>gestion de compras</p>
                    <Button className='nextButton'>{ shopingIcon }compras</Button>
                    <Button className='nextButton'>{ receiptIcon }factura de compras</Button>
                    <Button className='nextButton'>{ registerIcon }registro de gastos</Button>
                </div>
            </div>
        </>
    )
}

