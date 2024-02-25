import React, { useContext } from 'react';
import SignInPage from '../modules/auth/SignInPage';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import AuthContext from '../config/context/auth-context';
import AdminLayout from '../modules/admin/AdminLayout';
import UserLayout from '../modules/admin/UserLayout';

const AppRouter = () => {
  const userRole = localStorage.getItem("userRole");
  const username = localStorage.getItem("username");
  const { user } = useContext(AuthContext);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {
          user.signed ? ( //😱😱? se llama banderas pq indican el como funciona un booleano cuando no se pone ningun signo 

            <>
              <Route path='/' element={<AdminLayout username={username} userRole={userRole} />}>
                <Route path='admin' element={<>ADMIN HOME</>} />
                <Route path='user' element={<>USER HOME</>}/>
                <Route path='client' element={<>CLIENT HOME</>} />
              </Route>
            </>

          ) : (
            <Route path='/' element={<SignInPage />} />
          )}
        <Route path='/*' element={<>404 NOT FOUND</>} />
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default AppRouter

