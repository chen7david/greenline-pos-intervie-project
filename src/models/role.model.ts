import Model from './base.model'
import Permission from './permission.model';
import Company from './company.model';
import User from './user.model';


class Role extends Model {


    id!: number;
    name: string;
    description: string;


    static get relationMappings() {


        return {


            company: {
                relation: Model.BelongsToOneRelation,
                modelClass: Company,
                join: {
                    from: 'roles.company_id',
                    to: 'companies.id',
                }
            },


            users: {
                relation: Model.ManyToManyRelation,
                modelClass: User,
                join: {
                    from: 'roles.id',
                    to: 'users.id',
                    through: {
                        from: 'user_roles.role_id',
                        to: 'user_roles.user_id',
                    }
                }
            },


            permissions: {
                relation: Model.ManyToManyRelation,
                modelClass: Permission,
                join: {
                    from: 'roles.id',
                    to: 'permissions.id',
                    through: {
                        from: 'role_permissions.role_id',
                        to: 'role_permissions.permission_id',
                    }
                }
            },


        }


    }
}

export default Role