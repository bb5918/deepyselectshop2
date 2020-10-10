const mongoose = require("mongoose");

const shopSchema = mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 50,
    },
    phone: {
      type: String,
    },
    location: {
      type: String,
    },
  },
  { timestamps: true }
);

const Shop = mongoose.model("Shop", shopSchema);

module.exports = { Shop };
