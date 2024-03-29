import React, { useContext } from 'react';
import SignInPage from '../modules/auth/SignInPage';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import AuthContext from '../config/context/auth-context';
import AdminLayout from '../modules/admin/AdminLayout';
import UserLayout from '../modules/admin/UserLayout';
import UserPage from '../modules/admin/users/UserPage';

const AppRouter = () => {
  const userRole = localStorage.getItem("userRole");
  const username = localStorage.getItem("username");
  const { user, } = useContext(AuthContext);


  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {user.signed ? (
          <>
            <Route path='/' element={<AdminLayout username={username} userRole={userRole} />} >
              {userRole === 'ADMIN_ROLE' && (
                <Route path='admin' element={<>
                  <br />Bienvenid@ {username},
                  <br />Eres un: {userRole}! </>} />
              )}
              {userRole === 'USER_ROLE' && (
                <Route path='user' element={<>                                                         
                  <br />Bienvenid@ {username},
                  <br />Eres un: {userRole}! </>} />

              )}                                                                                              
              {userRole === 'CLIENT_ROLE' && (
                <Route path='client' element={<>
                  <br />Bienvenid@ {username},
                  <br />Eres un: {userRole}! </>} />
              )}
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












