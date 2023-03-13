CREATE TABLE instruction_section (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    recipe_id INT NOT NULL REFERENCES recipe(id),
    name VARCHAR(25) NOT NULL
);
INSERT INTO instruction_section (recipe_id, name)
VALUES((SELECT id FROM recipe WHERE title = "Easy Chocolate Cake";), "Cake");
INSERT INTO instruction_section (recipe_id, name)
VALUES((SELECT id FROM recipe WHERE title = "Easy Chocolate Cake";), "Icing");
INSERT INTO instruction_section (recipe_id, name)
VALUES((SELECT id FROM recipe WHERE title = "Easy Chocolate Cake";), "Chocolate Shards");
INSERT INTO instruction_section (recipe_id, name)
VALUES((SELECT id FROM recipe WHERE title = "Leek and Potato Soup";), "Soup");
INSERT INTO instruction_section (recipe_id, name)
VALUES((SELECT id FROM recipe WHERE title = "Leek and Potato Soup";), "Garnish");
INSERT INTO instruction_section (recipe_id, name)
VALUES((SELECT id FROM recipe WHERE title = "Passion Fruit Martini";), "Drink");
INSERT INTO instruction_section (recipe_id, name)
VALUES((SELECT id FROM recipe WHERE title = "Easy Pancakes";), "Pancake");
INSERT INTO instruction_section (recipe_id, name)
VALUES((SELECT id FROM recipe WHERE title = "Classic Mulled Wine";), "Mulled Wine");
INSERT INTO instruction_section (recipe_id, name)
VALUES((SELECT id FROM recipe WHERE title = "Simnel Cake";), "Cake");
INSERT INTO instruction_section (recipe_id, name)
VALUES((SELECT id FROM recipe WHERE title = "Bread Puffs";), "Bread");