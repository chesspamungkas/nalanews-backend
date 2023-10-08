## Edit a country

To edit a country

**URL**: `localhost:3000/country/editCountry`

**Method**: `PUT`

**Authentication**: Required

## Request body

**Required fields:** `countryId`

**Optional fields:** `country`, `code`

**Data**:

```bash
{
    "countryId": "65225f3aae35bbf6a8176b85",
    "country": "Singapore Updated"
}
```

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
