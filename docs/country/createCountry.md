## Create a new country

To create a new country

**URL**: `localhost:3000/country`

**Method**: `POST`

**Authentication**: Required

## Request body

**Required fields:** `country`, `code`

**Optional fields:**

**Data**:

```bash
{
    "country": "Singapore",
    "code": "sg"
}
```

## Success response

**Code**: `200 OK`

**Content**:

```bash
{
    "country": "Singapore",
    "code": "sg",
    "_id": "65225f3aae35bbf6a8176b85",
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
        "message": "Country validation failed: country: Path `country` is required."
    }
}
```
