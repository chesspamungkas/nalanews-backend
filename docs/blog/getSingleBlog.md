## Get details of a blog

To get detailed content of a particular blog

**URL**: `localhost:3000/blog/details/:blogId`

**Method**: `GET`

**Authentication**: Not required

## Request body

**Required fields:** `blogId`

**Optional fields:**

## Success response

**Code**: `200 OK`

**Content**:

```bash
{
    "_id": "652184de78664a81424ce514",
    "author": {
        "_id": "65211bfaa2df1d22c9894315",
        "first_name": "Chess",
        "last_name": "Pamungkas",
        "joined": "07 Oct 2023"
    },
    "news_title": "Blog 1 for business",
    "cover_image": "https://res.cloudinary.com/dzsazqcec/image/upload/v1696613600/blogs/online-message-blog-chat-communication-envelop-graphic-icon-concept_bfcohk.jpg",
    "published": "07 Oct 2023",
    "country": {
        "_id": "65215b84783d85077b04106e",
        "country": "Indonesia",
        "code": "id"
    },
    "category": {
        "_id": "65214326444c592ee158968e",
        "category": "business"
    },
    "body": "Body blog 1 for business",
    "excerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    "external_link": "https://github.com/chesspamungkas",
    "__v": 2
}
```

## Error response

**Condition**: If the required field is absent/not found

**Code**: `400 Blog Not Found`

**Content**:

```bash
{
    "error": {
        "status": 400,
        "message": "Blog not found"
    }
}
```

**Code**: `404 No Blog Found`

**Content**:

```bash
{
    "error": {
        "status": 404,
        "message": "No blog found with this blog id"
    }
}
```
