CREATE TABLE recipe_time (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    recipe_id INT NOT NULL REFERENCES recipe(id),
    prep_minutes INT CHECK (prep_minutes > 60) DEFAULT 0 NOT NULL,
    prep_hours INT DEFAULT 0 NOT NULL,
    cook_minutes INT CHECK (cook_minutes > 60) DEFAULT 0 NOT NULL,
    cook_hours INT DEFAULT 0 NOT NULL
);

INSERT INTO recipe_time (recipe_id, prep_minutes, cook_minutes)
VALUES((SELECT id FROM recipe WHERE title = "Easy Chocolate Cake";), 35, 20);
INSERT INTO recipe_time (recipe_id, prep_minutes, cook_minutes)
VALUES((SELECT id FROM recipe WHERE title = "Leek and Potato Soup";), 20, 25);
INSERT INTO recipe_time (recipe_id, prep_minutes)
VALUES((SELECT id FROM recipe WHERE title = "Passion Fruit Martini";), 5);
INSERT INTO recipe_time (recipe_id, prep_minutes, cook_minutes)
VALUES((SELECT id FROM recipe WHERE title = "Easy Pancakes";), 10, 20);
INSERT INTO recipe_time (recipe_id, prep_minutes, cook_minutes)
VALUES((SELECT id FROM recipe WHERE title = "Classic Mulled Wine";), 5, 15);
INSERT INTO recipe_time (recipe_id, prep_minutes, cook_hours)
VALUES((SELECT id FROM recipe WHERE title = "Simnel Cake";), 30, 2);
INSERT INTO recipe_time (recipe_id, prep_minutes, cook_minutes, cook_hours)
VALUES((SELECT id FROM recipe WHERE title = "Bread Puffs";), 10, 10, 2);