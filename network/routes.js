const express = require("express")
const gallery = require("./response")

const photos = function (server){
    server.use("/gallery", gallery)
}

module.exports = photos;