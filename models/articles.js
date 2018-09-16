const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//schema
 const articlesSchema = new Schema({
  title: {type: String, require: true},
  image: {type: String, require: true},
  date: { type: Date, default: Date.now },
  url: {type: String, require: true},
  articleId: {type: String, require: true},

 });
 const Articles = mongoose.model("Articles", articlesSchema);
module.exports = Articles;