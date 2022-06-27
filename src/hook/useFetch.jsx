import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch( url ){
    const [ data, setData ] = useState( null );
    const [ loading, setLoading ] = useState( false );
    const [ error, setError ] = useState( null );

    useEffect(()=>{
        setLoading( true );
        const timer = setTimeout(() => {
            axios
        .get( url )
        .then(( res ) => {
            setData( res.data )
        })
        .catch( ( err ) => {
            setError( err )
        } )
        .finally( () => {
            setLoading( false )
        } ) }, 2000);
        return () => clearTimeout(timer);
    }, [ url ] );

    return { data, loading, error }
}
