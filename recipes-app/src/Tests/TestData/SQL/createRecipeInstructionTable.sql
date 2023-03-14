CREATE TABLE recipe_instruction (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    recipe_id INT NOT NULL REFERENCES recipe(id),
    step INT NOT NULL,
    instruction VARCHAR(1000) NOT NULL,
    instruction_section_id INT NOT NULL REFERENCES instruction_section(id)
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
/*insert into data commands*/
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 1, 'Pre-heat the oven to gas mark 5. Butter the base and sides of two 20cm round sandwich tins and line the bases with baking parchment.', s1_id);
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 2, 'In a large bowl, beat together 200g golden caster sugar, 200g softened unsalted butter, 4 large eggs, 200g self-raising flour, 2 tbsp cocoa powder, 1 tsp baking powder, 1/2 tsp vanilla extract, 2 tbsp milk and a pinch of salt until pale.', s1_id);
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 3, 'Divide the mixture between the prepared tins. Bake for 20 mins or until a skewer inserted into the centre of the cake comes out clean.', s1_id);
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 4, 'Leave to cool in the tin for 10 mins, then turn out onto a wire rack to cool completely.', s1_id);
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 5, 'For the buttercream, put 100g chopped milk chocolate in a heatproof bowl and melt in the microwave, stirring every 30 seconds. Leave the melted chocolate to cool for 5 minutes.', s2_id);
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 6, 'Mash 200g softened butter and 400g icing sugar together with a fork, then switch to a wooden spoon or electric beaters, if you have them.', s2_id);
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 7, 'Sift in 5 tbsp cocoa powder with a pinch of salt and pour in the melted chocolate and 2 tbsp milk. Mix again until smooth.', s2_id);
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 8, 'On a cake stand or large plate, sandwich the cakes together with half of the buttercream, then spread the rest on top. Decorate with chocolate shards if you like.', s2_id);
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 9, 'To make chocolate shards: melt 50g dark chocolate and pour it onto a tray lined with baking parchment or foil.', s3_id);
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 10, 'Now melt 25g milk chocolate and 25g white chocolate, and drizzle them over the dark chocolate before it sets.', s3_id);
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 11, 'Shake the tray gently to level the mixture then leave to set somewhere cool. Chop into shards.', s3_id);
END$$;
/*Leek and Potato Soup*/
/*declaring variables to re-use*/
DO $$
DECLARE 
    r_id INT := (SELECT id FROM recipe WHERE title = 'Leek and Potato Soup'); 
    s1_id INT := (SELECT id FROM instruction_section WHERE name = 'Soup' AND recipe_id = r_id); 
    s2_id INT := (SELECT id FROM instruction_section WHERE name = 'Garnish' AND recipe_id = r_id);
BEGIN
/*insert into data commands*/
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 1, 'Melt 50g butter in a heavy saucepan. When it foams, add 450g potatoes, cut into 1cm cubes, 1 small onion, cut to the same size as the potatoes, and 450g white parts of leeks, sliced and toss them in the butter until they are well coated.', s1_id);
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 2, 'Season well with salt and freshly ground pepper and toss again. Put a disc of greaseproof paper (called a cartouche by chefs) on top of the vegetables to keep in the steam, then cover the pan with its lid.', s1_id);
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 3, 'Cook over a gentle heat for 10 minutes, or until the vegetables are soft but not coloured.', s1_id);
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 4, 'Uncover the pan and discard the paper. Pour in 850ml of the light chicken or vegetable stock, bring to the boil and simmer until the vegetables are just cooked - about 5 minutes. Do no overcook or the soup will lose its fresh flavour.', s1_id);
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 5, 'Puree in a blender until silky smooth, in batches if necessary, then taste and adjust the seasoning. Return the soup to a clear pan and stir in three quarters of a 142ml carton of whipping cream and 125ml full-fat milk.', s1_id);
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 6, 'To finish the soup, finely shred the white part of 1 leek and gently cook it in a small knob of butter for a few minutes until it is softened but not coloured.', s2_id);
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 7, 'Reheat the soup to a gentle simmer (add some extra stock at this point if the soup is too thick for your liking), then pour into warmed bowls.', s2_id);
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 8, 'Drizzle the remaining cream over each serving, top with a little pile of buttered leeks and a scattering of chives and black pepper and serve at once.', s2_id);
END$$;
/*Passion Fruit Martini*/
/*declaring variables to re-use*/
DO $$
DECLARE 
    r_id INT := (SELECT id FROM recipe WHERE title = 'Passion Fruit Martini'); 
    s1_id INT := (SELECT id FROM instruction_section WHERE name = 'Drink' AND recipe_id = r_id);
BEGIN
/*insert into data commands*/
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 1, 'Scoop the seeds from one of the passion fruits into the glass of a cocktail shaker, add the vodka, passoa, lime juice and sugar syrup. Add a handful of ice and shake well, strain into 2 martini glasses, top up with prosecco, then add half a passion fruit to each. Serve immediately.', s1_id);
END$$;
/*Easy Pancakes*/
/*declaring variables to re-use*/
DO $$
DECLARE 
    r_id INT := (SELECT id FROM recipe WHERE title = 'Easy Pancakes'); 
    s1_id INT := (SELECT id FROM instruction_section WHERE name = 'Pancake' AND recipe_id = r_id);
