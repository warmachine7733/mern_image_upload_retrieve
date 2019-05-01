const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const characterSchema = new Schema({
  name: String,
  img_url: String,
  evil: Boolean
});

const Character = mongoose.model("characters", characterSchema);
module.exports = Character;
