import React, { useState, useEffect } from 'react'
const axios = require('axios');
// const development_api = "http://127.0.0.1:4000/gallery" 
const API = window.location.origin + "/gallery";

const useGetPhotos = () => {
    const [ photos, setPhotos ] = useState([])

    useEffect(()=> {
        console.log(API)
        axios.get(API)
        .then(response => {            
            setPhotos(response.data.photos)
        })
        .catch(e => console.log(e))
    }, [])

    return (
        photos
    )
}

export default useGetPhotos