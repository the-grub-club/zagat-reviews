# Project Name

A recreation of the frontend for Zagat's reviews page (example: https://www.zagat.com/r/benu-san-francisco.)

This JavaScript app serves static HTML files through an Express server using a 
Webpack bundle that transpiles a React & jQuery frontend populated with PostgreSQL data.

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)
4. [API](#API)
5. [GET](#GET)
6. [POST](#POST)
7. [DELETE](#DELETE)
8. [PUT](#PUT)
9. [Dependencies](#Dependencies)
10. [License](#License)

## Usage

1.) To start the server:

  [ npm run start ]

2.) To make webpack watch files:

  [ npm run react-dev ]

3.) To run Jest & Enzyme tests:

  [ npm run test ]

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
— Express
— Webpack
— React
— jQuery
— Jest
— Enzyme

## Development

## API

|     Endpoint          | TYPE |             Operation             |
|-----------------------|------|-----------------------------------|
| restaurant/:id/review | GET  | Get review of specific restaurant |
| restaurant/:id/review | POST |    Post one restaurant review     |
| restaurant/:id/review |DELETE|      Delete review by id          |
| restaurant/:id/review |  PUT | Update review of restaurant by id |

## GET

URL

`restaurant/:id/review`

Method:

`GET`

URL Params

Required:

id=[integer] (between 1 and 10.000.000)

Success Response:

Code: 200 
Content: {
        "rest_id": 178,
        "name": "Tillman Group",
        "type": "Japanese",
        "price": "$$$$",
        "location": "Forest Hill",
        "description": "Revolutionary, bi-level kitchen & dining",
        "foodscore": "2.6",
        "decorscore": "1.6",
        "servicescore": "3.1",
        "review": "Velit aliquid labore aliquid dolore deleniti beatae in laudantium minus. In porro debitis inventore est. Quia delectus mollitia repudiandae occaecati delectus sit quisquam laborum veniam. Nobis a aut et necessitatibus autem. Omnis repellendus consectetur."
        }
Error Response:

Code: 404 NOT FOUND 
Content: `{ Cannot GET /api/restaurants/id/reviews }`

## SampleCall

  ```javascript
    $.ajax({
      method: 'GET',
      url: `/restaurants/${params.get('id')}/reviews`,
      success: (result) => {
        const newRestaurant = result[0];
        const quotedReview = this.addBoldedQuotes(result[0].review);
        newRestaurant.review = quotedReview;
        this.setState({
          currentRestaurant: newRestaurant,
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  ```

## POST

URL

`restaurant/:id/review`

Method:

`POST`

Data Params

{
  "rest_id": 178,
  "name": "Tillman Group",
  "type": "Japanese",
  "price": "$$$$",
  "location": "Forest Hill",
  "description": "Revolutionary, bi-level kitchen & dining",
  "foodscore": "2.6",
  "decorscore": "1.6",
  "servicescore": "3.1",
  "review": "Velit aliquid labore aliquid dolore deleniti beatae in laudantium minus. In porro debitis inventore est. Quia delectus mollitia repudiandae occaecati delectus sit quisquam laborum veniam. Nobis a aut et necessitatibus autem. Omnis repellendus consectetur."
}

Success Response:

Code: 201 

Error Response:

Code: 500 Was not able to insert 
Code : 400
Content: `{ Bad request }`

## DELETE

URL

`restaurant/:id/review`

Method:

`DELETE`

URL Params

Required:

id=[integer] (between 1 and 10.000.000)

Success Response:

Code: 200

Error Response:

Code: 500

## SampleCall

  ```javascript
    $.ajax({
      method: 'DELETE',
      url: `/restaurants/${params.get('id')}/reviews`,
      success: () => {
        console.log('Successfully deleted');
      },
      error: (error) => {
        console.log(error);
      },
    });
  ```

## PUT

URL

`restaurant/:id/review`

Method:

`PUT`

URL Params

Required:

id=[integer] (between 1 and 10.000.000)

Data Params

{
  "rest_id": 178,
  "name": "Tillman Group",
  "type": "Japanese",
  "price": "$$$$",
  "location": "Forest Hill",
  "description": "Revolutionary, bi-level kitchen & dining",
  "foodscore": "2.6",
  "decorscore": "1.6",
  "servicescore": "3.1",
  "review": "Velit aliquid labore aliquid dolore deleniti beatae in laudantium minus. In porro debitis inventore est. Quia delectus mollitia repudiandae occaecati delectus sit quisquam laborum veniam. Nobis a aut et necessitatibus autem. Omnis repellendus consectetur."
}

Success Response:

Code: 200

Error Response:

Code: 500

## SampleCall

  ```javascript
    $.ajax({
      method: 'PUT',
      url: `/restaurants/${params.get('id')}/reviews`,
      success: (response) => {
        this.setState({
          currentRestaurant: response,
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  ```

## Dependencies

From within the root directory:

```sh

General Set-up:

npm init
npm install webpack
npm install babel
npm install jquery
npm install react
npm install react-dom
npm install react-scripts

Tests:

npm install jest
npm install enzyme
npm install enzyme-adapter-react-16

Database and Data:

npm install faker

Linting:

npm install husky
npm install eslint
npm install lint-staged
```

## License

[MIT](https://choosealicense.com/licenses/mit/)