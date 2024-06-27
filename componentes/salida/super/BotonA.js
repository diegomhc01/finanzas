import Button from 'react-bootstrap/Button';

function BotonA({texto,onMostrar}){    
    return (
        <>
            <Button  className="btn-success"  size="sm" onClick={onMostrar}>{texto}</Button>{' '}
            
        </>
    );
}

export default BotonA;
