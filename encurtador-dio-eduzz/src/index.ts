import express  from "express";
import userRoute from "./routes/user.routes";
import routes from './/routes'
import urlRoutes from "./routes/urlencurt.routes";
import { MongooseConnection } from "./databases/mongooseConnection";
const app = express()
app.use(express.json())

const database = new MongooseConnection()
database.connect()
app.use(urlRoutes)

app.listen(3333, ()=>{
    console.log('App run in port 3333')
})