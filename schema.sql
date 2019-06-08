CREATE TABLE zagat_reviews (
  rest_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  price VARCHAR(5) NOT NULL,
  location VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  foodScore VARCHAR(5) NOT NULL,
  decorScore VARCHAR(5) NOT NULL,
  serviceScore VARCHAR(5) NOT NULL,
  review VARCHAR(400) NOT NULL
);


-- COPY zagat_reviews(name,type,price,location,description,foodscore,decorscore,servicescore,review)
-- FROM '/Users/oe/erzhena/zagat-reviews/data.csv' DELIMITER ',' CSV;