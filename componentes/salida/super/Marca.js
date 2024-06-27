import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import BotonG from './BotonG';
import { v4 as uuidv4 } from 'uuid';

function Marca({onMostrar}){
    const [marca, setMarca] = useState({'id':uuidv4(),'detalle':'','estado':0});
    const [errorMsg, setErrorMsg] = useState('');
    
    async function handleOnSubmit(e){
        try{
            setErrorMsg('');
            let detalle = e.target.detalle.value;
            e.preventDefault();
            if(detalle=='' || typeof detalle === 'undefined' ){
                setErrorMsg('Debe ingresar una marca');
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
                body : JSON.stringify(marca)
            }            
            
            let res = await fetch('http://localhost:8080/add_marca', datos);
            let r = res.json;
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

        const nuevaMarca = {
            ...marca,          
          [name]: value,
        };
        setMarca(nuevaMarca);
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
                        placeholder="Ingrese la descripción de la marca"  
                        value={marca.detalle} 
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="estado">
                    <Form.Label>Estado</Form.Label>
                    <Form.Control
                        className="form-control"
                        type="text"
                        name="estado"                        
                        placeholder="Ingrese el estado de la marca"  
                        value={marca.estado} 
                        onChange={handleChange}
                    />
                    <BotonG/>
                </Form.Group>
            </Form>
        </div>
    );
}

export default Marca;