CREATE TABLE category_group (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    is_season BOOLEAN NOT NULL DEFAULT FALSE,
    is_occasion BOOLEAN NOT NULL DEFAULT FALSE,
    is_dietary BOOLEAN NOT NULL DEFAULT FALSE
);
INSERT INTO category_group (name, is_season) VALUES('New Year', true);
INSERT INTO category_group (name, is_season) VALUES('Pancake Day', true);
INSERT INTO category_group (name, is_season) VALUES('Valentine''s', true);
INSERT INTO category_group (name, is_season) VALUES('St. David''s Day', true);
INSERT INTO category_group (name, is_season) VALUES('St. Patrick''s Day', true);
INSERT INTO category_group (name, is_season) VALUES('Mother''s and Father''s Day', true);
INSERT INTO category_group (name, is_season) VALUES('Easter', true);
INSERT INTO category_group (name, is_season) VALUES('Halloween', true);
INSERT INTO category_group (name, is_season) VALUES('Diwali', true);
INSERT INTO category_group (name, is_season) VALUES('Bonfire Night', true);
INSERT INTO category_group (name, is_season) VALUES('Hanukkah', true);
INSERT INTO category_group (name, is_season) VALUES('Christmas', true);
INSERT INTO category_group (name, is_season) VALUES('Ramadan and Eid', true);
INSERT INTO category_group (name, is_season) VALUES('Thanksgiving', true);
INSERT INTO category_group (name, is_season) VALUES('Burns Night', true);
INSERT INTO category_group (name, is_occasion) VALUES('Birthday', true);
INSERT INTO category_group (name, is_occasion) VALUES('Anniversary', true);
INSERT INTO category_group (name, is_occasion) VALUES('Wedding', true);
INSERT INTO category_group (name, is_occasion) VALUES('Dinner Party', true);
INSERT INTO category_group (name, is_dietary) VALUES('Vegetarian', true);
INSERT INTO category_group (name, is_dietary) VALUES('Vegan', true);
INSERT INTO category_group (name, is_dietary) VALUES('Free From', true);
INSERT INTO category_group (name, is_season) VALUES('Winter Collection', true);
INSERT INTO category_group (name, is_season) VALUES('Spring Collection', true);
INSERT INTO category_group (name, is_season) VALUES('Summer Collection', true);
INSERT INTO category_group (name, is_season) VALUES('Autumn Collection', true);
