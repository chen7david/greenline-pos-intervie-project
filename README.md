# ts-base-project

### Utilized Modules:
- express: web-server
- helmet: setting various HTTP headers on express to improve security
- express-promise-router: router
- jsonwebtoken: jwt
- knex: query builder
- sqlite3: db interface client
- objection: ORM
- pluralize: package that pluralized noun strings
- joi: validation
- dotenv: enviroment variable loading
- bcrypt: string encryption
- morgan: HTTP request logger middleware

### Utilized Development Modules:
- jest: js testing solution
- nodemon: automatically restarting node application on file save
- ts-node: TypeScript execution engine
- typescript: adds optional types to JavaScript
- unique-username-generator: generates unique username for testing

```bash
### Auth
+--------+-------------------------+
  Method | URI
+--------+-------------------------+
  POST   | /api/auth/login
  POST   | /api/auth/refresh
+--------+-------------------------+


### User
+--------+-------------------------+
  Method | URI
+--------+-------------------------+
  GET    | /api/users
  GET    | /api/username-available?username=some-username
  POST   | /api/users
  GET    | /api/users/:id
  PATCH  | /api/users/:id
  DELETE | /api/users/:id
+--------+-------------------------+
```