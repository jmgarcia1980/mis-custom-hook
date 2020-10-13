import { useState, useEffect, useRef } from "react"

export const useFetch = ( url ) => {

    const compCargado = useRef(true);    
    const [state, setState] = useState( { data: null, loadding: true, error: null });

    useEffect( ()=> {

        return ()=>{
            compCargado.current = false;
        }
    }, [])


    useEffect( ()=>{

        setState( { data: null, loadding: true, error: null } );
                fetch (url)
                .then( resp => resp.json())
                .then( data =>{

                    setTimeout( ()=>{
                        if ( compCargado.current ) {
                            setState( {
                                loadding: false,
                                error:false,
                                data
                            } )    
                        }else {
                            console.log('No se llamo al setState...')
                        } 
                }, 3500);
                })

    }, [url])

    return state;
}

