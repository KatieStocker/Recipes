CREATE TABLE recipe_category_option (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    recipe_id INT NOT NULL REFERENCES recipe(id),
    category_option_id INT NOT NULL REFERENCES category_option(id)
);
DO $$
-- Declare categories for re-use
DECLARE
    nyd_cid INT := (SELECT id FROM category_option WHERE name = 'New Year''s Day');
    pan_cid INT := (SELECT id FROM category_option WHERE name = 'Pancake Day');
    eas_cid INT := (SELECT id FROM category_option WHERE name = 'Easter');
    xme_cid INT := (SELECT id FROM category_option WHERE name = 'Christmas Eve');
    xmd_cid INT := (SELECT id FROM category_option WHERE name = 'Christmas Day');
    bxd_cid INT := (SELECT id FROM category_option WHERE name = 'Boxing Day');
    win_cid INT := (SELECT id FROM category_option WHERE name = 'Winter');
    spr_cid INT := (SELECT id FROM category_option WHERE name = 'Spring');
    eid_cid INT := (SELECT id FROM category_option WHERE name = 'Eid');
    ann_cid INT := (SELECT id FROM category_option WHERE name = 'Anniversary');
    bdy_cid INT := (SELECT id FROM category_option WHERE name = 'Birthday');
    din_cid INT := (SELECT id FROM category_option WHERE name = 'Dinner Party');
    wed_cid INT := (SELECT id FROM category_option WHERE name = 'Wedding'); 
    ecc_rid INT := (SELECT id FROM recipe WHERE title = 'Easy Chocolate Cake'); 
    lps_rid INT := (SELECT id FROM recipe WHERE title = 'Leek and Potato Soup'); 
    pfm_rid INT := (SELECT id FROM recipe WHERE title = 'Passion Fruit Martini'); 
    pan_rid INT := (SELECT id FROM recipe WHERE title = 'Easy Pancakes'); 
    cmw_rid INT := (SELECT id FROM recipe WHERE title = 'Classic Mulled Wine'); 
    sim_rid INT := (SELECT id FROM recipe WHERE title = 'Simnel Cake'); 
    brp_rid INT := (SELECT id FROM recipe WHERE title = 'Bread Puffs');
BEGIN
    -- Easy Chocolate Cake
    INSERT INTO recipe_category_option (recipe_id, category_option_id)
    VALUES(ecc_rid, bdy_cid);
    -- Leek and Potato Soup
    INSERT INTO recipe_category_option (recipe_id, category_option_id)
    VALUES(lps_rid, win_cid);
    INSERT INTO recipe_category_option (recipe_id, category_option_id)
    VALUES(lps_rid, spr_cid);
    -- Passion Fruit Martini
    INSERT INTO recipe_category_option (recipe_id, category_option_id)
    VALUES(pfm_rid, ann_cid);
    INSERT INTO recipe_category_option (recipe_id, category_option_id)
    VALUES(pfm_rid, din_cid);
    INSERT INTO recipe_category_option (recipe_id, category_option_id)
    VALUES(pfm_rid, wed_cid);
    -- Easy Pancakes
    INSERT INTO recipe_category_option (recipe_id, category_option_id)
    VALUES(pan_rid, pan_cid);
    -- Classic Mulled Wine
    INSERT INTO recipe_category_option (recipe_id, category_option_id)
    VALUES(cmw_rid, xme_cid);
    INSERT INTO recipe_category_option (recipe_id, category_option_id)
    VALUES(cmw_rid, xmd_cid);
    INSERT INTO recipe_category_option (recipe_id, category_option_id)
    VALUES(cmw_rid, bxd_cid);
    INSERT INTO recipe_category_option (recipe_id, category_option_id)
    VALUES(cmw_rid, win_cid);
    -- Simnel Cake
    INSERT INTO recipe_category_option (recipe_id, category_option_id)
    VALUES(sim_rid, eas_cid);
    INSERT INTO recipe_category_option (recipe_id, category_option_id)
    VALUES(sim_rid, spr_cid);
    -- Bread Puffs
    INSERT INTO recipe_category_option (recipe_id, category_option_id)
    VALUES(brp_rid, eid_cid);
END; $$ language plpgsql