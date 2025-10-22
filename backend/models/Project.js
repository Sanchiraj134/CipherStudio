const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    files: { type: Object, required: true }, // store { "App.js": "...code..." }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
