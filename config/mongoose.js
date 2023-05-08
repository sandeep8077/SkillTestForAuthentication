     const mongoose = require("mongoose");
     require("dotenv").config()


     mongoose.connect(process.env.db)
         .then(() => { console.log('database conected successfully') })
         .catch((error) => { console.log('not connected database') })