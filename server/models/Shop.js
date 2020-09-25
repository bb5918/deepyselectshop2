const mongoose = require('mongoose');

const shopSchema = mongoose.Schema({
    name:{
        type:String,
        maxlength: 50
    },
    lat: {
        type:String
    },
    lng: {
        type:String
    },
    description: {
        type: String
    },
    instalink: {
        type:String
    },
    naverlink: {
        type:String
    },
    style: {
        type:String,
    },
    area: {
        type: String,
    }
},{timestamps:true})

const Shop = mongoose.model('Shop',shopSchema)

module.exports={Shop}