import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Content from '../componentes/content/Content';
import Menu from '../componentes/menu/Menu';
import ListaArticulos from '../componentes/salida/super/ListaArticulos';
import ListaProductos from '../componentes/salida/super/ListaProductos';
import ListaSuper from '../componentes/salida/super/ListaSuper';
import ListaMarcas from '../componentes/salida/super/ListaMarcas';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Menu />
        </div>
            <Routes>
              <Route element={<Content></Content>} path="/" exact={true} />
              <Route element={<ListaArticulos></ListaArticulos>} path="/listaarticulos" />
              <Route element={<ListaMarcas></ListaMarcas>} path="/listamarcas" />
              <Route element={<ListaProductos></ListaProductos>} path="/listaproductos" />
              <Route element={<ListaSuper></ListaSuper>} path="/listasuper" />
              <Route path="*" element={<Navigate to="/" replace />}/>
            </Routes>       
      </div>      
    </BrowserRouter>
  );
};

export default AppRouter;
