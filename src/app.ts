import config from 'config'
import { md5, uuid } from './utils/crypto.utility'
import { paginate } from './utils/paginate.utility'
import { generateUsername } from 'unique-username-generator'
import {} from 'objection'
import {} from 'pluralize'
import {} from 'jsonwebtoken'
const set = Array(300).fill(0).map((e, index) => index)
const res = paginate(set, 1, 40)
console.log({
    count: res.results.length,
    res,
})


import userService from "./services/user.service";

async function main(){
    const users = await userService.find(9,10)
    const user = await userService.findOne(5)
    // .patch(5, {
    //     username: 'peppa' 
    // })

    // const $user = await userService.create({
    //     username: generateUsername('-',3),
    //     password: 'password'
    // })
    console.log({users, user})
}

main()