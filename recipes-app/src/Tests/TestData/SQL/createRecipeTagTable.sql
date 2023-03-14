CREATE TABLE recipe_tag (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    recipe_id INT NOT NULL REFERENCES recipe(id),
    tag_id INT NOT NULL REFERENCES tag(id)
);
DO $$
-- Recipes
DECLARE 
    ecc_rid INT := (SELECT id FROM recipe WHERE title = 'Easy Chocolate Cake'); 
    lps_rid INT := (SELECT id FROM recipe WHERE title = 'Leek and Potato Soup'); 
    pfm_rid INT := (SELECT id FROM recipe WHERE title = 'Passion Fruit Martini'); 
    pan_rid INT := (SELECT id FROM recipe WHERE title = 'Easy Pancakes'); 
    cmw_rid INT := (SELECT id FROM recipe WHERE title = 'Classic Mulled Wine'); 
    sim_rid INT := (SELECT id FROM recipe WHERE title = 'Simnel Cake'); 
    brp_rid INT := (SELECT id FROM recipe WHERE title = 'Bread Puffs');
-- Tags
    alc_tid INT := (SELECT id FROM tag WHERE name = 'Alcoholic');
    bkd_tid INT := (SELECT id FROM tag WHERE name = 'Baked');
    bre_tid INT := (SELECT id FROM tag WHERE name = 'Bread');
    cak_tid INT := (SELECT id FROM tag WHERE name = 'Cake');
    cho_tid INT := (SELECT id FROM tag WHERE name = 'Chocolate');
    ctl_tid INT := (SELECT id FROM tag WHERE name = 'Cocktail');
    des_tid INT := (SELECT id FROM tag WHERE name = 'Dessert');
    fes_tid INT := (SELECT id FROM tag WHERE name = 'Festive');
    lun_tid INT := (SELECT id FROM tag WHERE name = 'Lunch');
    pfr_tid INT := (SELECT id FROM tag WHERE name = 'Pan fried');
    sav_tid INT := (SELECT id FROM tag WHERE name = 'Savoury');
    sou_tid INT := (SELECT id FROM tag WHERE name = 'Soup');
    sta_tid INT := (SELECT id FROM tag WHERE name = 'Starter');
    swe_tid INT := (SELECT id FROM tag WHERE name = 'Sweet');
    vtb_tid INT := (SELECT id FROM tag WHERE name = 'Vegetable');
    vgt_tid INT := (SELECT id FROM tag WHERE name = 'Vegetarian');
BEGIN
    -- Easy Chocolate Cake
    INSERT INTO recipe_tag (recipe_id, tag_id)
    VALUES(ecc_rid, cak_tid);
    INSERT INTO recipe_tag (recipe_id, tag_id)
    VALUES(ecc_rid, des_tid);
    INSERT INTO recipe_tag (recipe_id, tag_id)
    VALUES(ecc_rid, cho_tid);
    INSERT INTO recipe_tag (recipe_id, tag_id)
    VALUES(ecc_rid, swe_tid);
    -- Leek and Potato Soup
    INSERT INTO recipe_tag (recipe_id, tag_id)
    VALUES(lps_rid, sta_tid);
    INSERT INTO recipe_tag (recipe_id, tag_id)
    VALUES(lps_rid, sou_tid);
    INSERT INTO recipe_tag (recipe_id, tag_id)
    VALUES(lps_rid, vgt_tid);
    INSERT INTO recipe_tag (recipe_id, tag_id)
    VALUES(lps_rid, vtb_tid);
    -- Passion Fruit Martini
    INSERT INTO recipe_tag (recipe_id, tag_id)
    VALUES(pfm_rid, ctl_tid);
    INSERT INTO recipe_tag (recipe_id, tag_id)
    VALUES(pfm_rid, alc_tid);
    -- Easy Pancakes
    INSERT INTO recipe_tag (recipe_id, tag_id)
    VALUES(pan_rid, swe_tid);
    INSERT INTO recipe_tag (recipe_id, tag_id)
    VALUES(pan_rid, pfr_tid);
    -- Classic Mulled Wine
    INSERT INTO recipe_tag (recipe_id, tag_id)
    VALUES(cmw_rid, alc_tid);
    INSERT INTO recipe_tag (recipe_id, tag_id)
    VALUES(cmw_rid, fes_tid);
    -- Simnel Cake
    INSERT INTO recipe_tag (recipe_id, tag_id)
    VALUES(sim_rid, bkd_tid);
    INSERT INTO recipe_tag (recipe_id, tag_id)
    VALUES(sim_rid, cak_tid);
    INSERT INTO recipe_tag (recipe_id, tag_id)
    VALUES(sim_rid, des_tid);
    -- Bread Puffs
    INSERT INTO recipe_tag (recipe_id, tag_id)
    VALUES(brp_rid, pfr_tid);
    INSERT INTO recipe_tag (recipe_id, tag_id)
    VALUES(brp_rid, bre_tid);
    INSERT INTO recipe_tag (recipe_id, tag_id)
    VALUES(brp_rid, lun_tid);
    INSERT INTO recipe_tag (recipe_id, tag_id)
    VALUES(brp_rid, sav_tid);
END; $$ language plpgsql