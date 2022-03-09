import { Router, Request, Response, NextFunction } from "express";
import shortid from "shortid";
import config from '../hostConfig'
import { URLModel } from "../models/Url";

export class UrlController{
    public async index (request: Request, response: Response, next:NextFunction ){
        try {
            const urls = await URLModel.find().exec()
            response.send({urls})
        } catch (error) {
            return response.status(400).send({"error": "error.message"})
        }
    }

    public async store(request: Request, response:Response, next: NextFunction): Promise<void>{
        try {
            const {url} = request.body
            let hash  = shortid.generate()
            let exitHash = await URLModel.findOne({hash}).exec()
            while(exitHash){
                hash = shortid.generate()
                exitHash = await URLModel.findOne({hash}).exec()
            }
            const shortedUrl = `${config.url.API_URL}${hash}`
            const urlShortned=  await URLModel.create({hash, urlOrigin:url, shortedUrl, clikedNumber: 0})
            response.send({url: urlShortned})
        } catch (error) {
            response.status(400).send({"error": "error.message"})
        }
    }

    public async show(request: Request, response:Response, next: NextFunction):Promise<void>{
        try {
             const {hash} = request.params
             if(!hash){
                 response.status(404).send({"message":"Not found"})
                 return 
             }
             const url = await URLModel.findOne({hash}).exec()
             if(url){
                 url.clikedNumber +=1
                 url.save()
                response.redirect(url.urlOrigin)
                return
             }             
        } catch (error) {
            response.status(400).send({"error": "error.message"})
        }
    }
}