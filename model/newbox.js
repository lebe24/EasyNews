const mongoose = require("mongoose");

const NewSchema = new mongoose.Schema({
    text:{
        type:String,
        require:true
    },

    image : {
        type:String,
        require:true 
    },

    link:String
})

/* Creating a new model called New based on the NewSchema. */
const TechcrunchNew = mongoose.model('',NewSchema,'Techcrunch')

const EngagetNew = mongoose.model('',NewSchema,'Techcrunch')

module.exports = {
    TechcrunchNew,
    EngagetNew
}
