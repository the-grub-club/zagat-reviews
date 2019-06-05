# Project Name

A recreation of the frontend for Zagat's reviews page (example: https://www.zagat.com/r/benu-san-francisco.)

This JavaScript app serves static HTML files through an Express server using a 
Webpack bundle that transpiles a React & jQuery frontend populated with PostgreSQL data.

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)
4. [API](#API)
5. [Dependencies](#Dependencies)
6. [License](#License)

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

|     Endpoint       | TYPE |            Operation              |
|--------------------|------|-----------------------------------|
| /:id/zagar_reviews | GET  | Get review of specific restaurant |

## SampleCall

  ```javascript
    axios.get(`/api/restaurants/${params.get('id')}/zagat_reviews`)
    .then((response) => {
      this.setState({ data: response.data })
    })
    .catch((error) => {
      console.log(error)
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