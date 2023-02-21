const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/wikiDB");

const newSchema = {
    _id : Number,
    title : String,
    content : String
}

const Article = mongoose.model("article",newSchema);

const article = new Article;

Article.insertMany(

    {
        "_id" : "203",
        "title" : "DOM",
        "content" : "The Document Object Model is like an API for interacting with our HTML"
    }
)

article.save();
