CREATE TABLE recipe_tag (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    recipe_id INT NOT NULL REFERENCES recipe(id),
    tag_id INT NOT NULL REFERENCES tag(id),
    created_at DATE DEFAULT CURRENT_DATE NOT NULL,
    updated_at DATE DEFAULT CURRENT_DATE NOT NULL,
    created_by VARCHAR(50) DEFAULT 'System' NOT NULL,
    updated_by VARCHAR(50) DEFAULT 'System' NOT NULL
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
    INSERT INTO 
        recipe_tag (recipe_id, tag_id)
    VALUES
        (ecc_rid, cak_tid),
        (ecc_rid, des_tid),
        (ecc_rid, cho_tid),
        (ecc_rid, swe_tid),
    -- Leek and Potato Soup
        (lps_rid, sta_tid),
        (lps_rid, sou_tid),
        (lps_rid, vgt_tid),
        (lps_rid, vtb_tid),
    -- Passion Fruit Martini
        (pfm_rid, ctl_tid),
        (pfm_rid, alc_tid),
    -- Easy Pancakes
        (pan_rid, swe_tid),
        (pan_rid, pfr_tid),
    -- Classic Mulled Wine
        (cmw_rid, alc_tid),
        (cmw_rid, fes_tid),
    -- Simnel Cake
        (sim_rid, bkd_tid),
        (sim_rid, cak_tid),
        (sim_rid, des_tid),
    -- Bread Puffs
        (brp_rid, pfr_tid),
        (brp_rid, bre_tid),
        (brp_rid, lun_tid),
        (brp_rid, sav_tid);
END; $$ language plpgsql