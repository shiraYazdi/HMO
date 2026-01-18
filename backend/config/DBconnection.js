import mongoose from "mongoose";
import fs from "fs";

export const connectTodb = () => {
    const mongoURI = fs.readFileSync(process.env.MONGO_URI_FILE, "utf8").trim() || process.env.DB_CONNECTION 
    mongoose.connect(`${mongoURI}`).then(suc => {
        console.log("mongodb connected on host " + suc.connection.host)
    }).catch(err => {
        console.log(mongoURI);
        console.log(err);
        console.log("cannot connect mongodb");
        process.exit(1)
    })
}
