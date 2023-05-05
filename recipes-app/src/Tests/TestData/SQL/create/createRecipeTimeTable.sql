CREATE TABLE recipe_time (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    recipe_id INT NOT NULL REFERENCES recipe(id),
    prep_minutes INT CHECK (prep_minutes < 60) DEFAULT 0 NOT NULL,
    prep_hours INT DEFAULT 0 NOT NULL,
    cook_minutes INT CHECK (cook_minutes < 60) DEFAULT 0 NOT NULL,
    cook_hours INT DEFAULT 0 NOT NULL,
    created_at DATE DEFAULT CURRENT_DATE NOT NULL,
    updated_at DATE DEFAULT CURRENT_DATE NOT NULL,
    created_by VARCHAR(50) DEFAULT 'System' NOT NULL,
    updated_by VARCHAR(50) DEFAULT 'System' NOT NULL
);
INSERT INTO 
    recipe_time (recipe_id, prep_minutes, cook_minutes, cook_hours)
VALUES
    ((SELECT id FROM recipe WHERE title = 'Easy Chocolate Cake'), 35, 20, 0),
    ((SELECT id FROM recipe WHERE title = 'Leek and Potato Soup'), 20, 25, 0),
    ((SELECT id FROM recipe WHERE title = 'Passion Fruit Martini'), 5, 0, 0),
    ((SELECT id FROM recipe WHERE title = 'Easy Pancakes'), 10, 20, 0),
    ((SELECT id FROM recipe WHERE title = 'Classic Mulled Wine'), 5, 15, 0),
    ((SELECT id FROM recipe WHERE title = 'Simnel Cake'), 30, 0, 2),
    ((SELECT id FROM recipe WHERE title = 'Bread Puffs'), 10, 10, 2);