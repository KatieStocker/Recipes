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
    INSERT INTO 
        recipe_category_option (recipe_id, category_option_id)
    VALUES
        (ecc_rid, bdy_cid),
    -- Leek and Potato Soup
        (lps_rid, win_cid),
        (lps_rid, spr_cid),
    -- Passion Fruit Martini
        (pfm_rid, ann_cid),
        (pfm_rid, din_cid),
        (pfm_rid, wed_cid),
    -- Easy Pancakes
        (pan_rid, pan_cid),
    -- Classic Mulled Wine
        (cmw_rid, xme_cid),
        (cmw_rid, xmd_cid),
        (cmw_rid, bxd_cid),
        (cmw_rid, win_cid),
    -- Simnel Cake
        (sim_rid, eas_cid),
        (sim_rid, spr_cid),
    -- Bread Puffs
        (brp_rid, eid_cid);
END; $$ language plpgsql