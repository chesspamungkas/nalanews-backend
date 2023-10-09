# NalaNews Backend Node.js Express.js RESTful API

<em> The frontend of this project can be found [here (Angular)](https://github.com/chesspamungkas/nalanews-backend) </em>

### Contents

- [Features](#features)
- [Tech used](#tech-used)
- [How to get the project](#how-to-get-the-project)
- [Run the project using docker](#run-the-project-using-docker)
- [API endpoints](#api-endpoints)

## Features:

- Users/Authors can create their profiles (token-based authentication)
- Users/Authors can edit their profile
- Users/Authors can create blogs. They can set the country of their blog (i.e. philipines, unites states, united kingdom etc)
- Users/Authors can create blogs. They can set the category of their blog (i.e. business, entertainment, general etc)
- Blogs of a particular country can be viewed
- Blogs of a particular category can be viewed

## Tech used:

**Runtime environment**

- [x] Node.js
- [x] Express.js

**Database**

- [x] MongoDB

**Image storage service**

- [x] Cloudinary

**Testing framework**

- [x] Jest

**Containerization tool**

- [x] Docker

## How to get the project:

#### Using Git (recommended)

1. Navigate & open CLI into the directory where you want to put this project & Clone this project using this command.

```bash
git clone https://github.com/chesspamungkas/nalanews-backend
```

#### Using manual download ZIP

1. Download repository
2. Extract the zip file, navigate into it & copy the folder to your desired directory

## Setting up environments

1. There is a file named `.env.example` on the root directory of the project
2. Create a new file by copying & pasting the file on the root directory & rename it to just `.env`
3. The `.env` file is already ignored, so your credentials inside it won't be committed
4. Change the values of the file. Make changes of comment to the `.env.example` file while adding new constants to the `.env` file.

## Run the project using docker

1. To build **docker image**

   ```bash
   docker compose build --no-cache
   ```

2. To run the **containers** in detached mode (wait for a while for database connection)

   ```bash
   docker compose up -d
   ```

3. To view running **containers**

   ```bash
   docker container ps
   ```

4. To view **API logs**

   ```bash
   docker logs nalanews-api
   ```

5. To **run tests**, first enter within the API container
   - on windows CMD (not switching to bash)
     ```bash
         docker exec -it nalanews-api /bin/sh
     ```
   - on windows CMD (after switching to bash)
     ```bash
         docker exec -it nalanews-api //bin//sh
     ```
     or
     ```bash
         winpty docker exec -it nalanews-api //bin//sh
     ```
   - now run **test command**
     ```bash
         npm test
     ```
6. To exit from **API container**, press <kbd>Ctrl</kbd>+<kbd>D</kbd> on terminal

7. To **stop** the containers
   `bash
    docker compose down
`

## API endpoints:

#### Indication

- [x] **Authentication required**
- [ ] **Authentication not required**

### User

- [ ] [Register](docs/user/register.md): `POST localhost:3000/user/register`
- [ ] [Login](docs/user/login.md): `GET localhost:3000/user/login`
- [x] [Edit user profile](docs/user/editProfile.md): `PUT localhost:3000/user/editProfile`
- [x] [Refresh token](docs/user/refreshToken.md): `POST localhost:3000/user/me/refreshToken`
- [x] [Get loggedin user's info](docs/user/getLoggedInUserInfo.md): `GET localhost:3000/user/myProfile`
- [ ] [Get author's info](docs/user/authorProfile.md): `GET localhost:3000/user/authorProfile/:authorId`
- [ ] [Logout](docs/user/logout.md): `GET localhost:3000/user/logout`

### Country

- [x] [Create a new country](docs/country/createCountry.md): `POST localhost:3000/country`
- [x] [Edit a country](docs/country/editCountry.md): `POST localhost:3000/country/editCountry`
- [x] [Delete a country](docs/country/deleteCountry.md): `DELETE localhost:3000/country/:countryId`
- [ ] [Get list of all countries](docs/category/getCountries.md): `GET localhost:3000/country`
- [ ] [Get list of all countries blog counts of user](docs/category/getCountryBlogCount.md): `GET localhost:3000/category/countriesBlogs/:authorId`

### Category

- [x] [Create a new category](docs/category/createCategory.md): `POST localhost:3000/category`
- [x] [Edit a category](docs/category/editCategory.md): `POST localhost:3000/category/editCategory`
- [ ] [Get list of all categories](docs/category/getCategories.md): `GET localhost:3000/category`
- [ ] [Get list of all categorized blog counts of user](docs/category/getListOfCategoriezedBlogs.md): `GET localhost:3000/category/categorizedBlogs/:authorId`

### Blog

- [x] [Create a new blog](docs/blog/createBlog.md): `POST localhost:3000/blog`
- [x] [Edit a blog](docs/category/editBlog.md): `POST localhost:3000/blog/editBlog`
- [x] [Delete a blog](docs/category/deleteBlog.md): `DELETE localhost:3000/blog/:blogId`
- [ ] [Get details of a blog](docs/blog/getSingleBlog.md): `GET localhost:3000/blog/:blogId`
- [ ] [Get list of all blogs with pagination of certain country](docs/blog/getBlogCountryList.md): `GET localhost:3000/blog/:countryId?`
- [ ] [Get list of all blogs with pagination of certain category](docs/blog/getBlogCategoryList.md): `GET localhost:3000/blog/:categoryId?`
- [ ] [Get list of all blogs with pagination of certain country of a user/author](docs/blog/getBlogCountryUserList.md): `GET localhost:3000/blog/:authorId?/:countryId?`
- [ ] [Get list of all blogs with pagination of certain category of a user/author](docs/blog/getBlogCategoryUserList.md): `GET localhost:3000/blog/:authorId?/:categoryId?`
