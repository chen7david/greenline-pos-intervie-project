import Role from '../models/role.model'
import mixinService from './base.service'


export default {

    
    ...mixinService(Role),

    
    async findOneByRolername(name: string){
        return this.findOneByKey('name', name)
    },
}