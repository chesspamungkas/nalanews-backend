## Edit user profile

To update/edit a registered user's information

**URL**: `localhost:3000/user/editProfile`

**Method**: `PUT`

**Authentication**: Required

## Request body

**Required fields:**

**Optional fields:** `email`, `first_name`, `last_name`

**Data**:

```bash
{
    "first_name": "Chess",
    "last_name": "Pamungkas"
}
```

## Success response

**Code**: `200 OK`

**Content**:

```bash
{
    "_id": "652126823c5f7054913c9052",
    "profile_image": "https://res.cloudinary.com/dzsazqcec/image/upload/v1696613628/profiles/classic-portrait-silhouette-man_k8tmji.jpg",
    "email": "caturpamungkas@gmail.com",
    "first_name": "Chess",
    "last_name": "Pamungkas"
}
```

## Error response

**Condition**: If `accessToken` is absent.

**Code**: `401 Unauthorized`

**Content**:

```bash
{
    "error": {
        "status": 401,
        "message": "No accessToken"
    }
}
```

**Code**: `500 Internal Server Error`

**Content**:

```bash
{
    "error": {
        "status": 500,
        "message": "Blog validation failed: body: Path `body` is required."
    }
}
```
