import userService from "../services/user.service";
import { Request, Response } from 'express'

export async function find(req: Request, res: Response): Promise<void> {
    let { page, limit } = req.query
    // const page = parseInt(<string>p) || 1
    // const limit = parseInt(<string>l) || 10
    const items = await userService.find(page, limit)
    res.json(items)
}