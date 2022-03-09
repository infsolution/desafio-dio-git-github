import { Router, Request, Response, NextFunction } from "express";
import { UrlController } from "../controllers/urlController";

const urlRoutes = Router()
const urlController = new UrlController()
urlRoutes.get('/v1/urls',urlController.index)
urlRoutes.post('/v1/urls',urlController.store)
urlRoutes.get('/v1/urls/:hash',urlController.show)


export default urlRoutes