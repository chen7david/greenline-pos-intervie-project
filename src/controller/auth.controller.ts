import * as authService from "../services/auth.service";
import userService from "../services/user.service";
import { Request, Response } from 'express'
import { ApiError } from "../utils/error.utility";


export async function login(req: Request, res: Response): Promise<void> {
    const { username, password } = req.body
    const user = await userService.findOneByUsername(username)
    if (!user) throw (ApiError.invalidUsername(req.body))
    if (!await userService.verifyPassword(user, password))
    throw (ApiError.invalidPassword(req.body))
    const payload = { user_id: user.id }
    res.json({
        user: user,
        accessToken: authService.signAccessToken(payload),
        refreshToken: authService.signRefreshToken(payload),
    })
}


export async function refresh(req: Request, res: Response): Promise<void> {
    const { token } = req.body
    if (!token) throw (ApiError.badRequest('token required'))
    let { user_id } = authService.verifyRefreshToken(token)
    if (!user_id) throw (ApiError.badRequest('invalid token'))
    const user = await userService.findOne(user_id)
    if (!user) throw (ApiError.badRequest('invalid token'))
    const payload = { user_id: user.id }
    res.json({
        user: user,
        accessToken: authService.signAccessToken(payload),
        refreshToken: authService.signRefreshToken(payload),
    })
}