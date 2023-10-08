## Get list of all categorized blog counts of user

To get a list of all categories & number of blogs of each category of a user/author

**URL**: `GET localhost:3000/category/categorizedBlogs/:authorId`

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
[
    {
        "_id": "65214326444c592ee158968e",
        "category": "business",
        "count": 1
    },
    {
        "_id": "65214343444c592ee1589690",
        "category": "entertainment",
        "count": 0
    },
    {
        "_id": "6521434e444c592ee1589692",
        "category": "general",
        "count": 0
    },
    {
        "_id": "6521435b444c592ee1589694",
        "category": "health",
        "count": 0
    },
    {
        "_id": "65214367444c592ee1589696",
        "category": "science",
        "count": 0
    },
    {
        "_id": "65214373444c592ee1589698",
        "category": "sports",
        "count": 1
    },
    {
        "_id": "6521437a444c592ee158969a",
        "category": "technology",
        "count": 0
    },
    {
        "_id": "65214549444c592ee158969d",
        "category": "test updated",
        "count": 0
    },
    {
        "_id": "652262f1ae35bbf6a8176b9f",
        "category": "marketing  updated",
        "count": 0
    }
]
```

## Error response

**Condition**:

**Code**:

**Content**:

```bash

```
