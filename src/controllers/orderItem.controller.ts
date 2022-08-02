import service from "../services/orderItem.service";
import { Request, Response, NextFunction } from 'express'
import { ApiError } from "../utils/error.utility";


const entity = 'orderItem'


export async function loadOne(req: Request, res: Response, next: NextFunction, id: string): Promise<void> {
    const instance = await service.findOne(id)
    if (!instance) throw (ApiError.badRequest('invalid id'))
    res.locals[entity] = instance
    next()
}


export async function find(req: Request, res: Response): Promise<void> {
    let { page, limit } = req.query
    const items = await service.find(page, limit)
    res.json(items)
}


export async function findOne(req: Request, res: Response): Promise<void> {
    const instance = res.locals[entity]
    if (!instance) throw (ApiError.badRequest('invalid id'))
    res.json(instance)
}


export async function create(req: Request, res: Response): Promise<void> {
    const data = req.body
    const instance = await service.create(data)
    res.json(instance)
}


export async function patch(req: Request, res: Response): Promise<void> {
    const data: object = req.body
    const instance = res.locals[entity]
    if (!instance) throw (ApiError.badRequest('invalid id'))
    const success = await service.patch(instance, data) ? true : false
    res.json({ success })
}


export async function remove(req: Request, res: Response): Promise<void> {
    const instance = res.locals[entity]
    if (!instance) throw (ApiError.badRequest('invalid id'))
    const success = await service.delete(instance) ? true : false
    res.json({ success })
}