## Create a new blog

To create a new blog

**URL**: `localhost:3000/blog`

**Method**: `POST`

**Authentication**: Required

## Request body

**Required fields:** `news_title`, `body`, `excerpt`, `country`, `category`, `external_link`

**Optional fields:** `cover_image`

**Example Data**:

```bash
{
    "news_title": "NalaNews Backend API",
    "body": "NalaNews Backend API body...",
    "excerpt": "NalaNews Backend API excerpt...",
    "country": "65215b84783d85077b04106e",
    "category": "65214326444c592ee158968e",
    "external_link": "https://github.com/chesspamungkas"
}
```

## Success response

**Code**: `200 OK`

**Content**:

```bash
{
    "author": "65211bfaa2df1d22c9894315",
    "news_title": "NalaNews Backend API",
    "cover_image": "https://res.cloudinary.com/dzsazqcec/image/upload/v1696613600/blogs/online-message-blog-chat-communication-envelop-graphic-icon-concept_bfcohk.jpg",
    "published": "08 Oct 2023",
    "country": "65215b84783d85077b04106e",
    "category": "65214326444c592ee158968e",
    "body": "NalaNews Backend API body...",
    "excerpt": "NalaNews Backend API excerpt...",
    "external_link": "https://github.com/chesspamungkas",
    "_id": "65224572de002a903a43be70",
    "__v": 0
}
```

## Error response

**Condition**: If any of the required fields is absent or `accessToken` is absent

**Code**: `401 No Access Token`

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
