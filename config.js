//get private ele from .env
//need to npm install dotenv
const dotenv = require("dotenv")
dotenv.config();
module.exports={
    app_id: process.env.APP_ID,
    app_key: process.env.APP_KEY
}
