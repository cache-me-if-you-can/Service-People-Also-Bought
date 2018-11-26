DROP DATABASE IF EXISTS robinhoodpsql;
CREATE DATABASE robinhoodpsql;
\c robinhoodpsql;

DROP TABLE IF EXISTS stocks CASCADE;
DROP TABLE IF EXISTS transactions CASCADE;

CREATE TABLE IF NOT EXISTS stocks (
  id SERIAL PRIMARY KEY,
  companyName VARCHAR(50),
  rating INTEGER,
  ratingBlurb VARCHAR(100),
  price NUMERIC(6,2),
  priceChange NUMERIC(6,2)
);

CREATE TABLE IF NOT EXISTS transactions (
  id SERIAL PRIMARY KEY,
  stock_id INTEGER REFERENCES stocks(id),
  user_buy_id INTEGER
);

CREATE INDEX id ON stocks USING btree (id);
CREATE INDEX stock_id ON transactions USING btree (stock_id);
CREATE INDEX user_buy_id ON transactions USING btree (stock_id);

\COPY stocks (id, companyName, rating, ratingBlurb, price, priceChange) FROM '/Users/emely/Desktop/SDC/stocks.csv' WITH (FORMAT CSV);
\COPY transactions (id, stock_id, user_buy_id) FROM '/Users/emely/Desktop/SDC/transactions.csv' WITH (FORMAT CSV); 
-- psql -d  -a -f ./database/psql/schema.sql

