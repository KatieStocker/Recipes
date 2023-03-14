CREATE TABLE instruction_section (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    recipe_id INT NOT NULL REFERENCES recipe(id),
    name VARCHAR(25) NOT NULL
);
DO $$
DECLARE
    ecc_rid INT := (SELECT id FROM recipe WHERE title = 'Easy Chocolate Cake');
    lps_rid INT := (SELECT id FROM recipe WHERE title = 'Leek and Potato Soup');
BEGIN
    INSERT INTO 
        instruction_section (recipe_id, name)
    VALUES
        (ecc_rid, 'Cake'),
        (ecc_rid, 'Icing'),
        (ecc_rid, 'Chocolate Shards'),
        (lps_rid, 'Soup'),
        (lps_rid, 'Garnish'),
        ((SELECT id FROM recipe WHERE title = 'Passion Fruit Martini'), 'Drink'),
        ((SELECT id FROM recipe WHERE title = 'Easy Pancakes'), 'Pancake'),
        ((SELECT id FROM recipe WHERE title = 'Classic Mulled Wine'), 'Mulled Wine'),
        ((SELECT id FROM recipe WHERE title = 'Simnel Cake'), 'Cake'),
        ((SELECT id FROM recipe WHERE title = 'Bread Puffs'), 'Bread');
END; $$ language plpgsql;