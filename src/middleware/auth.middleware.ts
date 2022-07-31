import * as authService from '../services/auth.service'
import userService from '../services/user.service'
import { Request, Response, NextFunction } from 'express'
import { ApiError } from "../utils/error.utility";

export async function loadAuthenticated(req: Request, res: Response, next: NextFunction): Promise<void> {

    const bearerToken = req.header('authorization')
    if (!bearerToken) throw (ApiError.authorization('authentication required'))


    const token = bearerToken.replace('Bearer ', '')
    const payload = authService.verifyAccessToken(token)
    if (!payload.user_id) throw (ApiError.authorization('invalid token'))


    const user = await userService.findOne(payload.user_id)
    if (!user) throw (ApiError.authorization('invalid token'))

    
    res.locals["$user"] = user
    console.log({ bearerToken, token, payload, user })
    next()
}