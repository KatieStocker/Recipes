CREATE TABLE category_group (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    is_season BOOLEAN NOT NULL DEFAULT FALSE,
    is_occasion BOOLEAN NOT NULL DEFAULT FALSE,
    is_dietary BOOLEAN NOT NULL DEFAULT FALSE,
    created_at DATE DEFAULT CURRENT_DATE NOT NULL,
    updated_at DATE DEFAULT CURRENT_DATE NOT NULL,
    created_by VARCHAR(50) DEFAULT 'System' NOT NULL,
    updated_by VARCHAR(50) DEFAULT 'System' NOT NULL
);
INSERT INTO 
    category_group (name, is_season) 
VALUES
    ('New Year', true),
    ('Pancake Day', true),
    ('Valentine''s', true),
    ('St. David''s Day', true),
    ('St. Patrick''s Day', true),
    ('Mother''s and Father''s Day', true),
    ('Easter', true),
    ('Halloween', true),
    ('Diwali', true),
    ('Bonfire Night', true),
    ('Hanukkah', true),
    ('Christmas', true),
    ('Ramadan and Eid', true),
    ('Thanksgiving', true),
    ('Burns Night', true),
    ('Winter Collection', true),
    ('Spring Collection', true),
    ('Summer Collection', true),
    ('Autumn Collection', true);
INSERT INTO 
    category_group (name, is_occasion) 
VALUES
    ('Birthday', true),
    ('Anniversary', true),
    ('Wedding', true),
    ('Dinner Party', true);
INSERT INTO 
    category_group (name, is_dietary) 
VALUES
    ('Vegetarian', true),
    ('Vegan', true),
    ('Free From', true);
