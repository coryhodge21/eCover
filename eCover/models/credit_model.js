var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CreditSchema = new Schema(
  {
    _name: { type: String, required: true, min: 1, max: 100},
    _balance: { type: Number, default: 0.0}
  }
);

// Virtual for URL
CreditSchema
.virtual('url')
.get(function () {
  return '/user/credit/' + this._id;
});

// Export model as a module for program use
module.exports = mongoose.model('Credit', CreditSchema);
