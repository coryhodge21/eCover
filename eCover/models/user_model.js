var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    _name: {type: String, required: true, min: 1, max: 100},
    _checkings: [ { type: Schema.Types.ObjectId, ref: 'Checkings' } ],
    _savings: [ { type: Schema.Types.ObjectId, ref: 'Savings' } ],
    _bills: [ { type: Schema.Types.ObjectId, ref: 'Bills' } ],
    _debts: [ { type: Schema.Types.ObjectId, ref: 'Debts' } ],
    _credits: [ { type: Schema.Types.ObjectId, ref: 'Credits' } ],
  }
);

// Virtual for URL
UserSchema
.virtual('url')
.get(function () {
  return '/user/' + this._id;
});

// call the model constructor on the 
//  Mongoose instance and pass it the name of the 
//  collection and a reference to the schema definition.
module.exports = mongoose.model('User', UserSchema);
