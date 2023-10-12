const mongoose = require('mongoose');
const schema = mongoose.Schema;

const productSchema = new schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    price:{
        type:Number,
        default:0
    },
    discountPercentage:{
        type:Number,
        default:0
    },
    rating:{
        type:Number,
        default:0
    },
    stock:{
        type:Number,
        default:0
    },
    category:{
        type:String
    },
    brand:{
        type:String
    }
},{
    timestamps:true
});

module.exports = mongoose.model("product",productSchema);