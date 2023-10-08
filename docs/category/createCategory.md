## Create a new category

To create a new category

**URL**: `localhost:3000/category`

**Method**: `POST`

**Authentication**: Required

## Request body

**Required fields:** `category`

**Optional fields:**

**Data**:

```bash
{
    "category": "Marketing"
}
```

## Success response

**Code**: `200 OK`

**Content**:

```bash
{
    "category": "marketing",
    "_id": "652262f1ae35bbf6a8176b9f",
    "__v": 0
}
```

## Error response

**Condition**: If any of the required params is absent or the `accessToken` is absent.

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
        "message": "Category validation failed: category: Path `category` is required."
    }
}
```
