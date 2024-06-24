import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
//import useMD from '../hooks/useMD';
import ArticuloContext from '../context/ArticuloContext';
import Content from '../componentes/content/Content';
import Menu from '../componentes/menu/Menu';
import Marca from '../componentes/salida/super/Marca';
import Producto from '../componentes/salida/super/Producto';
import ListaSuper from '../componentes/salida/super/ListaSuper';
import ListaArticulos from '../componentes/salida/super/ListaArticulos';

const AppRouter = () => {
  //const [books, setBooks] = useLocalStorage('books', []);

  return (
    <BrowserRouter>
      <div>
        <div>
          <Menu />
        </div>
        
          {/* {<BooksContext.Provider value={{ books, setBooks }}>} */}
            <Routes>
              <Route element={<Content></Content>} path="/" exact={true} />
              <Route element={<ListaArticulos></ListaArticulos>} path="/listaarticulos" />
              <Route element={<Marca></Marca>} path="/marca" />
              <Route element={<Producto></Producto>} path="/producto" />
              <Route element={<ListaSuper></ListaSuper>} path="/listasuper" />
              <Route path="*" element={<Navigate to="/" replace />}/>
            </Routes>
          {/* {</BooksContext.Provider>} */}
        
      </div>      
    </BrowserRouter>
  );
};

export default AppRouter;
