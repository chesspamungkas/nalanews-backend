## Get logged In User Info

To get the information of loggedin user

**URL**: `localhost:3000/user/myProfile`

**Method**: `GET`

**Authentication**: Required

## Request body

**Required fields:**

**Optional fields:**

**Data**:

```bash

```

## Success response

**Code**: `200 OK`

**Content**:

```bash
{
    "_id": "65225685ae35bbf6a8176b77",
    "profile_image": "https://res.cloudinary.com/dzsazqcec/image/upload/v1696613628/profiles/classic-portrait-silhouette-man_k8tmji.jpg",
    "email": "chesspamungkas@gmail.com",
    "first_name": "Catur",
    "last_name": "Pamungkas",
    "joined": "08 Oct 2023"
}
```

## Error response

**Condition**: If `accessToken` in absent.

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
