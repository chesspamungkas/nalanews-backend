## Get list of all blogs with pagination of certain category

To Get list of all blogs with pagination of certain category with information & pagination. 50 blogs in each page.

**URL**: `localhost:3000/blog/category/:categoryId?page=:pageNumber`

**Method**: `GET`

**Authentication**: Not required

## Request body

**Required fields:** `categoryId`

**Optional fields:** `pageNumber` (query params: default is 1)

## Success response

**Code**: `200 OK`

**Content**:

```bash
{
    "result": [
        {
            "_id": "65218736e57d322f34b94f87",
            "author": {
                "_id": "65211bfaa2df1d22c9894315",
                "first_name": "Chess",
                "last_name": "Pamungkas",
                "joined": "07 Oct 2023"
            },
            "cover_image": "https://res.cloudinary.com/dzsazqcec/image/upload/v1696613600/blogs/online-message-blog-chat-communication-envelop-graphic-icon-concept_bfcohk.jpg",
            "country": {
                "_id": "65215b7a783d85077b04106c",
                "country": "Argentina",
                "code": "ar"
            },
            "category": {
                "_id": "65214373444c592ee1589698",
                "category": "sports"
            }
        }
    ],
    "totalBlogs": 1,
    "totalPages": 1,
    "currentPage": 1
}
```

## Error response

**Condition**: If the required field not found

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
