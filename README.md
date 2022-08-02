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

# API Documentation

#### Node commands:
- <code>dev</code>: starts server in development mode.
- <code>start</code>: starts server in production mode.
- <code>build</code>: creates a dest folder containing our porject in JavaScript
- <code>knex</code>: allows you to run knex from subdirectory.
- <code>migrate:up</code>: migrates db one migration up
- <code>migrate:down</code>: migrates db one migration down
- <code>test</code>: runs tests

#### Utilized Modules:
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

#### Utilized Development Modules:
- <code>jest</code>: js testing solution
- <code>nodemon</code>: automatically restarting node application on file save
- <code>ts-node</code>: TypeScript execution engine
- <code>typescript</code>: adds optional types to JavaScript
- <code>unique-username-generator</code>: generates unique username for testing


## Routes:
#### Auth
**NOTE:** Becuase this api support the registration of multiple <code>Companies</code>, a valid <code>company-id</code> should be passed along in the request header when calling the following routes:
- <code> /api/users</code>
- <code> /api/register</code>
- <code> /auth/login</code>

The <code>company-id</code> should be placed in the request header as follows: 
```http
POST http://some-domain/api/users
Content-Type: application/json
x-company-id: your-company-id
```
You can obtain a <code>company-id</code> by creating a new company account. When you create a company account, a default user with the role of <code>admin</code> is automatically created for you that you can use to manage your company-profile. This <code>admin</code> user can retrieve the company-id by calling <code>/api/companie-self</code>.
```bash

### Company
+--------+-------------------------+
  Method | URI
+--------+-------------------------+
  GET    | /api/company-name-available?name=some-username
  GET    | /api/companies
  GET    | /api/companie-self
  POST   | /api/companies
  PATCH  | /api/companies/:id
  DELETE | /api/companies/:id
  GET    | /api/companies/:id/users
  GET    | /api/companies/:id/orders
  GET    | /api/companies/:id/products
  POST   | /api/companies/:id/products
+--------+-------------------------+

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
  POST   | /api/register
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

# API Development Cycle Utilities

## Check List:

### Main Criteria:
- [x] Company (should have a name)
- [x] Customer that belong to company (user can only belong to 1 company and should have a name)
- [x] Products (belong to only 1 company, have a name)
- [x] Sales (made up of products)


### Procedural Steps:
- [X] Determine functional requirements
- [X] Write use case
- [X] Create list of endpoints
- [X] Determine db enties and relationships (ERD)
- [X] create migration schemas
- [X] Write models
- [X] Write services
- [-] Test services
- [X] Setup express server
- [X] Write controllers
- [X] Write routes and mount to server
- [-] Test controllers
- [-] Add nice to have functionality


## Functional Requirements:


### Auth
<code>actor: non-registered-user</code>

- FR01   | should be able to create a new company.
- FR02   | should be able to register a new account.
- FR03   | should be able to login.
- FR04   | should be able to stay logged-in with a sliding windown extention period of 30 days.
- FR00   | should be able to change password.
- FR00   | should be able to verify through email.


### Company
<code>actor: admin-user</code>

- FR05   | should be able change company name.
- FR06   | should be able change company description.


### Roles & Permissions
<code>actor: admin-user</code>

- FR07   | should be able to assign and revoke roles from user.
- FR08   | should be able to to register a new roles.
- FR09   | should be able to to delete custom roles.
- FR10   | should be able to to change role scope roles by adding and removing permissions.


### Products A
<code>actor: seller-user</code>

- FR11   | should be able to create a new product.
- FR12   | should be able to view all products of their company.
- FR13   | should be able to add product options to the respective product.
- FR14   | should be able to add and remove stock from product options.


### Products B
<code>actor: customer-user</code>

- FR16   | should be able to view all products of the company where they registered their account.
- FR17   | should be able to create an order based on items in their shoping cart.
- FR18   | should be able to know when a product is out of stock before creating an order.
- FR19   | should be able to cancel request cancelation of an order.


<code>User:Seller:Product</code>

- FR20   | should be able to view all orders.
- FR21   | should be able to query based on order status.
- FR22   | should be able to update order status manually.
- FR23   | should be able to cancel an order.
- FR24   | should be able to generate an invoice based on order.
- FR25   | should be able to handle order cancelations/returns.




## DB Schema (ERD)
 The DB schema below is a graphical representation of the entities and their relationships. 

![greenline-pos-intervie-project(ERD) background](https://user-images.githubusercontent.com/19669287/182287106-32d55fdb-c886-4064-85c7-eb5cfb6f8d09.svg)

