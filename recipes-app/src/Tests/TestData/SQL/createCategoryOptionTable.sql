CREATE TABLE category_option (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);
INSERT INTO category_option (name) VALUES('New Year''s Day');
INSERT INTO category_option (name) VALUES('Lunar New Year');
INSERT INTO category_option (name) VALUES('Pancake Day');
INSERT INTO category_option (name) VALUES('Valentine''s Day');
INSERT INTO category_option (name) VALUES('St. David''s Day');
INSERT INTO category_option (name) VALUES('St. Patrick''s Day');
INSERT INTO category_option (name) VALUES('Mother''s Day');
INSERT INTO category_option (name) VALUES('Easter');
INSERT INTO category_option (name) VALUES('Father''s Day');
INSERT INTO category_option (name) VALUES('Halloween');
INSERT INTO category_option (name) VALUES('Diwali');
INSERT INTO category_option (name) VALUES('Bonfire Night');
INSERT INTO category_option (name) VALUES('Hanukkah');
INSERT INTO category_option (name) VALUES('Christmas Eve');
INSERT INTO category_option (name) VALUES('Christmas Day');
INSERT INTO category_option (name) VALUES('Boxing Day');
INSERT INTO category_option (name) VALUES('New Year''s Eve');
INSERT INTO category_option (name) VALUES('Winter');
INSERT INTO category_option (name) VALUES('Spring');
INSERT INTO category_option (name) VALUES('Summer');
INSERT INTO category_option (name) VALUES('Autumn');
INSERT INTO category_option (name) VALUES('Ramadan');
INSERT INTO category_option (name) VALUES('Eid');
INSERT INTO category_option (name) VALUES('Thanksgiving');
INSERT INTO category_option (name) VALUES('Burns Night');
INSERT INTO category_option (name) VALUES('Anniversary');
INSERT INTO category_option (name) VALUES('Birthday');
INSERT INTO category_option (name) VALUES('Dinner Party');
INSERT INTO category_option (name) VALUES('Wedding');
INSERT INTO category_option (name) VALUES('Vegetarian');
INSERT INTO category_option (name) VALUES('Vegan');
INSERT INTO category_option (name) VALUES('Dairy Free');
INSERT INTO category_option (name) VALUES('Gluten Free');
INSERT INTO category_option (name) VALUES('Nut Free');
INSERT INTO category_option (name) VALUES('Egg Free');