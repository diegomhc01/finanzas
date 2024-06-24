import {React, useState} from 'react';
import Table from 'react-bootstrap/Table';
import Articulo from './Articulo';
import BotonU from './BotonU';
import BotonD from './BotonD';
import BotonA from './BotonA';

function ListaArticulos() {
      const lista = [
      {
        "id": 1,
        "detail": "Leche entera",
        "status": "In stock"
      },
      {
        "id": 2,
        "detail": "Huevos",
        "status": "Low stock"
      },
      {
        "id": 3,
        "detail": "Pan de molde",
        "status": "In stock"
      },
      {
        "id": 4,
        "detail": "Manzanas",
        "status": "In stock"
      },
      {
        "id": 5,
        "detail": "Tomates",
        "status": "In stock"
      },
      {
        "id": 6,
        "detail": "Arroz",
        "status": "In stock"
      },
      {
        "id": 7,
        "detail": "Fideos",
        "status": "In stock"
      },
      {
        "id": 8,
        "detail": "Carne molida",
        "status": "Low stock"
      },
      {
        "id": 9,
        "detail": "Pollo",
        "status": "In stock"
      },
      {
        "id": 10,
        "detail": "Queso",
        "status": "In stock"
      }
    ]
    const [articulos, setArticulos] = useState(lista);
    const [mostrar, setMostrar] = useState(false);  
    const [texto, setTexto] = useState('Agregar');  
    function handleMostrar(e){      
      if(!mostrar){
        setMostrar(true);
        setTexto('Ocultar')
      }else{
        setMostrar(false);
        setTexto('Agregar')
      }
      
    }
    function handleActualizar(e){
      console.log(e.target.innerHTML)
    }
    function handleEliminar(e){
      console.log(e.target.innerHTML)
    }
    return (
        <>
        
          {mostrar ? (
            <Articulo onMostrar={handleMostrar} />
          ):('')}
            
            <BotonA texto={texto} onMostrar={handleMostrar} />
            <Table responsive>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Detalle</th>
                    <th>Estado</th>
                    <th></th><th></th>
                </tr>
                </thead>
                <tbody>
                {lista.map((articulo) => (                    
                    <tr key={articulo.id}>
                        <td>{articulo.id}</td>
                        <td>{articulo.detail}</td>
                        <td>{articulo.status}</td>
                        <td><BotonU onActualizar={handleActualizar} value={articulo.id}/></td>
                        <td><BotonD onEliminar={handleEliminar} value={articulo.id}/></td>
                    </tr>
                ))}
                </tbody>
            </Table>
      </>
    );
  }
  
  export default ListaArticulos;