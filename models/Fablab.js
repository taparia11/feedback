const mongoose = require('mongoose');
const { Schema } = mongoose;

const Fablab = new Schema({

name:{
    type: String,
    required: true
},
email:{
    type: String,
    required: true
},
subject:{
    type: String,
    required: true
},

message:{
    type: String,
    required: true
},

tag:{
    type: String,
    default: 'Fablab'
},

date:{
    type: Date,
    default:Date.now
}

});

module.exports = mongoose.model('fablab', Fablab)