const mongoose = require('mongoose');
const schema = mongoose.Schema;

const brandSchema = new schema({
    id:{
        type:Number,
        default:0
    },
    name:{
        type:String
    }
},{
    timestamps:true
});

module.exports = mongoose.model("brand",brandSchema);