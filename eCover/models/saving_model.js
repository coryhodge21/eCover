var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SavingSchema = new Schema(
  {
    _name: { type: String, required: true, min: 1, max: 100},
    _balance: { type: Number, default: 0.0}
  }
);

// Virtual for URL
SavingSchema
.virtual('url')
.get(function () {
  return '/user/saving/' + this._id;
});

// Export model as a module for program use
module.exports = mongoose.model('Saving', SavingSchema);
