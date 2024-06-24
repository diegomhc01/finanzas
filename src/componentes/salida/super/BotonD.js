import Button from 'react-bootstrap/Button';

function BotonD({value, onEliminar}){
    
    return (
        <>
            <Button className="btn-danger" size="sm" value={value} onClick={onEliminar} >Eliminar</Button>
        </>
    );
}

export default BotonD;

