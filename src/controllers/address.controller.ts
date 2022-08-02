import addressService from "../services/address.service";
import { Request, Response } from 'express'
import { ApiError } from "../utils/error.utility";


export async function find(req: Request, res: Response): Promise<void> {
    let { page, limit } = req.query
    const items = await addressService.find(page, limit)
    res.json(items)
}


export async function findOne(req: Request, res: Response): Promise<void> {
    const id: string = req.params.id
    const instance = await addressService.findOne(id)
    if(!instance) throw(ApiError.badRequest('invalid id'))
    res.json(instance)
}


export async function create(req: Request, res: Response): Promise<void> {
    const id: string = req.params.id
    const data = req.body
    const instance = await addressService.create(data)
    res.json(instance)
}


export async function patch(req: Request, res: Response): Promise<void> {
    const id: string = req.params.id
    const data: object = req.body
    const success = await addressService.patch(id, data) ? true : false
    res.json({ success })
}


export async function remove(req: Request, res: Response): Promise<void> {
    const id: string = req.params.id
    const success = await addressService.delete(id) ? true : false
    res.json({ success })
}


/* CUSTOM */

export async function addressLabeleIsAvailable(req: Request, res: Response): Promise<void> {
    const { label } = req.params
    let available: boolean = true
    if (label) available = await addressService.findOneByAddressLabel(label) ? false : true
    res.json({ available })
}