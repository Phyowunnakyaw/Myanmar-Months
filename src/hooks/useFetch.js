import React, { useEffect, useState } from 'react'

function useFetch( url ) {

    let [ data, setData ] = useState( null );
    let [ error, setError ] = useState( null );
    let [ loading, setLoading ] = useState( false );

    useEffect( ( ) => {

        let abortController = new AbortController();
        let signal = abortController.signal;

        setLoading( true );
        fetch( url, { signal } )
        .then( res => {
            if( !res.ok ) {
                throw Error( 'Something went wrong.....' )
            }
            return res.json();
        } )
        .then( data => {
            setData( data );
            setError( null );
            setLoading( false );
        } )
        .catch( err => {
            setError( err.message );
        } )

        return () => {
            abortController.abort();
        }

    }, [ url ] )

  return { data, error, loading }

}

export default useFetch;