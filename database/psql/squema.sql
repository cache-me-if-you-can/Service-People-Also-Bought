DROP DATABASE IF NOT EXISTS robinhoodAB;
CREATE DATABASE robinhoodAB;

CREATE TABLE IF NOT EXISTS stocks (
  id INTEGER PRIMARY KEY,
  companyName VARCHAR(100),
  rating INTEGER,
  ratingBlurb VARCHAR(100),
  price INTEGER,
  priceChange: INTEGER,
);

CREATE TABLE IF NOT EXISTS transaction (
  id INTEGER PRIMARY KEY,
  stock_id INTEGER,
  user_buy_id INTEGER,
  amount INTEGER,
);

-- faker.random.number({ min: 10, max: 20 });
-- \COPY stock (id, companyName, rating, ratingBlurb, price, priceChange) FROM '/Users/emely/Desktop/SDC/users.csv' WITH (FORMAT CSV)