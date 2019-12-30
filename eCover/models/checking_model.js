var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CheckingSchema = new Schema(
  {
    _name: { type: String, required: true, min: 1, max: 100},
    _balance: { type: Number, default: 0}
  }
);

// Virtual for URL
CheckingSchema
.virtual('url')
.get(function () {
  return '/user/checking/' + this._id;
});

// Export model as a module for program use
module.exports = mongoose.model('CheckingModel', CheckingSchema);
