import crypto from 'crypto'

export function digits(size = 6) {
    const array = new Array(size - 1)
    const zeros = array.fill(0).join('')
    const first = parseInt(`1${zeros}`)
    const second = parseInt(`9${zeros}`)
    return Math.floor(first + Math.random() * second)
}

export function md5(string?: string | null) {
    const random = new Date().toString() + Math.random()
    return crypto.createHash('md5').update(String(string || random)).digest("hex");
}

export function uuid() {
    return crypto.randomUUID()
}