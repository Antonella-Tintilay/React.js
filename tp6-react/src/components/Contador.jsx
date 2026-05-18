import { useState } from 'react';

function Contador() {
    const [contador, setContador] = useState(0);
    return(
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={()=>setContador(contador+1)}>Sumar</button>
            <button onClick={()=>setContador(contador-1)}>Restar</button>
            <button onClick={()=>setContador(0)}>Reiniciar</button>
        </div>
    )
}
export default Contador;