## Edit a category

To edit a category

**URL**: `localhost:3000/category/editCategory`

**Method**: `PUT`

**Authentication**: Required

## Request body

**Required fields:** `categoryId`

**Optional fields:** `category`

**Data**:

```bash
{
    "categoryId": "652262f1ae35bbf6a8176b9f",
    "category": "Marketing  Updated"
}
```

## Success response

**Code**: `200 OK`

**Content**:

```bash
{
    "_id": "652262f1ae35bbf6a8176b9f",
    "category": "marketing  updated"
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
