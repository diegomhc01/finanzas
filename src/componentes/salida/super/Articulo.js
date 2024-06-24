import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import BotonG from './BotonG';
import { v4 as uuidv4 } from 'uuid';

function Articulo({onMostrar}){
    const [articulo, setArticulo] = useState({'id':uuidv4(),'detalle':'','estado':0});
    const [errorMsg, setErrorMsg] = useState('');
    
    async function handleOnSubmit(e){
        try{
            setErrorMsg('');
            let detalle = e.target.detalle.value;
            e.preventDefault();
            if(detalle=='' || typeof detalle === 'undefined' ){
                setErrorMsg('Debe ingresar un detalle');
                return;
            }
            let datos = {       
                method:'POST',         
                headers : {
                    'Accept': 'application/json',
                    'Content-Type' : 'application/json; charset=UTF-8',
                    "Access-Control-Allow-Headers": "*",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "*"  
                },
                body : JSON.stringify(articulo)
            }            
            
            let res = await fetch('http://localhost:8080/registro', datos);
            let r = res.json;
            console.log(r);
            e.target.detalle.value = '';
            e.target.estado.value = 0;        
            onMostrar();
        }catch (error){
            setErrorMsg(error);
        }

    }
    function handleChange(evt) {
        setErrorMsg('');
        const { target } = evt;
        const { name, value } = target;

        const nuevoArticulo = {
            ...articulo,          
          [name]: value,
        };
        setArticulo(nuevoArticulo);
      }
    return(
        <div className="main-form"  size="sm">            
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <Form onSubmit={handleOnSubmit} className="form-inline">
                <Form.Group controlId="detalle">
                    <Form.Label>Detalle</Form.Label>
                    <Form.Control
                        className="form-control"
                        type="text"
                        name="detalle"                        
                        placeholder="Ingrese la descripción del artículo"  
                        value={articulo.detalle} 
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="estado">
                    <Form.Label>Estado</Form.Label>
                    <Form.Control
                        className="form-control"
                        type="text"
                        name="estado"                        
                        placeholder="Ingrese el estado del artículo"  
                        value={articulo.estado} 
                        onChange={handleChange}
                    />
                    <BotonG/>
                </Form.Group>
            </Form>
        </div>
    );
}

export default Articulo;