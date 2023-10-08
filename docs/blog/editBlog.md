## Edit a blog

To edit a blog

**URL**: `localhost:3000/blog/editBlog`

**Method**: `PUT`

**Authentication**: Required

## Request body

**Required fields:** `blogId`

**Optional fields:** `news_title`, `body`, `excerpt`, `country`, `category`, `external_link`, `cover_image`

**Example Data**:

```bash
{
    "blogId": "65224572de002a903a43be70",
    "body": "Lorem ipsum dolor sit amet. Non delectus officia et similique officia quo illum dolores ut dolorum nostrum sit aliquam quidem At enim tempora qui error asperiores. Et consequatur quisquam At porro distinctio eum adipisci culpa et autem autem qui distinctio illum sit tempore eius. Cum animi voluptatum ad possimus dicta quo fuga suscipit ab reprehenderit corporis ut assumenda iste"
}
```

## Success response

**Code**: `200 OK`

**Content**:

```bash
{
    "_id": "65224572de002a903a43be70",
    "news_title": "NalaNews Backend API",
    "cover_image": "https://res.cloudinary.com/dzsazqcec/image/upload/v1696613600/blogs/online-message-blog-chat-communication-envelop-graphic-icon-concept_bfcohk.jpg",
    "country": "65215b84783d85077b04106e",
    "category": "65214326444c592ee158968e",
    "body": "Lorem ipsum dolor sit amet. Non delectus officia et similique officia quo illum dolores ut dolorum nostrum sit aliquam quidem At enim tempora qui error asperiores. Et consequatur quisquam At porro distinctio eum adipisci culpa et autem autem qui distinctio illum sit tempore eius. Cum animi voluptatum ad possimus dicta quo fuga suscipit ab reprehenderit corporis ut assumenda iste",
    "excerpt": "NalaNews Backend API excerpt...",
    "external_link": "https://github.com/chesspamungkas"
}
```

## Error response

**Condition**: If the required field is absent or `accessToken` is absent

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

**Code**: `404 Incorrect Information`

**Content**:

```bash
{
    "error": {
        "status": 404,
        "message": "Incorrect information"
    }
}
```
