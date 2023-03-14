CREATE TABLE category_group_option (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    category_group_id INT NOT NULL REFERENCES category_group(id),
    category_option_id INT NOT NULL REFERENCES category_option(id)
);
DO $$
DECLARE
-- category_group
    nwy_cg_id INT := (SELECT id FROM category_group WHERE name = 'New Year');
    pan_cg_id INT := (SELECT id FROM category_group WHERE name = 'Pancake Day');
    val_cg_id INT := (SELECT id FROM category_group WHERE name = 'Valentine''s');
    sdd_cg_id INT := (SELECT id FROM category_group WHERE name = 'St. David''s Day');
    spd_cg_id INT := (SELECT id FROM category_group WHERE name = 'St. Patrick''s Day');
    mfd_cg_id INT := (SELECT id FROM category_group WHERE name = 'Mother''s and Father''s Day');
    eas_cg_id INT := (SELECT id FROM category_group WHERE name = 'Easter');
    hal_cg_id INT := (SELECT id FROM category_group WHERE name = 'Halloween');
    diw_cg_id INT := (SELECT id FROM category_group WHERE name = 'Diwali');
    bfn_cg_id INT := (SELECT id FROM category_group WHERE name = 'Bonfire Night');
    han_cg_id INT := (SELECT id FROM category_group WHERE name = 'Hanukkah');
    xms_cg_id INT := (SELECT id FROM category_group WHERE name = 'Christmas');
    rae_cg_id INT := (SELECT id FROM category_group WHERE name = 'Ramadan and Eid');
    tha_cg_id INT := (SELECT id FROM category_group WHERE name = 'Thanksgiving');
    bur_cg_id INT := (SELECT id FROM category_group WHERE name = 'Burns Night');
    bdy_cg_id INT := (SELECT id FROM category_group WHERE name = 'Birthday');
    ann_cg_id INT := (SELECT id FROM category_group WHERE name = 'Anniversary');
    wed_cg_id INT := (SELECT id FROM category_group WHERE name = 'Wedding');
    din_cg_id INT := (SELECT id FROM category_group WHERE name = 'Dinner Party');
    vgt_cg_id INT := (SELECT id FROM category_group WHERE name = 'Vegetarian');
    veg_cg_id INT := (SELECT id FROM category_group WHERE name = 'Vegan');
    ffr_cg_id INT := (SELECT id FROM category_group WHERE name = 'Free From');
    win_cg_id INT := (SELECT id FROM category_group WHERE name = 'Winter Collection');
    spr_cg_id INT := (SELECT id FROM category_group WHERE name = 'Spring Collection');
    sum_cg_id INT := (SELECT id FROM category_group WHERE name = 'Summer Collection');
    aut_cg_id INT := (SELECT id FROM category_group WHERE name = 'Autumn Collection');
