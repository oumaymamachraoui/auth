const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: { type: String, required: true },
  adresse: { type: String, required: true },
  age: {
    type: Date,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
  },
});
module.exports = User = mongoose.model("user", userSchema);
