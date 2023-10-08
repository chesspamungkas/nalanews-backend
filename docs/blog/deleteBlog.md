## Edit a blog

To edit a blog

**URL**: `localhost:3000/blog/:blogId`

**Method**: `DELETE`

**Authentication**: Required

## Request body

**Required fields:** `blogId`

**Optional fields:**

## Success response

**Code**: `200 OK`

**Content**:

```bash
Blog deleted successfully!
```

## Error response

**Condition**: If the required field is absent/not found or `accessToken` is absent

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

**Code**: `404 Route does not exist`

**Content**:

```bash
{
    "error": {
        "status": 404,
        "message": "This route does not exists!"
    }
}
```

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
