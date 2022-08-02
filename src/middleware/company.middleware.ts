import companyService from '../services/company.service'
import { Request, Response, NextFunction } from 'express'
import { ApiError } from "../utils/error.utility";

export async function loadCompany(req: Request, res: Response, next: NextFunction): Promise<void> {

    const companyId = req.header('x-company-id')

    if (!companyId) return next()

    const instance = await companyService.findOneByCompanyId(companyId)
    if (!instance) throw (ApiError.authorization('invalid company-id'))

    res.locals["$company"] = instance
    next()
}