import { Avatar, Button } from "@nextui-org/react";
import { userIcon, receiptIcon, statisticsIcon, shopingIcon, registerIcon } from '../../assets/icons';
import React from 'react';
import '../menu.css'

export default function Menu() {

    return (
        <div className='navbar border-solid border-black border ml-16 mt-16 mb-16'>
            <div className='flex flex-row items-center justify-around pt-4 pl-4 pb-4 pr-4 uppercase'>
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                react
            </div>
            <hr />
            <div className='inventario flex flex-col pb-4'>
                <p className='pb-2 pt-6 text-xs	pl-5 font-bold'>inventario</p>
                <Button className='nextButton uppercase pl-5 pt-2.5 pb-2.5 bg-transparent justify-start rounded-none'>{statisticsIcon}estadisticas</Button>
                <Button className='nextButton uppercase pl-5 pt-2.5 pb-2.5 bg-transparent justify-start rounded-none'>{statisticsIcon}gestionar inventario</Button>
            </div>
            <div className='ventas flex flex-col pb-4'>
                <p className='pb-2 text-xs pl-5 font-bold'>gestion de ventas</p>
                <Button className='nextButton uppercase pl-5 pt-2.5 pb-2.5 bg-transparent justify-start rounded-none'>{receiptIcon}factura de venta</Button>
            </div>
            <div className='usuarios flex flex-col pb-4'>
                <p className='pb-2 text-xs pl-5 font-bold'>gestion de usuarios</p>
                <Button className='nextButton uppercase pl-5 pt-2.5 pb-2.5 bg-transparent justify-start rounded-none'>{userIcon}gestion de usuarios</Button>
            </div>
            <div className='compras flex flex-col pb-4'>
                <p className='pb-2 text-xs pl-5 font-bold'>gestion de compras</p>
                <Button className='nextButton uppercase pl-5 pt-2.5 pb-2.5 bg-transparent justify-start rounded-none'>{shopingIcon}compras</Button>
                <Button className='nextButton uppercase pl-5 pt-2.5 pb-2.5 bg-transparent justify-start rounded-none'>{receiptIcon}factura de compras</Button>
                <Button className='nextButton uppercase pl-5 pt-2.5 pb-2.5 bg-transparent justify-start rounded-none'>{registerIcon}registro de gastos</Button>
            </div>
        </div>
    )
}