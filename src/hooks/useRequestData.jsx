import { useState } from 'react'
import axios from 'axios';

axios.defaults.withCredentials = true


// --- AXIOS GET DATA
export const useGetData = () => {

    const [ data, setData ] = useState()
    const [ error, setError ] = useState( false )
    const [ loading, setLoading ] = useState( false )

    const getData = ( url, headers = null, params = null ) => {


        setLoading( true )


        axios.get( url, { headers: headers, params: params } )
            .then( res => {
                setData( res.data )
                setError( false )
            } )
            .catch( err => {
                setError( true )
                setData()
            } )
            .finally( () => {
                setLoading( false )
            } )
    }


    return { getData, error, loading, data }

}


// --- AXIOS POST DATA
export const usePostData = () => {

    const [ data, setData ] = useState()
    const [ error, setError ] = useState( false )
    const [ loading, setLoading ] = useState( false )

    const postData = ( url, payload = null, headers = null, params = null ) => {

        setLoading( true )

        axios.post( url, payload, { headers: headers, params: params } )
            .then( res => {
                setData( res.data )
                setError( false )
            } )
            .catch( err => {
                setError( true )
                setData()
            } )
            .finally( () => {
                setLoading( false )
            } )
    }

    return { postData, error, loading, data }
}


// --- AXIOS PUT DATA
export const usePutData = () => {


    const [ data, setData ] = useState()
    const [ error, setError ] = useState( false )
    const [ loading, setLoading ] = useState( false )


    const putData = ( url, payload = null, headers = null, params = null ) => {

        setLoading( true )

        axios.put( url, payload, { headers: headers, params: params } )
            .then( res => {
                setData( res.data )
                setError( false )
            } )
            .catch( err => {
                setError( true )
                setData()
            } )
            .finally( () => {
                setLoading( false )
            } )
    }

    return { putData, error, loading, data }
}


// --- AXIOS PATCH DATA
export const usePatchData = () => {

    const [ data, setData ] = useState()
    const [ error, setError ] = useState( false )
    const [ loading, setLoading ] = useState( false )

    const patchData = ( url, payload = null, headers = null, params = null ) => {

        setLoading( true )

        axios.patch( url, payload, { headers: headers, params: params } )
            .then( res => {
                setData( res.data )
                setError( false )
            } )
            .catch( err => {
                setError( true )
                setData()
            } )
            .finally( () => {
                setLoading( false )
            } )
    }

    return { patchData, error, loading, data }
}


// --- AXIOS DELETE DATA
export const useDeleteData = () => {

    const [ data, setData ] = useState()
    const [ error, setError ] = useState( false )
    const [ loading, setLoading ] = useState( false )

    const deleteData = ( url, headers = null, params = null ) => {

        setLoading( true )

        axios.delete( url, { headers: headers, params: params } )
            .then( res => {
                setData( res.data )
                setError( false )
            } )
            .catch( err => {
                setError( true )
                setData()
            } )
            .finally( () => {
                setLoading( false )
            } )
    }

    return { deleteData, error, loading, data }
}