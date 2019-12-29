var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BillSchema = new Schema(
  {
    _name: { type: String, required: true, min: 1, max: 100},
    _balance: { type: Number, default: 0.0}
  }
);

// Virtual for URL
BillSchema
.virtual('url')
.get(function () {
  return '/user/bill/' + this._id;
});

// Export model as a module for program use
module.exports = mongoose.model('Bill', BillSchema);
