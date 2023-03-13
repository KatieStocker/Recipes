CREATE TABLE recipe_nutritional_info (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    recipe_id INT NOT NULL REFERENCES recipe(id),
    servings INT NOT NULL DEFAULT 1 CHECK (servings > 0),
    calories NUMERIC(10, 3) NOT NULL DEFAULT 0,
    fat NUMERIC(10, 3) NOT NULL DEFAULT 0,
    saturates NUMERIC(10, 3) NOT NULL DEFAULT 0,
    carbs NUMERIC(10, 3) NOT NULL DEFAULT 0,
    sugar NUMERIC(10, 3) NOT NULL DEFAULT 0,
    fibre NUMERIC(10, 3) NOT NULL DEFAULT 0,
    protein NUMERIC(10, 3) NOT NULL DEFAULT 0,
    salt NUMERIC(10, 3) NOT NULL DEFAULT 0
);
INSERT INTO recipe_nutritional_info (recipe_id, servings, calories, fat, saturates, carbs, sugar, fibre, protein, salt)
VALUES((SELECT id FROM recipe WHERE title = "Easy Chocolate Cake";), 14, 523, 29, 18, 59, 47, 2, 6, 0.6);
INSERT INTO recipe_nutritional_info (recipe_id, servings, calories, fat, saturates, carbs, fibre, protein, salt)
VALUES((SELECT id FROM recipe WHERE title = "Leek and Potato Soup";), 6, 252, 18, 11, 18, 3, 5, 0.7);
INSERT INTO recipe_nutritional_info (recipe_id, servings, calories, carbs, sugar, fibre, protein, salt)
VALUES((SELECT id FROM recipe WHERE title = "Passion Fruit Martini";), 2, 224, 16, 16, 2, 1, 0.03);
INSERT INTO recipe_nutritional_info (recipe_id, servings, calories, fat, saturates, carbs, sugar, protein, salt)
VALUES((SELECT id FROM recipe WHERE title = "Easy Pancakes";), 12, 61, 2, 1, 7, 1, 3, 0.1);
INSERT INTO recipe_nutritional_info (recipe_id, servings, calories, fat, carbs, sugar, fibre, protein, salt)
VALUES((SELECT id FROM recipe WHERE title = "Classic Mulled Wine";), 6, 196, 0.1, 13.8, 13.6, 0.2, 0.3, 0.03);
INSERT INTO recipe_nutritional_info (recipe_id, servings, calories, fat, saturates, carbs, sugar, fibre, protein, salt)
VALUES((SELECT id FROM recipe WHERE title = "Simnel Cake";), 12, 619, 29, 12, 77, 60, 2, 10, 0.65);
INSERT INTO recipe_nutritional_info (recipe_id, servings, calories, fat, saturates, carbs, sugar, fibre, protein, salt)
VALUES((SELECT id FROM recipe WHERE title = "Bread Puffs";), 6, 320, 15, 2, 40, 2, 2, 7, 0.07);