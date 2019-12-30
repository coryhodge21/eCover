// demModel 
// teest out new fields

// imports
var mongoose = require('mongoose');

// Create Schema Tool
var Schema = mongoose.Schema;

// Define Schema (Class)
var DevSchema = new Schema(
    {
      name: String,
      binary: Buffer,
      living: Boolean,
      updated: { type: Date, default: Date.now() },
      age: { type: Number, min: 18, max: 65 },
      mixed: Schema.Types.Mixed,
      _someId: Schema.Types.ObjectId,
      array: [],
      ofString: [String], // You can also have an array of each of the other types too.
      nested: { stuff: { type: String, lowercase: true, trim: true } }
    });

    // Virtual for URL
DevSchema
.virtual('url')
.get(function () {
  return '/dev/v_url/' + this._id;
});

// Export model as a module for program use
module.exports = mongoose.model('DevModel', DevSchema);