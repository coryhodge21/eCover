var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DebtSchema = new Schema(
  {
    _name: { type: String, required: true, min: 1, max: 100},
    _balance: { type: Number, default: 0.0}
  }
);

// Virtual for URL
DebtSchema
.virtual('url')
.get(function () {
  return '/user/debt/' + this._id;
});

// Export model as a module for program use
module.exports = mongoose.model('Debt', DebtSchema);
