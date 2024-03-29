CREATE TABLE recipe_ingredient (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    recipe_id INT NOT NULL REFERENCES recipe(id),
    name VARCHAR(50) NOT NULL,
    quantity NUMERIC(10, 2),
    unit VARCHAR(25),
    instruction_section_id INT NOT NULL REFERENCES instruction_section(id),
    prep_info VARCHAR(150),
    created_at DATE DEFAULT CURRENT_DATE NOT NULL,
    updated_at DATE DEFAULT CURRENT_DATE NOT NULL,
    created_by VARCHAR(50) DEFAULT 'System' NOT NULL,
    updated_by VARCHAR(50) DEFAULT 'System' NOT NULL
);
/*Easy Chocolate Cake*/
/*declaring variables to re-use*/
DO $$
DECLARE 
    r_id INT := (SELECT id FROM recipe WHERE title = 'Easy Chocolate Cake'); 
    s1_id INT := (SELECT id FROM instruction_section WHERE name = 'Cake' AND recipe_id = r_id); 
    s2_id INT := (SELECT id FROM instruction_section WHERE name = 'Icing' AND recipe_id = r_id); 
    s3_id INT := (SELECT id FROM instruction_section WHERE name = 'Chocolate Shards' AND recipe_id = r_id);
BEGIN
INSERT INTO 
    recipe_ingredient (recipe_id, name, quantity, unit, instruction_section_id)
VALUES
    (r_id, 'Golden Caster Sugar', 200, 'g', s1_id),
    (r_id, 'Butter', 200, 'g', s1_id),
    (r_id, 'Eggs', 4, 'large', s1_id),
    (r_id, 'Self-raising Flour', 200, 'g', s1_id),
    (r_id, 'Cocoa Powder', 2, 'tbsp', s1_id),
    (r_id, 'Baking Powder', 1, 'tsp', s1_id),
    (r_id, 'Vanilla Extract', 0.5, 'tsp', s1_id),
    (r_id, 'Salt', 1, 'pinch of', s1_id),
    (r_id, 'Milk', 2, 'tbsp', s1_id),
    (r_id, 'Milk Chocolate', 100, 'g', s2_id),
    (r_id, 'Butter', 200, 'g', s2_id),
    (r_id, 'Icing Sugar', 400, 'g', s2_id),
    (r_id, 'Cocoa Powder', 5, 'tbsp', s2_id),
    (r_id, 'Milk', 2, 'tbsp', s2_id),
    (r_id, 'Dark Chocolate', 50, 'g', s3_id),
    (r_id, 'Milk Chocolate', 25, 'g', s3_id),
    (r_id, 'White Chocolate', 25, 'g', s3_id);
END$$;
/*Leek and Potato Soup*/
/*declaring variables to re-use*/
DO $$
DECLARE 
    r_id INT := (SELECT id FROM recipe WHERE title = 'Leek and Potato Soup'); 
    s1_id INT := (SELECT id FROM instruction_section WHERE name = 'Soup' AND recipe_id = r_id); 
    s2_id INT := (SELECT id FROM instruction_section WHERE name = 'Garnish' AND recipe_id = r_id);
BEGIN
INSERT INTO 
    recipe_ingredient (recipe_id, name, quantity, unit, instruction_section_id, prep_info)
VALUES
    (r_id, 'Butter', 50, 'g', s1_id, NULL),
    (r_id, 'Potatoes', 450, 'g', s1_id, 'peeled and cut into 1cm pieces'),
    (r_id, 'Onion', 1, 'small', s1_id, 'peeled and cut into 1cm pieces'),
    (r_id, 'White Part of Leeks', 450, 'g', s1_id, 'sliced, save the green tops for another soup or stock'),
    (r_id, 'Stock (Chicken or Vegetable)', 2, 'pts', s1_id, NULL),
    (r_id, 'Whipping Cream', 142, 'ml', s1_id, NULL),
    (r_id, 'Full-fat Milk', 125, 'ml', s1_id, NULL),
    (r_id, 'Leek', 1, 'average', s2_id, 'just the white part'),
    (r_id, 'Butter', 1, 'small knob of', s2_id, NULL),
    (r_id, 'Chives', 1, 'small handful of', s2_id, 'finely chopped');
END$$;
/*Passion Fruit Martini*/
/*declaring variables to re-use*/
DO $$
DECLARE 
    r_id INT := (SELECT id FROM recipe WHERE title = 'Passion Fruit Martini'); 
    s1_id INT := (SELECT id FROM instruction_section WHERE name = 'Drink' AND recipe_id = r_id);
BEGIN
INSERT INTO 
    recipe_ingredient (recipe_id, name, quantity, unit, instruction_section_id, prep_info)
VALUES
    (r_id, 'Ripe Passion Fruit', 2, NULL, s1_id, 'halved'),
    (r_id, 'Vanilla Vodka', 60, 'ml', s1_id, NULL),
    (r_id, 'Passoa', 30, 'ml', s1_id, NULL),
    (r_id, 'Lime Juice', 1, 'tbsp', s1_id, NULL),
    (r_id, 'Sugar Syrup', 1, 'tbsp', s1_id, NULL),
    (r_id, 'Prosecco', NULL, NULL, s1_id, NULL);
