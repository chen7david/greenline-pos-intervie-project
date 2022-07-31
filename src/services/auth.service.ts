import Token, { JwtPayload } from 'jsonwebtoken'
import config from '../../config/default'
import { ApiError } from '../utils/error.utility'

export function signAccessToken(payload: object): string {
    return Token.sign(
        payload,
        config.security.token.access.secret,
        { expiresIn: config.security.token.access.expiry }
    )
}


export function signRefreshToken(payload: object): string {
    return Token.sign(
        payload,
        config.security.token.refresh.secret,
        { expiresIn: config.security.token.refresh.expiry }
    )
}


export function verifyAccessToken(token: string): JwtPayload {
    const payload = Token.verify(token, config.security.token.access.secret)
    if (typeof payload == 'string' || payload.constructor !== Object) {
        throw (ApiError.authorization('invalid access token'))
    }
    return payload
}


export function verifyRefreshToken(token: string): JwtPayload {
    const payload = Token.verify(token, config.security.token.refresh.secret)
    if (typeof payload == 'string' || payload.constructor !== Object) {
        throw (ApiError.authorization('invalid access token'))
    }
    return payload
}