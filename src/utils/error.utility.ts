import { invalidPasswordSchemaError, invalidUsernameSchemaError } from '../middleware/validation.middleware'
import { NextFunction, Request, Response } from "express";
import { JsonWebTokenError } from 'jsonwebtoken'
import { ValidationError } from 'joi'
import { UniqueViolationError } from 'objection'


export class ApiError extends Error {

    public code: number;
    public message: string;

    constructor(code: number, message: string) {
        super(message)
        this.code = code
        this.message = message
    }

    static badRequest(message: string) {
        return new ApiError(400, message)
    }

    static internal(message: string) {
        return new ApiError(500, message)
    }

    static authorization(message: string) {
        return new ApiError(401, message)
    }

    static validation(message: string) {
        return new ApiError(422, message)
    }

    static invalidUsername(original: object) {
        const { error } = invalidUsernameSchemaError.validate(original)
        return error
    }

    static invalidPassword(original: object) {
        const { error } = invalidPasswordSchemaError.validate(original)
        return error
    }
}


export async function expressErrorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    console.error(err.stack)

    if (err instanceof ApiError) {
        console.log('is instanceof ApiError')
        res.status(err.code).json({ message: err.message })
        return
    } else if (err instanceof JsonWebTokenError) {
        res.status(401).json({ message: err.message })
        return
    } else if (err instanceof ValidationError) {
        res.status(422).json(err)
        return
    } else if (err instanceof UniqueViolationError) {
        const entity = err.columns[0]
        res.status(422).json({ message: `this ${entity} is taken` })
        return
    }
    res.status(500).json({ message: 'something went wrong!' })
}