END$$;
/*Easy Pancakes*/
/*declaring variables to re-use*/
DO $$
DECLARE 
    r_id INT := (SELECT id FROM recipe WHERE title = 'Easy Pancakes'); 
    s1_id INT := (SELECT id FROM instruction_section WHERE name = 'Pancake' AND recipe_id = r_id);
BEGIN
INSERT INTO 
    recipe_ingredient (recipe_id, name, quantity, unit, instruction_section_id, prep_info)
VALUES
    (r_id, 'Plain Flour', 100, 'g', s1_id, NULL),
    (r_id, 'Eggs', 2, 'large', s1_id, NULL),
    (r_id, 'Milk', 300, 'ml', s1_id, NULL),
    (r_id, 'Sunflower or Vegetable Oil', 1, 'tbsp', s1_id, 'plus a little extra for frying'),
    (r_id, 'Lemon Wedges', NULL, NULL, s1_id, 'to serve, optional'),
    (r_id, 'Caster Sugar', NULL, NULL, s1_id, 'to serve, optional');
END$$;
/*Classic Mulled Wine*/
/*declaring variables to re-use*/
DO $$
DECLARE 
    r_id INT := (SELECT id FROM recipe WHERE title = 'Classic Mulled Wine'); 
    s1_id INT := (SELECT id FROM instruction_section WHERE name = 'Mulled Wine' AND recipe_id = r_id);
BEGIN
INSERT INTO 
    recipe_ingredient (recipe_id, name, quantity, unit, instruction_section_id, prep_info)
VALUES
    (r_id, 'Red Wine', 750, 'ml', s1_id, NULL),
    (r_id, 'Cinnamon Stick', 1, 'large', s1_id, 'or 2 small'),
    (r_id, 'Star Anise', 2, NULL, s1_id, NULL),
    (r_id, 'Cloves', 4, NULL, s1_id, NULL),
    (r_id, 'Lemon Zest', 2, 'strips', s1_id, 'pared using a vegetable peeler'),
    (r_id, 'Caster Sugar', 4, 'tbsp', s1_id, NULL);
END$$;
/*Simnel Cake*/
/*declaring variables to re-use*/
DO $$
DECLARE 
    r_id INT := (SELECT id FROM recipe WHERE title = 'Simnel Cake'); 
    s1_id INT := (SELECT id FROM instruction_section WHERE name = 'Cake' AND recipe_id = r_id);
BEGIN
INSERT INTO 
    recipe_ingredient (recipe_id, name, quantity, unit, instruction_section_id, prep_info)
VALUES
    (r_id, 'Mixed Dried Fruit', 250, 'g', s1_id, 'a mixture of sultanas, currants, raisins, and candied mixed peel'),
    (r_id, 'Orange', 1, NULL, s1_id, 'zested and juiced'),
    (r_id, 'Marzipan', 500, 'g', s1_id, NULL),
    (r_id, 'Butter', 250, 'g', s1_id, 'softened'),
    (r_id, 'Light Brown Soft Sugar', 200, 'g', s1_id, NULL),
    (r_id, 'Eggs', 4, 'large', s1_id, 'plus 1 beaten to glaze'),
    (r_id, 'Plain Flour', 175, 'g', s1_id, NULL),
    (r_id, 'Ground Almonds', 100, 'g', s1_id, NULL),
    (r_id, 'Baking Powder', 1, 'tsp', s1_id, NULL),
    (r_id, 'Lemon', 1, NULL, s1_id, 'zested'),
    (r_id, 'Mixed Spice', 2, 'tsp', s1_id, NULL),
    (r_id, 'Vanilla Extract', 1, 'tsp', s1_id, NULL),
    (r_id, 'Glace Cherries', 100, 'g', s1_id, 'halved'),
    (r_id, 'Apricot Jam', 3, 'tbsp', s1_id, NULL);
END$$;
/*Bread Puffs*/
/*declaring variables to re-use*/
DO $$
DECLARE 
    r_id INT := (SELECT id FROM recipe WHERE title = 'Bread Puffs'); 
    s1_id INT := (SELECT id FROM instruction_section WHERE name = 'Bread' AND recipe_id = r_id);
BEGIN
INSERT INTO 
    recipe_ingredient (recipe_id, name, quantity, unit, instruction_section_id, prep_info)
VALUES
    (r_id, 'Plain Flour', 500, 'g', s1_id, 'plus extra for dough kneading or rolling'),
    (r_id, 'Milk', 160, 'ml', s1_id, 'lukewarm'),
    (r_id, 'Water', 160, 'ml', s1_id, 'lukewarm'),
    (r_id, 'Dry Yeast', 7, 'g', s1_id, NULL),
    (r_id, 'Sugar', 10, 'g', s1_id, NULL),
    (r_id, 'Salt', 1, 'tsp', s1_id, NULL),
    (r_id, 'Olive Oil', 3, 'tbsp', s1_id, 'plus extra for dough proofing bowl'),
    (r_id, 'Parsley', NULL, NULL, s1_id, 'optional, to serve'),
    (r_id, 'Melted Butter', NULL, NULL, s1_id, 'optional, to serve');
END; $$ language plpgsql