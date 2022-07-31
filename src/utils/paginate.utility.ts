

export interface IPaginate<T> {
    current_page: number,
    last_page: number,
    per_page: number,
    total_results: number,
    results: T[],
}


export function paginate<T>(arr: T[], page: any, limit: any): IPaginate<T> {
    page = parseInt(<string>page) || 1
    limit = parseInt(<string>limit) || 10
    const MAX_LIMIT = 30
    const take = limit > MAX_LIMIT ? MAX_LIMIT : limit
    const skip = (page - 1) * take
    const total_results = arr.length
    const last_page = Math.ceil(total_results / take)
    const results = arr.slice(skip, skip + take)
    return {
        current_page: page,
        last_page: last_page,
        per_page: take,
        total_results: total_results,
        results: results,
    }
}