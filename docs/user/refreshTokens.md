## Refresh tokens

To refresh tokens & generate new pair of accessToken, refreshToken

**URL**: `localhost:3000/user/refreshToken`

**Method**: `POST`

**Authentication**: Required

## Request body

**Required fields:** `refreshToken`

**Optional fields:**

**Data**:

```bash
{
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTY2NzE0NTQsImV4cCI6MTY5Njc1Nzg1NCwiYXVkIjoiXCI2NTIxMjY4MjNjNWY3MDU0OTEzYzkwNTJcIiIsImlzcyI6InRhemJpbnVyLmluZm8ifQ.apBseK_LYoznQONNJQ3aZKLjR45RmNitPkGaSBk1HLM"
}
```

## Success response

**Code**: `200 OK`

**Content**:

```bash
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTY3NDk4NTQsImV4cCI6MTY5NjgzNjI1NCwiYXVkIjoiXCI2NTIxMjY4MjNjNWY3MDU0OTEzYzkwNTJcIiIsImlzcyI6InRhemJpbnVyLmluZm8ifQ.Eiwgs_Hauubl50nIHyi7q4fxssGUqNTCjA6YsywqL7U",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTY3NDk4NTQsImV4cCI6MTY5NjgzNjI1NCwiYXVkIjoiXCI2NTIxMjY4MjNjNWY3MDU0OTEzYzkwNTJcIiIsImlzcyI6InRhemJpbnVyLmluZm8ifQ.vu3YINiO3ggjiAkjQdj9tRxJWt0cUL_wyE3d3NPUud4"
}
```

## Error response

**Condition**: If the refreshToken is absent, invalid or expired.

**Code**: `403 Forbidden`

**Content**:

```bash
{
    "error": {
        "status": 403,
        "message": "JsonWebTokenError"
    }
}
```
