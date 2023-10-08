## Get list of all blogs with pagination of certain country

To Get list of all blogs with pagination of certain country with information & pagination. 50 blogs in each page.

**URL**: `localhost:3000/blog/country/:countryId?page=:pageNumber`

**Method**: `GET`

**Authentication**: Not required

## Request body

**Required fields:** `countryId`

**Optional fields:** `pageNumber` (query params: default is 1)

## Success response

**Code**: `200 OK`

**Content**:

```bash
{
    "result": [
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
