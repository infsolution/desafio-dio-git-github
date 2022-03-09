import mongoose from "mongoose";
//require('dotenv/config');

export class MongooseConnection{
    public async connect(): Promise<void>{
        try {
            const uriconnect = String(process.env.MONGO_CONNECTION)
            await mongoose.connect(uriconnect)
            //console.log("database connected")
        } catch (error) {
            console.log(error)
            process.exit(1)
        }
    }
}