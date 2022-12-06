import './Contador.css';
import { useState } from 'react';

function Contador() {
    const [contador, setContador] = useState(0)

    return (
        <div className='contador'>
        
            <h1 className='number'>{contador}</h1>

            <div className='botoes'>
                <button className='mais'
                onClick={() => setContador(contador + 1)}>+</button>
                
                <button className='menos'
                onClick={() => setContador(contador - 1)}>-</button>
            </div>

        </div>
    );
}

export default Contador;