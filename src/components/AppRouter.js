import React, {useContext} from 'react';
import {Route, Routes} from 'react-router-dom';

import {PrivateRoutes, PublicRoutes} from '../router';
import {AuthContext} from '../context';


const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);
    return (
        isAuth
            ? <Routes>
                {PrivateRoutes.map(r => (
                    <Route key={r.path} exact={r.exact} path={r.path} element={r.component}/>
                ))}
              </Routes>
            : <Routes>
                    {PublicRoutes.map(r => (
                        <Route key={r.path} exact={r.exact} path={r.path} element={r.component}/>
                    ))}
              </Routes>
    );
};

export default AppRouter;
