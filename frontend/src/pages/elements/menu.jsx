import { Avatar, Button } from "@nextui-org/react";
import { userIcon, receiptIcon, statisticsIcon, shopingIcon, registerIcon } from '../../assets/icons';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../../../firebase'
import '../menu.css'

export default function Menu() {

    return (
        <div className='navbar'>
            <div className='flex flex-row items-center justify-around pt-4 pl-4 pb-4 pr-4'>
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                react
            </div>
            <hr />
            <div className='inventario flex flex-col pb-4'>
                <p className='pb-2 pt-6'>inventario</p>
                <Button className='nextButton'>{statisticsIcon}estadisticas</Button>
                <Button className='nextButton'>{statisticsIcon}gestionar inventario</Button>
            </div>
            <div className='ventas flex flex-col pb-4'>
                <p className='pb-2'>gestion de ventas</p>
                <Button className='nextButton'>{receiptIcon}factura de venta</Button>
            </div>
            <div className='usuarios flex flex-col pb-4'>
                <p className='pb-2'>gestion de usuarios</p>
                <Button className='nextButton'>{userIcon}gestion de usuarios</Button>
            </div>
            <div className='compras flex flex-col pb-4'>
                <p className='pb-2'>gestion de compras</p>
                <Button className='nextButton'>{shopingIcon}compras</Button>
                <Button className='nextButton'>{receiptIcon}factura de compras</Button>
                <Button className='nextButton'>{registerIcon}registro de gastos</Button>
            </div>
        </div>
    )
}