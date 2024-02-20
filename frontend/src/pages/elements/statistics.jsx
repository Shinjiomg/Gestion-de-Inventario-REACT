import React from 'react';

export default function Statistics () {
    return (
        <div className=''>
            <div className='m-5 mt-0 flex flex-row justify-evenly min-h-72'>
                <div className='cursor-pointer w-full mr-6 font-medium pt-4 pl-4 pb-4 rounded-xl bg-white'>
                    <p className='text-xl'>Ventas del Mes</p>
                    <p className='pt-20 flex justify-center text-5xl font-bold text-zinc-950'>$170M</p>
                </div>
                <div className='cursor-pointer w-full mr-6 font-medium pt-4 pl-4 pb-4 rounded-xl bg-white'>
                    <p className='text-xl'>Ventas del día</p>
                    <p>$ 10.000</p>
                </div>
                <div className='cursor-pointer w-full font-medium pt-4 pl-4 pb-4 rounded-xl bg-white'>
                    <p className='text-xl'>Última venta</p>
                    <p>$ 10.000</p>
                </div>
                <div className='cursor-pointer w-full ml-6 font-medium pt-4 pl-4 pb-4 rounded-xl bg-white'>
                    <p className='text-xl'>Gastos Diarios</p>
                    <p>$ 10.000</p>
                </div>
            </div>
            <div className='m-5 flex flex-row justify-evenly min-h-72'>
                <div className='cursor-pointer w-full mr-6 font-medium pt-4 pl-4 pb-4 rounded-xl bg-white'>
                    <p className='text-xl'>Ventas en Efectivo</p>
                    <p>$ 10.000</p>
                </div>
                <div className='cursor-pointer w-full font-medium pt-4 pl-4 pb-4 rounded-xl bg-white'>
                    <p>Ventas en Nequi</p>
                    <p>$ 10.000</p>
                </div>
                <div className='cursor-pointer w-full ml-6 font-medium pt-4 pl-4 pb-4 rounded-xl bg-white'>
                    <p className='text-xl'>Ventas en Daviplata</p>
                    <p>$ 10.000</p>
                </div>
                <div className='cursor-pointer w-full ml-6 font-medium pt-4 pl-4 pb-4 rounded-xl bg-white'>
                    <p className='text-xl'>Otros Métodos</p>
                    <p>$ 10.000</p>
                </div>
            </div>
        </div>
    )
}