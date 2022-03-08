import { Router, Request, Response, NextFunction } from "express";


const userRoute = Router()

userRoute.get('/v1/users',(request: Request, response: Response, next:NextFunction )=>{
    try {
        response.send({users: []})
    } catch (error) {
        return response.status(400).send({"error": "error.message"})
    }
})


export default userRoute