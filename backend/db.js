const mongoose = require("mongoose");

const mongoURl = "mongodb://localhost:27017/inoteBook";


const connectToMongo =()=>{
    mongoose.connect(mongoURl,{
    useNewUrlParser:true,
    useUnifiedTopology:true,

},  (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("successfully connected")
    }
})
};

module.exports  = connectToMongo;
