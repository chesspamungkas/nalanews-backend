## Delete a country

To delete a country

**URL**: `localhost:3000/country/:countryId`

**Method**: `DELETE`

**Authentication**: Required

## Request body

**Required fields:** `countryId`

**Optional fields:**

## Success response

**Code**: `200 OK`

**Content**:

```bash
{
    "_id": "65225f3aae35bbf6a8176b85",
    "country": "Singapore Updated",
    "code": "sg"
}
```

## Error response

**Condition**: If the required field is absent/not found or `accessToken` is absent

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

**Code**: `404 Bad Request`

**Content**:

```bash
{
    "error": {
        "status": 400,
        "message": "Invalid countryId"
    }
}
```
