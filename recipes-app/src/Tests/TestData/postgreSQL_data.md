# PostgreSQL Commands for Database setup using psql
`CREATE DATABASE recipes;`

<sup>Created the database "recipes".</sup>

---

`\c recipes`

<sup>Now connected to recipes database.</sup>

---
## recipe table

      CREATE TABLE recipe (
        id BIGSERIAL NOT NULL PRIMARY KEY,
        title VARCHAR(50) NOT NULL,
        description VARCHAR(300) NOT NULL,
        image_url VARCHAR() NOT NULL,
        web_link VARCHAR() NULL,
        extra_information VARCHAR(150), ## have a separate table
        is_vegetarian BOOL,
        is_vegan BOOL,
        is_seasonal BOOL,
        is_occasional BOOL, ## these could move to their own table
        category_ids, ## own table
        type VARCHAR(10) NOT NULL,
        tags ???,
        author VARCHAR(50) NOT NULL
      );

<sup>Create a recipe table.</sup>

Differences to .json files 
- [x] sectionValues has been removed and a instruction_section table has been created in its place.
- [ ] the booleans (i.e. isVegetarian etc.) will be removed and placed into their own table - TODO
- [ ] the categoryIds will be removed and placed into their own table - TODO
- [ ] the tags will be removed and placed into their own tags table with a link to the recipe.id - TODO

### example data
    INSERT INTO recipe (title, description, image_url, web_link, ....)
    VALUES("Easy Chocolate Cake", "Master the chocolate cake with an airy, light sponge and rich buttercream filling...", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/easy_chocolate_cake-b62f92c.jpg?quality=90&webp=true&resize=300,272", "https://www.bbcgoodfood.com/recipes/easy-chocolate-cake", );

--- 
## category_options table

      CREATE TABLE category_options (
        id BIGSERIAL NOT NULL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
      );

<sup>Create a category options table.</sup>

### example data
    INSERT INTO category_options (name)
    VALUES("New Year's Day");

    INSERT INTO category_options (name)
    VALUES('Lunar New Year');
    
    INSERT INTO category_options (name)
    VALUES('Pancake Day');

--- 
## recipe_category_options table

      CREATE TABLE recipe_category_options (
        id BIGSERIAL NOT NULL PRIMARY KEY,
        recipe_id INT NOT NULL FOREIGN KEY,
        category_options_id INT NOT NULL FOREIGN KEY
      );

<sup>Create a recipe category options table - a link between the recipe and the category options.</sup>

<sup>The recipe_id will link to the recipe.id, and category_options_id will link to category_options.id.</sup>

### example data (would require a recipe and category_option to exist)
    INSERT INTO recipe_category_options (recipe_id, category_options_id)
    VALUES(1, 4);

--- 
## recipe_ingredient table

      CREATE TABLE recipe_ingredient (
        id BIGSERIAL NOT NULL PRIMARY KEY,
        recipe_id INT NOT NULL FOREIGN KEY,
        name VARCHAR(50) NOT NULL,
        quantity INT,
        unit VARCHAR(10),
        instruction_section_id INT NOT NULL FOREIGN KEY, ## need to make changes
        prep_info VARCHAR(150)
      );

<sup>Create a recipe ingredient table.</sup>

<sup>The recipe_id will link to recipe_id. The instruction_section_id will link to instruction_section.id</sup>

### example data (would require a recipe and instruction_section to exist)
    INSERT INTO recipe_category_options (recipe_id, name, quantity, unit, instruction_section_id)
    VALUES(1, "Golden Caster Sugar", 200, "g");

    INSERT INTO recipe_category_options (recipe_id, name, quantity, unit, instruction_section_id)
    VALUES(1, "Milk Chocolate", 100, "g", 2);

--- 
## recipe_instruction table

      CREATE TABLE recipe_instruction (
        id BIGSERIAL NOT NULL PRIMARY KEY,
        recipe_id INT NOT NULL FOREIGN KEY,
        step INT NOT NULL,
        instruction VARCHAR(500) NOT NULL,
        instruction_section_id INT NOT NULL FOREIGN KEY, ## need to make changes
      );

<sup>Create a recipe instruction table.</sup>

<sup>The recipe_id will link to recipe_id. The instruction_section_id will link to instruction_section.id</sup>

### example data (would require a recipe and instruction_section to exist)
    INSERT INTO recipe_category_options (recipe_id, step, instruction, instruction_section_id)
    VALUES(1, 1, "Pre-heat the oven to gas mark 5. Butter the base and sides of two 20cm round sandwich tins and line the bases with baking parchment.", 1);

    INSERT INTO recipe_category_options (recipe_id, step, instruction, instruction_section_id)
    VALUES(1, 2, "In a large bowl, beat together 200g golden caster sugar, 200g softened unsalted butter...", 1);

    INSERT INTO recipe_category_options (recipe_id, step, instruction, instruction_section_id)
    VALUES(1, 5, "For the buttercream, put 100g chopped milk chocolate in a heatproof bowl and melt...", 2);

--- 
## instruction_section table

      CREATE TABLE instruction_section (
        id BIGSERIAL NOT NULL PRIMARY KEY,
        recipe_id INT NOT NULL FOREIGN KEY,
        name VARCHAR(25) NOT NULL,
      );

<sup>Create an instruction section table.</sup>

<sup>The recipe_id will link to recipe_id.</sup>

### example data (would require a recipe to exist)
    INSERT INTO recipe_category_options (recipe_id, name)
    VALUES(1, "Cake");

    INSERT INTO recipe_category_options (recipe_id, name)
    VALUES(1, "Icing");

    INSERT INTO recipe_category_options (recipe_id, name)
    VALUES(1, "Chocolate Shards");