-- category_option
    nyd_co_id INT := (SELECT id FROM category_option WHERE name = 'New Year''s Day');
    nye_co_id INT := (SELECT id FROM category_option WHERE name = 'New Year''s Eve');
    lny_co_id INT := (SELECT id FROM category_option WHERE name = 'Lunar New Year');
    pan_co_id INT := (SELECT id FROM category_option WHERE name = 'Pancake Day');
    val_co_id INT := (SELECT id FROM category_option WHERE name = 'Valentine''s Day');
    sdd_co_id INT := (SELECT id FROM category_option WHERE name = 'St. David''s Day');
    spd_co_id INT := (SELECT id FROM category_option WHERE name = 'St. Patrick''s Day');
    msd_co_id INT := (SELECT id FROM category_option WHERE name = 'Mother''s Day');
    eas_co_id INT := (SELECT id FROM category_option WHERE name = 'Easter');
    fsd_co_id INT := (SELECT id FROM category_option WHERE name = 'Father''s Day');
    hal_co_id INT := (SELECT id FROM category_option WHERE name = 'Halloween');
    diw_co_id INT := (SELECT id FROM category_option WHERE name = 'Diwali');
    bfn_co_id INT := (SELECT id FROM category_option WHERE name = 'Bonfire Night');
    hnk_co_id INT := (SELECT id FROM category_option WHERE name = 'Hanukkah');
    xme_co_id INT := (SELECT id FROM category_option WHERE name = 'Christmas Eve');
    xmd_co_id INT := (SELECT id FROM category_option WHERE name = 'Christmas Day');
    bxd_co_id INT := (SELECT id FROM category_option WHERE name = 'Boxing Day');
    win_co_id INT := (SELECT id FROM category_option WHERE name = 'Winter');
    spr_co_id INT := (SELECT id FROM category_option WHERE name = 'Spring');
    sum_co_id INT := (SELECT id FROM category_option WHERE name = 'Summer');
    aut_co_id INT := (SELECT id FROM category_option WHERE name = 'Autumn');
    ram_co_id INT := (SELECT id FROM category_option WHERE name = 'Ramadan');
    eid_co_id INT := (SELECT id FROM category_option WHERE name = 'Eid');
    tha_co_id INT := (SELECT id FROM category_option WHERE name = 'Thanksgiving');
    bur_co_id INT := (SELECT id FROM category_option WHERE name = 'Burns Night');
    ann_co_id INT := (SELECT id FROM category_option WHERE name = 'Anniversary');
    bdy_co_id INT := (SELECT id FROM category_option WHERE name = 'Birthday');
    din_co_id INT := (SELECT id FROM category_option WHERE name = 'Dinner Party');
    wed_co_id INT := (SELECT id FROM category_option WHERE name = 'Wedding');
    vgt_co_id INT := (SELECT id FROM category_option WHERE name = 'Vegetarian');
    veg_co_id INT := (SELECT id FROM category_option WHERE name = 'Vegan');
    dai_co_id INT := (SELECT id FROM category_option WHERE name = 'Dairy Free');
    glu_co_id INT := (SELECT id FROM category_option WHERE name = 'Gluten Free');
    nut_co_id INT := (SELECT id FROM category_option WHERE name = 'Nut Free');
    egg_co_id INT := (SELECT id FROM category_option WHERE name = 'Egg Free');
BEGIN
    INSERT INTO 
        category_group_option (category_group_id, category_option_id)
    VALUES
        -- New Year
        (nwy_cg_id, nyd_co_id),
        (nwy_cg_id, nye_co_id),
        (nwy_cg_id, lny_co_id),
        -- Pancake Day
        (pan_cg_id, pan_co_id),
        -- Valentine's
        (val_cg_id, val_co_id),
        (val_cg_id, ann_co_id),
        -- St. David's Day
        (sdd_cg_id, sdd_co_id),    
        -- St. Patrick's Day
        (spd_cg_id, spd_co_id),
        -- Mother's and Father's Day
        (mfd_cg_id, msd_co_id),
        (mfd_cg_id, fsd_co_id),
        -- Easter
        (eas_cg_id, eas_co_id),
        -- Halloween
        (hal_cg_id, hal_co_id),   
        -- Diwali
        (diw_cg_id, diw_co_id),
        -- Bonfire Night
        (bfn_cg_id, bfn_co_id),
        -- Hanukkah
        (han_cg_id, hnk_co_id),
        -- Christmas
        (xms_cg_id, xme_co_id),
        (xms_cg_id, xmd_co_id),
        (xms_cg_id, bxd_co_id),
        -- Ramadan and Eid
        (rae_cg_id, ram_co_id),
        (rae_cg_id, eid_co_id),
        -- Thanksgiving
        (tha_cg_id, tha_co_id), 
        -- Burns Night
        (bur_cg_id, bur_co_id),
        -- Birthday
        (bdy_cg_id, bdy_co_id),
        -- Anniversary
        (ann_cg_id, ann_co_id), 
        -- Wedding
        (wed_cg_id, wed_co_id),
        -- Dinner Party
        (din_cg_id, din_co_id),
        -- Vegetarian
        (vgt_cg_id, vgt_co_id),
        -- Vegan
        (veg_cg_id, veg_co_id),
        -- Free From
        (ffr_cg_id, dai_co_id),
        (ffr_cg_id, glu_co_id),
        (ffr_cg_id, nut_co_id), 
        (ffr_cg_id, egg_co_id),
        -- Winter Collection
        (win_cg_id, win_co_id),
        -- Spring Collection
        (spr_cg_id, spr_co_id),
        -- Summer Collection
        (sum_cg_id, sum_co_id),
        -- Autumn Collection
        (aut_cg_id, aut_co_id);
END; $$ language plpgsql