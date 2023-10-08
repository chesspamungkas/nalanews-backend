## Logout

To logout a user/author

**URL**: `localhost:3000/user/logout`

**Method**: `DELETE`

**Authentication**: Not required

## Request body

**Required fields:** `refreshToken`

**Optional fields:**

**Data**:

```bash
{
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTY2NzU1NTgsImV4cCI6MTY5Njc2MTk1OCwiYXVkIjoiXCI2NTIxMWJmYWEyZGYxZDIyYzk4OTQzMTVcIiIsImlzcyI6InRhemJpbnVyLmluZm8ifQ.z0viUYgqnup3WnRYGmGRwqLjMc4St_a00O0tTd8de4w"
}
```

## Success response

**Code**: `200 OK`

**Content**:

```bash
User Logout
```

## Error response

**Condition**: If any of the required fields is absent

**Code**: `400 Unauthorized`

**Content**:

```bash
{
    "error": {
        "status": 400,
        "message": "No refreshToken exists!"
    }
}
```
