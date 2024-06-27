import Button from 'react-bootstrap/Button';

function BotonU({value, onActualizar}){
    return (
        <>
            <Button  className="btn-warning"  size="sm" value={value} onClick={onActualizar}>Modificar</Button>
        </>
    );
}

export default BotonU;

