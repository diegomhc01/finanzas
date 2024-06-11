import React from 'react';
import BotonGrabarDC from './BotonGrabarDC';

function DetalleCompra(){
    return (
        <div >
            <div id="compra" className='detalle-compra'>
                <div className='form-control'>
                    <input id="fecha-compra" type="date"/>
                </div>
                <div className='form-control'>
                    <input id="producto" type="text"/>
                </div>
                <div className='form-control'>
                    <input id="marca" type="text"/>
                </div>
                <div className='form-control'>
                    <input id="unidad" type="numeric"/>
                </div>
                <div className='form-control'>
                    <input id="cantidad" type="numeric"/>
                </div>
                <div className='form-control'>
                    <input id="precio" type="numeric"/>
                </div>
            </div>
            <div>
                <BotonGrabarDC/>
            </div>
        </div>
    );
}

export default DetalleCompra;