## Get a list of all countries & number of blogs of each country of a user/author

To get a list of all countries & number of blogs of each category of a user/author

**URL**: `GET localhost:3000/country/countriesBlogs/:authorId`

**Method**: `GET`

**Authentication**: Not required

## Request body

**Required fields:** `authorId` (query params)

**Optional fields:**

## Success response

**Code**: `200 OK`

**Content**:

```bash
[
    {
        "_id": "65215b08783d85077b041060",
        "country": "Philippines",
        "code": "ph",
        "count": 0
    },
    {
        "_id": "65215b3c783d85077b041062",
        "country": "United States",
        "code": "us",
        "count": 0
    },
    {
        "_id": "65215b4e783d85077b041064",
        "country": "United Kingdom",
        "code": "gb",
        "count": 0
    },
    {
        "_id": "65215b5a783d85077b041066",
        "country": "Canada",
        "code": "ca",
        "count": 0
    },
    {
        "_id": "65215b63783d85077b041068",
        "country": "France",
        "code": "fr",
        "count": 0
    },
    {
        "_id": "65215b6f783d85077b04106a",
        "country": "Australia",
        "code": "au",
        "count": 0
    },
    {
        "_id": "65215b7a783d85077b04106c",
        "country": "Argentina",
        "code": "ar",
        "count": 1
    },
    {
        "_id": "65215b84783d85077b04106e",
        "country": "Indonesia",
        "code": "id",
        "count": 1
    },
    {
        "_id": "65225f3aae35bbf6a8176b85",
        "country": "Singapore Updated",
        "code": "sg",
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