BEGIN
/*insert into data commands*/
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 1, 'Put 100g plain flour, 2 large eggs, 300ml milk, 1tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.', s1_id);
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 2, 'Set aside for 30 mins to rest if you have time, or start cooking straight away.', s1_id);
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 3, 'Set a medium frying pan or crepe pan over a medium heat and carefully wipe it with some oiled kitchen paper.', s1_id);
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 4, 'When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.', s1_id);
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 5, 'Serve with lemon wedges and caster sugar, or your favourite fillings. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', s1_id);
END$$;
/*Classic Mulled Wine*/
/*declaring variables to re-use*/
DO $$
DECLARE 
    r_id INT := (SELECT id FROM recipe WHERE title = 'Classic Mulled Wine'); 
    s1_id INT := (SELECT id FROM instruction_section WHERE name = 'Mulled Wine' AND recipe_id = r_id);
BEGIN
/*insert into data commands*/
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 1, 'Put the red wine, cinnamon, star anise, cloves, lemon zest and sugar in a large pan. Cook on a low heat for 10 mins.', s1_id);
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 2, 'Remove from the heat and cool, leaving to infuse for about 30 mins.', s1_id);
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 3, 'To serve, heat without boiling, stir in the sloe gin (optional, but if using, add 100ml), and pour into mugs or heatproof glasses.', s1_id);
END$$;
/*Simnel Cake*/
/*declaring variables to re-use*/
DO $$
DECLARE 
    r_id INT := (SELECT id FROM recipe WHERE title = 'Simnel Cake'); 
    s1_id INT := (SELECT id FROM instruction_section WHERE name = 'Cake' AND recipe_id = r_id);
BEGIN
/*insert into data commands*/
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 1, 'Put the mixed dried fruit in a bowl with the orange juice and zest and 2 tbsp water. Cover and microwave for 2 mins, then leave to cool completely. Alternatively, heat gently in a pan, stirring now and then until the liquid has been absorbed and leave to cool.', s1_id);
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 2, 'Heat oven to 150C/130C fan/gas 2. Roll out a third of the marzipan and use the base of a deep 20cm cake tin as a template to cut out a circle. Wrap any offcuts and the remaining two-thirds of marzipan and set aside for later. Butter and line the cake tin with a double layer of parchment. Beat the butter and sugar together until creamy. Add the eggs, flour, almonds, baking powder, lemon zest, mixed spice and vanilla (all in one go) and mix until well combined. Mix in the cooled soaked dried fruit and fold in the cherries.', s1_id);
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 3, 'Scrape half the cake mixture into the tin. Top with the disc of marzipan, then the remaining cake mixture, and level the top with a spatula. Bake for 2 hrs. Check it''s cooked by inserting a skewer to the centre of the cake, if any wet mixture clings to the skewer, return to the oven for another 10 mins, then check again. Cool in the tin for 15 mins, then turn out onto a wire rack and leave to cool completely.', s1_id);
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 4, 'Brush the top of the cake with apricot jam. Roll out half of the remaining marzipan and use the base of the cake as a template to cut out another disc. Place it on top of the cake and crimp the edges, if you like. Roll the remaining marzipan into 11 equal-sized balls. Brush the marzipan with beaten egg and arrange in a circle on top around the outside, and brush them with a little egg too. Put under a hot grill for a minute or two until just starting to caramelise - be very careful as the marzipan will burn easily. Leave to cool and wrap a ribbon around the cake, if you like. Will keep for up to a week in a sealed tin.', s1_id);
END$$;
/*Bread Puffs*/
/*declaring variables to re-use*/
DO $$
DECLARE 
    r_id INT := (SELECT id FROM recipe WHERE title = 'Bread Puffs'); 
    s1_id INT := (SELECT id FROM instruction_section WHERE name = 'Bread' AND recipe_id = r_id);
BEGIN
/*insert into data commands*/
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 1, 'In a bowl, mix together the warm milk, water, yeast, and sugar. Add the flour, olive oil, and salt and mix together with your hands.', s1_id);
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 2, 'Tip the dough out onto a lightly floured surface and knead for up to 10 minutes until dough is soft and smooth, but not too sticky.', s1_id);
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 3, 'Set the dough in a lightly oiled bowl, covered loosely with a tea towel, and leave it to proof for approximately 2 hours or until it has doubled in size.', s1_id);
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 4, 'After the dough has proofed, divide it into 6 equal sized balls, roll out each on a lightly floured surface, and then fry in a hot pan on both sides for 2-3 minutes.', s1_id);
INSERT INTO recipe_instruction (recipe_id, step, instruction, instruction_section_id)
VALUES(r_id, 5, 'To serve, spread with melted butter and sprinkle on some parsley.', s1_id);
END; $$ language plpgsql