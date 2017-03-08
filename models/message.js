var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// blue print
var schema = new Schema({
    content: {type: String, require: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

// module
module.exports = mongoose.model('Message', schema);

