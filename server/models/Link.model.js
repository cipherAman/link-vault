const mongoose = require ('mongoose');

const linkSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true    
    },
    title:{
        type:String,
        required:true,
        trim:true
    },
    url:{
        type:String,
        required:true,
        trim:true 
    },
    tags:{
        type:[String],
        default:[]
    }
}, {timestamps:true});

module.exports= mongoose.model('Link',linkSchema) ;
