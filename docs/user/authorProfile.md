## Get user/author's info

To get registered user/author's detail information

**URL**: `localhost:3000/user/authorProfile/:authorId`

**Method**: `GET`

**Authentication**: Not required

## Request body

**Required fields:** `authorId` (query params)

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

**Condition**: If the required field is absent/not found

**Code**: `400 Bad Request`

**Content**:

```bash
{
    "error": {
        "status": 400,
        "message": "Invalid authorId"
    }
}
```
