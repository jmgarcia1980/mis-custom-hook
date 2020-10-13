import { useState } from "react"

export const useForm = ( initialState = {} ) => {

    //por defecto deberia recibir en el initialState el user, email, password
    const [values, setValues] = useState( initialState );

    const reset = () =>{
        setValues( initialState );
    }

    const handleImputChange = ( {target} )=>{
        setValues({
            ...values,
            [ target.name ]: target.value
        });
    };

    return [values, handleImputChange, reset];

}


