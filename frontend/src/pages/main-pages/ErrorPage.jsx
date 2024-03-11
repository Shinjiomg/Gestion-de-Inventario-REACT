import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from 'firebase/auth';
import { app } from '../../../firebase';
import { Button } from "@nextui-org/button";
import { NotFoundAnim } from '../elements'

export const ErrorPage = () => {
  
  const navigate = useNavigate();
  const auth = getAuth(app);

  const handleReturnClick = () => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  };
  return (
    <div className="container min-h-screen mx-auto flex flex-col items-center justify-center lg:flex-row">
      <div className="w-full lg:w-1/2 text-center">
        <p className="text-lg font-medium text-blue-500 dark:text-blue-400">error 404</p>
        <h1 className="mt-3 text-2xl font-semibold md:text-3xl">Página no encontrada</h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400">Lo sentimos, la página que estás buscando no existe.</p>
        <p className="mt-5 text-md text-gray-500">
          <Button onClick={handleReturnClick} type="button"
            color='primary'
            className="mx-auto">
            Volver <span aria-hidden="true">&rarr;</span>
          </Button>
        </p>
      </div>
      <div>
        <NotFoundAnim />
      </div>
    </div>
  )
}
