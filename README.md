# API Technical Skills Assessment

## Technical Challenge:

A small Node.JS express server (API) that connects to a DB.

**Timebox:** 2-3 hours

### The app should have the concept of

- Company (should have a name)
- Customer that belong to company (user can only belong to 1 company and should have a name)
- Products (belong to only 1 company, have a name)
- Sales (made up of products)

### Bonus points:

- TypeScript
- IaC - AWS (ideally AWS CDK or CLI)
- Managing DB migrations

## Additional Instructions:

If you have any questions, please don’t hesitate to reach out and ask.

We don’t want this to take up too much of your time, but we’d like to review something that represents what you're capable of. Ideally you don't spend more than a couple of hours on this. Please let us know the types of things you'd do if you had more time and let us know how you’d consider tackling these. 

Also, if there are any higher level concepts that you’d want to implement if this was “for real” please let us know.

Finally, if you have any GitHub or online samples you think we should see, we'd love to check those out too!


## Check List:

### main criteria:
- [] Company (should have a name)
- [] Customer that belong to company (user can only belong to 1 company and should have a name)
- [] Products (belong to only 1 company, have a name)
- [] Sales (made up of products)


### predural steps:
- [] write use case
- [] create list of endpoints
- [] determine db enties and relationships (ERD)
- [] create migration schemas
- [] write models
- [] write services
- [] test services
- [] setup express server
- [] write controllers
- [] write routes and mount to server
- [] test controllers
- [] add nice to have functionality


## Routes:
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
- <code>test</code>: runs tests

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