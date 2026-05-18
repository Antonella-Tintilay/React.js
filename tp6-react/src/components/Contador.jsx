import { useState } from 'react';

function Contador() {
    const [contador, setContador] = useState(0);

    const sumar = () => {
        setContador(contador + 1);
    };

    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    };

    const reiniciar = () => {
        setContador(0);
    };
    let color;
    if (contador>0){
        color='verde';
    }else{
        color='rojo';
    }

    return (
        <div className="contador">
            <h1 className={`numero ${color}`}>Contador: {contador}</h1>
            <button onClick={sumar}>+1</button>
            <button onClick={restar} disabled={contador === 0}>-1</button>
            <button onClick={reiniciar}>Reset</button>
        </div>
    );
}

export default Contador;