\c photos_db

DROP TABLE IF EXISTS photos;
-- DROP TABLE IF EXISTS favorites;

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  img_url TEXT NOT NULL,
  user_id TEXT NOT NULL,
  tag TEXT NOT NULL,
  time TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

--
-- CREATE TABLE favorites (
--   id SERIAL PRIMARY KEY,
--   photos_id INTEGER REFERENCES photos (id),
--   liker_id INTEGER REFERENCES photos (user_id)
-- );
