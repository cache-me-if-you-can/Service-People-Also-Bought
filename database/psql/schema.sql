DROP DATABASE IF EXISTS robinhoodpsql;
CREATE DATABASE robinhoodpsql;
\c robinhoodpsql;

DROP TABLE IF EXISTS stocks CASCADE;
DROP TABLE IF EXISTS transactions CASCADE;

CREATE TABLE IF NOT EXISTS stocks (
  id SERIAL,
  companyName VARCHAR(50),
  rating INTEGER,
  ratingBlurb VARCHAR(100),
  price NUMERIC(6,2),
  priceChange NUMERIC(6,2)
);

CREATE TABLE IF NOT EXISTS transactions (
  id SERIAL,
  stock_id INTEGER,
  user_buy_id INTEGER
);


\COPY stocks (id, companyName, rating, ratingBlurb, price, priceChange) FROM '/Users/emely/Desktop/SDC/stocks.csv' WITH (FORMAT CSV);
\COPY transactions (id, stock_id, user_buy_id) FROM '/Users/emely/Desktop/SDC/transactions.csv' WITH (FORMAT CSV); 

ALTER TABLE stocks ADD PRIMARY KEY (id);
ALTER TABLE transactions ADD PRIMARY KEY (id);
ALTER TABLE transactions ADD FOREIGN KEY (stock_id) REFERENCES stocks (id);
CREATE INDEX id ON stocks USING btree (id);
CREATE INDEX stock_id ON transactions USING btree (stock_id);
CREATE INDEX user_buy_id ON transactions USING btree (user_buy_id);
VACUUM (FULL, VERBOSE, ANALYZE);
-- psql -d  -a -f ./database/psql/schema.sql

