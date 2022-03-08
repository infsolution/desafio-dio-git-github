import express  from "express";
import userRoute from "./routes/user.routes";

const app = express()
app.use(userRoute)

app.listen(3333, ()=>{
    console.log('App run in port 3333')
})