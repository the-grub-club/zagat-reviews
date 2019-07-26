# Restaurant's review app

App displays short description of a restaurant along with different types of scores and location. Handles 1200 RPS with 10,000,000 data entries. 

<img width="1604" alt="pic" src="https://user-images.githubusercontent.com/44889384/61912731-d5dda400-aeef-11e9-91a8-49b26d7d84fe.png">

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#Requirements)
3. [Development](#Development)
4. [API](#API)
5. [GET](#GET)
6. [POST](#POST)
7. [DELETE](#DELETE)
8. [PUT](#PUT)

## Usage

Step 1: Clone the repo
```javascript
git clone https://github.com/the-grub-club/zagat-reviews.git
```

Step 2: Create table specified in `schema.sql` file

Step 3: Seed data 
```javascript
node writeToCsv.js
```
Use `COPY` command from `schema.sql` file to copy all data from `csv` file to database.

Step 4: Compile files with webpack
```javascript
$ npm run react-dev
```

Step 5: Start the app
```javascript
$ npm start
```

## Requirements

* Node.js
* Git
* npm
* PostgreSQL

## Development

### **API**

|     Endpoint          | TYPE |             Operation             |
|-----------------------|------|-----------------------------------|
| restaurant/:id/review | GET  | Get review of specific restaurant |
| restaurant/:id/review | POST |    Post one restaurant review     |
| restaurant/:id/review |DELETE|      Delete review by id          |
| restaurant/:id/review |  PUT | Update review of restaurant by id |

### **GET**

URL: `restaurant/:id/review`

Method: `GET`

URL Params Required: id=[integer] (between 1 and 10,000,000)

#### _Success Response:_

* Code: 200 
```
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
```
#### _Error Response:_

* Code: 404 NOT FOUND 
* Content: `{ Cannot GET restaurants/id/review }`

#### _SampleCall_

  ```javascript
    $.ajax({
      method: 'GET',
      url: `/restaurant/${params.get('id')}/review`,
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

### **POST**

URL: `restaurant/:id/review`

Method: `POST`

```
Data Params: {
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
```
#### _Success Response:_

* Code: 201 

#### _Error Response:_

* Code: 500 Was not able to insert 
* Code : 400
* Content: `{ Bad request }`

#### _SampleCall_

  ```javascript
    $.ajax({
      method: 'POST',
      url: `/restaurant/${params.get('id')}/review`,
      success: () => {
        console.log('Successfully inserted');
      },
      error: (error) => {
        console.log(error);
      },
    });
  ```

### **DELETE**

URL: `restaurant/:id/review`

Method: `DELETE`

URL Params Required: id=[integer] (between 1 and 10,000,000)

#### _Success Response:_

* Code: 200

#### _Error Response:_

* Code: 500

#### _SampleCall_

  ```javascript
    $.ajax({
      method: 'DELETE',
      url: `/restaurant/${params.get('id')}/review`,
      success: () => {
        console.log('Successfully deleted');
      },
      error: (error) => {
        console.log(error);
      },
    });
  ```

### **PUT**

URL: `restaurant/:id/review`

Method: `PUT`

URL Params Required: id=[integer] (between 1 and 10,000,000)

```
Data Params: {
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
```

#### _Success Response:_

* Code: 200

#### _Error Response:_

* Code: 500

#### _SampleCall_

  ```javascript
    $.ajax({
      method: 'PUT',
      url: `/restaurant/${params.get('id')}/review`,
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

  ## Related Projects

  * https://github.com/the-grub-club/zagat-reviews-proxy
  * https://github.com/the-grub-club/zagat-photos
  * https://github.com/the-grub-club/google-reviews