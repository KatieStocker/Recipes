CREATE TABLE recipe (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    description VARCHAR(1000) NOT NULL,
    image_url VARCHAR(500) NOT NULL,
    web_link VARCHAR(500) NULL,
    is_vegetarian BOOLEAN NOT NULL DEFAULT FALSE,
    is_vegan BOOLEAN NOT NULL DEFAULT FALSE,
    is_seasonal BOOLEAN NOT NULL DEFAULT FALSE,
    is_occasional BOOLEAN NOT NULL DEFAULT FALSE,
    type VARCHAR(10) NOT NULL,
    author VARCHAR(50) NOT NULL,
    created_at DATE DEFAULT CURRENT_DATE NOT NULL,
    updated_at DATE DEFAULT CURRENT_DATE NOT NULL,
    created_by VARCHAR(50) DEFAULT 'System' NOT NULL,
    updated_by VARCHAR(50) DEFAULT 'System' NOT NULL
);
INSERT INTO
    recipe (title, description, image_url, web_link, is_vegetarian, is_vegan, is_seasonal, is_occasional, type, author)
VALUES
    ('Easy Chocolate Cake', 'Master the chocolate cake with an airy, light sponge and rich buttercream filling. It''s simple enough for an afternoon tea but special enough for a party too.', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/easy_chocolate_cake-b62f92c.jpg?quality=90&webp=true&resize=300,272', 'https://www.bbcgoodfood.com/recipes/easy-chocolate-cake', true, false, false, true, 'Food', 'BBC Good Food'),
    ('Leek and Potato Soup', 'Of the winter soups, leek and potato is one of the most comforting and familiar.', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-22567_12-4803173.jpg?quality=90&webp=true&resize=300,272', 'https://www.bbcgoodfood.com/recipes/leek-potato-soup', true, false, true, false, 'Food', 'BBC Good Food'),
    ('Passion Fruit Martini', 'This easy passion fruit cocktail is bursting with zingy flavours and is perfect for celebrating with friends. Top with prosecco for a special drink.', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/passionfruit-pornstar-martini-df3bbfb.jpg?quality=90&webp=true&resize=300,272', 'https://www.bbcgoodfood.com/recipes/passionfruit-pornstar-martini', true, false, false, true, 'Drink', 'BBC Good Food'),
    ('Easy Pancakes', 'Learn a skill for life with our foolproof easy crepe recipe that ensures perfect pancakes every time - elaborate flip optional.', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1273477_8-ad36e3b.jpg?quality=90&webp=true&resize=375,341', 'https://www.bbcgoodfood.com/recipes/easy-pancakes', true, false, true, false, 'Food', 'BBC Good Food'),
    ('Classic Mulled Wine', 'Make perfectly spiced mulled wine at Christmas with our easy recipe. Use a good quality red wine like an unoaked tempranillo or try a twist with a dash of sloe gin.', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mulled-wine-890c21a.jpg?quality=90&webp=true&resize=300,272', 'https://www.bbcgoodfood.com/recipes/mulled-wine', false, false, true, false, 'Drink', 'BBC Good Food'),
    ('Simnel Cake', 'Bake this classic Easter simnel cake. Top with 11 balls of marzipan, or with spring flowers.', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/simnel-cake-df8d9ac.jpg?quality=90&webp=true&resize=300,272', 'https://www.bbcgoodfood.com/recipes/easter-simnel-cake', true, false, true, false, 'Food', 'BBC Good Food'),
    ('Bread Puffs', 'Simple bread puffs. Even more delicious if you spread on some warm butter and fresh parsley when still warm.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgs_fAZ3yL7aU72havOTtZFUSNGGi4GH3b8B7DAf_15Bh4o_aZhFU06jqd_4dWWsiXSGM&usqp=CAU', 'https://www.instagram.com/reel/CpKx3mHIhcF/?igshid=YmMyMTA2M2Y=', true, false, false, false, 'Food', 'cookistwow Instagram');