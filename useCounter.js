import { useState } from 'react';

///un custom hook es un funcional component or lo tanto se puede crear con rafc y luego eliminar el return por defecto...

export const useCounter = ( initialState = 5 ) => {

    const [counter, setCounter] = useState(initialState);
    const valor = initialState;

    const increment = () =>{
        setCounter(counter + 1 ); 
    }
    const decrement = () =>{
        setCounter(counter - 1 ); 
    }

    const reset = () =>{
        setCounter( valor ); 
    }

    return {
        counter, 
        increment, 
        decrement, 
        reset
    };
}


