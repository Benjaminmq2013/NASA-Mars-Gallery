const axios = require("axios")
const API = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos"
const config = {
    params:{
        earth_date: "2021-11-3",
        api_key: "jJ9lAMz8NVOgBSEeDBEWnylwti9UqpSgifrqiSiM",
        page: 1,
    }
}

function getPhotos (req, res){    
    axios.get(API, config)
    .then(function (response){
        // console.log(response.data)
        res.send(response.data)        
    })
    .catch(e => {
        console.log(e)
        res.send("Server Error 404")
    })
    
    
}

module.exports = getPhotos