import Model from './base.model'
import Role from './role.model';

class Permission extends Model {

    id!: number;
    name: string;
    description: string;


    static get relationMappings() {


        return {


            roles: {
                relation: Model.ManyToManyRelation,
                modelClass: Role,
                join: {
                    from: 'permissions.id',
                    to: 'roles.id',
                    through: {
                        from: 'role_permissions.permission_id',
                        to: 'role_permissions.role_id',
                    }
                }
            },


        }


    }

}

export default Permission