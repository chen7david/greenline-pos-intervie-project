# ts-base-project

```bash
### Auth
+--------+-------------------------+
  Method | URI
+--------+-------------------------+
  POST   | /api/auth/login
  POST   | /api/auth/refresh
+--------+-------------------------+
```

```bash
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

### Node commands:
- <code>dev</code>: starts server in development mode.
- <code>start</code>: starts server in production mode.
- <code>build</code>: creates a dest folder containing our porject in JavaScript
- <code>knex</code>: allows you to run knex from subdirectory.
- <code>migrate:up</code>: migrates db one migration up
- <code>migrate:down</code>: migrates db one migration down
- <code>test</code>: 

### Utilized Modules:
- <code>express</code>: web-server
- <code>helmet</code>: setting various HTTP headers on express to improve security
- <code>express-promise-router</code>: router
- <code>jsonwebtoken</code>: jwt
- <code>knex</code>: query builder
- <code>sqlite3</code>: db interface client
- <code>objection</code>: ORM
- <code>pluralize</code>: package that pluralized noun strings
- <code>joi</code>: validation
- <code>dotenv</code>: enviroment variable loading
- <code>bcrypt</code>: string encryption
- <code>morgan</code>: HTTP request logger middleware

### Utilized Development Modules:
- <code>jest</code>: js testing solution
- <code>nodemon</code>: automatically restarting node application on file save
- <code>ts-node</code>: TypeScript execution engine
- <code>typescript</code>: adds optional types to JavaScript
- <code>unique-username-generator</code>: generates unique username for testing