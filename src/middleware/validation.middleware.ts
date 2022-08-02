import v, { Schema } from 'joi'
import { Request, Response, NextFunction } from 'express'
import { ApiError } from "../utils/error.utility";
const joiOptions = { abortEarly: false, stripUnknown: true }


export const invalidPasswordSchemaError = v.object({ allowUnknown: true }).keys({
    username: v.string().max(0).messages({ 'string.max': `invalid "password"` }),
})


export const invalidUsernameSchemaError = v.object({ allowUnknown: true }).keys({
    username: v.string().max(0).messages({ 'string.max': `invalid "username"` }),
})

export const createUser = v.object().options(joiOptions).keys({
    username: v.string().min(3).max(30).required(),
    password: v.string().min(6).max(256).required(),
    email: v.string().email().required(),
})


export const patchUser = v.object().options(joiOptions).keys({
    password: v.string().min(6).max(256)
})


export const createCompany = createUser.keys({
    name: v.string().min(3).max(30).required(),
    description: v.string().min(3).max(30).required(),
})


export const loginUser = v.object().options(joiOptions).keys({
    username: v.string().required(),
    password: v.string().required()
})


export const validator = (schema: Schema) => async function (req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const { value, error } = schema.validate(req.body)
        if (error) next(error)
        req.body = value
        next()
    } catch (err) {
        ApiError.internal('unknow validation error')
    }
}
