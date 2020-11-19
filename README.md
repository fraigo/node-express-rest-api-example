# node-express-rest-api-example

A Basic Node.js/Express REST API implementation example.

Full Tutorial at https://developerhowto.com/2018/12/29/build-a-rest-api-with-node-js-and-express-js/

# Usage

* Run `npm install` to installl dependencies
* Run `npm run start` to start the local server
* Load `http://localhost:8000` to test the endpoint. It will display a json result `{"message":"Ok"}`

# API Endpoints

## GET /api/users

Get a list of users

```json
{
  "message": "success",
  "data": [
    {
      "id": 1,
      "name": "admin",
      "email": "admin@example.com",
      "password": "a66abb5684c45962d887564f08346e8d"
    },
    {
      "id": 2,
      "name": "user",
      "email": "user@example.com",
      "password": "4da49c16db42ca04538d629ef0533fe8"
    }
  ]
}
```

## GET /api/user/{id}

Get user information by user id

```json
{
  "message": "success",
  "data": {
    "id": 1,
    "name": "admin",
    "email": "admin@example.com",
    "password": "a66abb5684c45962d887564f08346e8d"
  }
}
```

## POST /api/user/

To create a new user based on POST data (x-www-form-url-encoded)

* name: User name
* email: User email
* password: User password

![Postman example](https://developerhowto.com/wp-content/uploads/2018/12/PostMan-POST-request.png)


## PATCH /api/user/{id}

To update user data by id, based on POST data (x-www-form-url-encoded)

* name: User name
* email: User email
* password: User password

You can send only one attribute to update, the rest of the info remains the same.

## DELETE /api/user/{id}

To remove a user from the database. 








