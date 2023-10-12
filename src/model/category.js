const mongoose = require('mongoose');
const schema = mongoose.Schema;

const catergorySchema = new schema({
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

module.exports = mongoose.model("category",catergorySchema);