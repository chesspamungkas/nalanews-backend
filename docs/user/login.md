## Login

To login a user/author, collect loggedin user data & tokens

**URL**: `localhost:3000/user/login`

**Method**: `POST`

**Authentication**: Not required

## Request body

**Required fields:** `email`, `password`

**Optional fields:**

**Data**:

```bash
{
    "email": "chesspamungkas@gmail.com",
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
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTY3NDk0NjAsImV4cCI6MTY5NjgzNTg2MCwiYXVkIjoiXCI2NTIyNTY4NWFlMzViYmY2YTgxNzZiNzdcIiIsImlzcyI6InRhemJpbnVyLmluZm8ifQ.vetIQZ6LfqWWtQ4FoOnXSPULVu-fRXHrnO33Hg6lsO4",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTY3NDk0NjAsImV4cCI6MTY5NjgzNTg2MCwiYXVkIjoiXCI2NTIyNTY4NWFlMzViYmY2YTgxNzZiNzdcIiIsImlzcyI6InRhemJpbnVyLmluZm8ifQ.iXaSlEZKvmU0V5O8hlND_KZimyzSkCjJsePEzTkaeTQ"
}
```

## Error response

**Condition**: If any of the required fields is absent, `email` or `password` is wrong.

**Code**: `400 Unauthorized`

**Content**:

```bash
{
    "error": {
        "status": 400,
        "message": "Incorrect email or password"
    }
}
```
