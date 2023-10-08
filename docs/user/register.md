## Register

To register a new user/author, collect registered user data & tokens

**URL**: `localhost:3000/user/register`

**Method**: `POST`

**Authentication**: Not required

## Request body

**Required fields:** `email`, `first_name`, `last_name`, `password`

**Optional fields:**

**Data**:

```bash
{
    "email": "chesspamungkas@gmail.com",
    "first_name": "Catur",
    "last_name": "Pamungkas",
    "password": "password1234"
}
```

## Success response

**Code**: `200 OK`

**Content**:

```bash
{
    "user": {
        "_id": "65225685ae35bbf6a8176b77",
        "email": "chesspamungkas@gmail.com",
        "first_name": "Catur",
        "last_name": "Pamungkas"
    },
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTY3NDkxODksImV4cCI6MTY5NjgzNTU4OSwiYXVkIjoiXCI2NTIyNTY4NWFlMzViYmY2YTgxNzZiNzdcIiIsImlzcyI6InRhemJpbnVyLmluZm8ifQ.T02Bu0ZVoORh7f8CCd8C1xgZ0akBdqjhTXkUuRJ-gNE",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTY3NDkxODksImV4cCI6MTY5NjgzNTU4OSwiYXVkIjoiXCI2NTIyNTY4NWFlMzViYmY2YTgxNzZiNzdcIiIsImlzcyI6InRhemJpbnVyLmluZm8ifQ.R0ZQFg9gL5YsHuAX6drEP1QJR3_5OktRO1Iz5_ml4qU"
}
```

## Error response

**Condition**: If any of the required params is absent or the `email` is already registered.

**Code**: `500 Internal Server Error`

**Content**:

```bash
{
    "error": {
        "status": 500,
        "message": "\"first_name\" is required"
    }
}
```

**Code**: `409 Conflict`

**Content**:

```bash
{
    "error": {
        "status": 409,
        "message": "chesspamungkas@gmail.com already exists"
    }
}
```
