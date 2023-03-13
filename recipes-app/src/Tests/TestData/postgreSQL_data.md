# PostgreSQL Commands for Database setup using psql
`CREATE DATABASE recipes;`

<sup>Created the database "recipes".</sup>

---

`\c recipes`

<sup>Now connected to recipes database.</sup>

---
[\d psql Command](https://www.postgresql.org/docs/current/app-psql.html#:~:text=error%20is%20reported.-,%5Cd%5BS%2B%5D,-%5B%20pattern%20%5D)

`\d`

<sup>View a list of all visible tables, views, materialized views, sequences, and foreign tables in the current connected database.</sup>

`\dt`

<sup>View a list of tables in the current connected database.</sup>

`\d <table_name>`

<sup>View the columns, types, collation, nullable, defaults, indexes and references in the specified table.</sup>

---
## List of tables
- [category_group](#category_group-table)
- [category_group_option](#category_group_option-table)
- [category_option](#category_option-table)
- [instruction_section](#instruction_section-table)
- [recipe](#recipe-table)
- [recipe_category_option](#recipe_category_option-table)
- [recipe_ingredient](#recipe_ingredient-table)
- [recipe_instruction](#recipe_instruction-table)
- [recipe_nutritional_info](#recipe_nutritional_info-table)
- [recipe_tag](#recipe_tag-table)
- [recipe_time](#recipe_time-table)
- [tag](#tag-table)

## Sequence for running scripts to create tables and insert data with examples

To use these scripts with psql, get the pwd of the script

`cd <location of the script>` <sub>*using bash or equivalent</sub>

`pwd` <sub>*using bash or equivalent</sub>

`\i <pwd of the script/script_name.sql>` <sub>*using psql</sub>

1. [recipe](./SQL/createRecipeTable.sql)
2. [category_option](./SQL/createCategoryOptionTable.sql)
3. [recipe_category_option](./SQL/createRecipeCategoryOptionTable.sql)
4. [instruction_section](./SQL/createInstructionSectionTable.sql)
5. [recipe_ingredient](./SQL/createRecipeIngredientTable.sql)
6. [recipe_instruction](./SQL/createRecipeInstructionTable.sql)
7. [recipe_time](./SQL/createRecipeTimeTable.sql)
8. [recipe_nutritional_info](./SQL/createRecipeNutritionalInfoTable.sql)
9. [tag](./SQL/createTagTable.sql)
10. [recipe_tag](./SQL/createRecipeTagTable.sql)
11. [category_group](./SQL/createCategoryGroupTable.sql)
12. [category_group_option](./SQL/createCategoryGroupOptionTable.sql)

---

`ALTER TABLE <table_name> ALTER COLUMN <column_name> TYPE <new_data_type>;`

<sup>Alter the type of a specified column in a specified table.</sup>

<sup>e.g. Changing type for recipe.description from VARCHAR(300) to VARCHAR(1000) </sup>

`ALTER TABLE recipe ALTER COLUMN description TYPE VARCHAR(1000);`

---

`UPDATE <table_name> SET <column_name> = <value> WHERE <condition>;`

<sup>Modify data in a table based on a condition.</sup>

--- 
## recipe table
See [createRecipeTable.sql](./SQL/createRecipeTable.sql) for a script to create and insert data.

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
        author VARCHAR(50) NOT NULL
      );

<sup>Create a recipe table.</sup>

### Differences to .json files 
- [x] sectionValues will be moved to its own table - has been removed and a instruction_section table has been created in its place.
- [ ] the booleans (i.e. isVegetarian etc.) will be removed and placed into their own table - TODO?
- [x] the categoryIds will be removed and placed into their own table - there is now a tag and recipe_tag table. The tag table contains various different names to use as tags, the recipe_tag table contains a link between recipe and tag.
- [x] the tags will be removed and placed into their own tags table with a link to the recipe.id - has been removed and a tag and recipe_tag table have been created. The tag table will have the list of tags available, recipe_tag will act as a link between the tag.id and recipe.id.
- [x] extraInformation will be removed and placed in a separate table - has been separated out and replaced with a recipe_time and recipe_nutritional_info table.
- [ ] image_url type may need changing.

### example data
    INSERT INTO recipe (title, description, image_url, web_link, is_vegetarian, is_occasional, type, author)
    VALUES('Easy Chocolate Cake', 'Master the chocolate cake with an airy, light sponge and rich buttercream filling. It''s simple enough for an afternoon tea but special enough for a party too.', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/easy_chocolate_cake-b62f92c.jpg?quality=90&webp=true&resize=300,272', 'https://www.bbcgoodfood.com/recipes/easy-chocolate-cake', true, true, 'Food', 'Test Author');

<sup>Note: have to use single quotes for values. If a string value contains a single quote, double it up to escape it.</sup>

--- 
## category_option table

      CREATE TABLE category_option (
        id BIGSERIAL NOT NULL PRIMARY KEY,
        name VARCHAR(50) NOT NULL UNIQUE
      );

<sup>Create a category option table.</sup>

### example data
    INSERT INTO category_option (name)
    VALUES('New Year''s Day');

    INSERT INTO category_option (name)
    VALUES('Lunar New Year');
    
    INSERT INTO category_option (name)
    VALUES('Pancake Day');

--- 
## recipe_category_option table

      CREATE TABLE recipe_category_option (
        id BIGSERIAL NOT NULL PRIMARY KEY,
        recipe_id INT NOT NULL REFERENCES recipe(id),
        category_option_id INT NOT NULL REFERENCES category_option(id)
      );

<sup>Create a recipe category option table - a link between the recipe and the category option.</sup>

<sup>The recipe_id will link to the recipe.id, and category_option_id will link to category_option.id.</sup>

### example data (would require a recipe and category_option to exist)
    INSERT INTO recipe_category_option (recipe_id, category_option_id)
    VALUES(1, 4);

--- 
## recipe_ingredient table

      CREATE TABLE recipe_ingredient (
        id BIGSERIAL NOT NULL PRIMARY KEY,
        recipe_id INT NOT NULL REFERENCES recipe(id),
        name VARCHAR(50) NOT NULL,
        quantity INT,
        unit VARCHAR(10),
        instruction_section_id INT NOT NULL REFERENCES instruction_section(id),
        prep_info VARCHAR(150)
      );

<sup>Create a recipe ingredient table.</sup>

<sup>The recipe_id will link to recipe.id. The instruction_section_id will link to instruction_section.id</sup>

### example data (would require a recipe and instruction_section to exist)
    INSERT INTO recipe_category_options (recipe_id, name, quantity, unit, instruction_section_id)
    VALUES(1, 'Golden Caster Sugar', 200, 'g');

    INSERT INTO recipe_category_options (recipe_id, name, quantity, unit, instruction_section_id)
    VALUES(1, 'Milk Chocolate', 100, 'g', 2);

--- 
## recipe_instruction table

      CREATE TABLE recipe_instruction (
        id BIGSERIAL NOT NULL PRIMARY KEY,
        recipe_id INT NOT NULL REFERENCES recipe(id),
        step INT NOT NULL,
        instruction VARCHAR(500) NOT NULL,
        instruction_section_id INT NOT NULL REFERENCES instruction_section(id)
      );

<sup>Create a recipe instruction table.</sup>

<sup>The recipe_id will link to recipe.id. The instruction_section_id will link to instruction_section.id</sup>

### example data (would require a recipe and instruction_section to exist)
    INSERT INTO recipe_category_options (recipe_id, step, instruction, instruction_section_id)
    VALUES(1, 1, 'Pre-heat the oven to gas mark 5. Butter the base and sides of two 20cm round sandwich tins and line the bases with baking parchment.', 1);

    INSERT INTO recipe_category_options (recipe_id, step, instruction, instruction_section_id)
    VALUES(1, 2, 'In a large bowl, beat together 200g golden caster sugar, 200g softened unsalted butter...', 1);

    INSERT INTO recipe_category_options (recipe_id, step, instruction, instruction_section_id)
    VALUES(1, 5, 'For the buttercream, put 100g chopped milk chocolate in a heatproof bowl and melt...', 2);

--- 
## instruction_section table

      CREATE TABLE instruction_section (
        id BIGSERIAL NOT NULL PRIMARY KEY,
        recipe_id INT NOT NULL REFERENCES recipe(id),
        name VARCHAR(25) NOT NULL
      );

<sup>Create an instruction section table.</sup>

<sup>The recipe_id will link to recipe.id.</sup>

### example data (would require a recipe to exist)
    INSERT INTO recipe_category_options (recipe_id, name)
    VALUES(1, 'Cake');

    INSERT INTO recipe_category_options (recipe_id, name)
    VALUES(1, 'Icing');

    INSERT INTO recipe_category_options (recipe_id, name)
    VALUES(1, 'Chocolate Shards');

--- 
## tag table

      CREATE TABLE tag (
        id BIGSERIAL NOT NULL PRIMARY KEY,
        name VARCHAR(25) NOT NULL UNIQUE
      );

<sup>Create a tag table.</sup>

### example data
    INSERT INTO tag (name)
    VALUES('Cake');
    
--- 
## recipe_tag table

      CREATE TABLE recipe_tag (
        id BIGSERIAL NOT NULL PRIMARY KEY,
        recipe_id INT NOT NULL REFERENCES recipe(id),
        tag_id INT NOT NULL REFERENCES tag(id)
      );

<sup>Create a recipe_tag table.</sup>

<sup>The recipe_id will link to recipe.id, tag_id to tag.id.</sup>

### example data (would require a recipe and tag to exist)
    INSERT INTO recipe_tag (recipe_id, tag_id)
    VALUES(1, 24);

--- 
## recipe_time table

      CREATE TABLE recipe_time (
        id BIGSERIAL NOT NULL PRIMARY KEY,
        recipe_id INT NOT NULL REFERENCES recipe(id),
        prep_minutes INT CHECK (prep_minutes > 60) DEFAULT 0 NOT NULL,
        prep_hours INT DEFAULT 0 NOT NULL,
        cook_minutes INT CHECK (cook_minutes > 60) DEFAULT 0 NOT NULL,
        cook_hours INT DEFAULT 0 NOT NULL
      );

<sup>Create a recipe_time table.</sup>

<sup>The recipe_id will link to recipe.id.</sup>

### example data (would require a recipe to exist)
    INSERT INTO recipe_time (recipe_id, prep_minutes, cook_minutes, cook_hours)
    VALUES(6, 30, 10, 2);

---
## recipe_nutritional_info table

      CREATE TABLE recipe_nutritional_info (
        id BIGSERIAL NOT NULL PRIMARY KEY,
        recipe_id INT NOT NULL REFERENCES recipe(id),
        servings INT NOT NULL DEFAULT 1 CHECK (servings > 0),
        calories NUMERIC(10, 3) NOT NULL DEFAULT 0,
        fat NUMERIC(10, 3) NOT NULL DEFAULT 0,
        saturates NUMERIC(10, 3) NOT NULL DEFAULT 0,
        carbs NUMERIC(10, 3) NOT NULL DEFAULT 0,
        sugar NUMERIC(10, 3) NOT NULL DEFAULT 0,
        fibre NUMERIC(10, 3) NOT NULL DEFAULT 0,
        protein NUMERIC(10, 3) NOT NULL DEFAULT 0,
        salt NUMERIC(10, 3) NOT NULL DEFAULT 0
      );

<sup>Create a recipe_nutritional_info table.</sup>

<sup>The recipe_id will link to recipe.id.</sup>

### example data (would require a recipe to exist)
    INSERT INTO recipe_nutritional_info (recipe_id, servings, calories, fat, saturates, carbs, sugar, fibre, protein, salt)
    VALUES(1, 12, 312, 12, 62, 32, 6, 3, 6, 0.2);

--- 
## category_group table

      CREATE TABLE category_group (
        id BIGSERIAL NOT NULL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        is_season BOOLEAN NOT NULL DEFAULT FALSE,
        is_occasion BOOLEAN NOT NULL DEFAULT FALSE,
        is_dietary BOOLEAN NOT NULL DEFAULT FALSE
      );

<sup>Create a category_group table.</sup>

### example data
    INSERT INTO category_group (name, is_season)
    VALUES('Easter', true);

--- 
## category_group_option table

      CREATE TABLE category_group_option (
        id BIGSERIAL NOT NULL PRIMARY KEY,
        category_group_id INT NOT NULL REFERENCES category_group(id),
        category_option_id INT NOT NULL REFERENCES category_option(id)
      );

<sup>Create a category_group_option table.</sup>

<sup>The category_group_id will link to category_group.id, and the category_option_id will link to the category_option.id</sup>

### example data
    INSERT INTO category_group_option (category_group_id, category_option_id)
    VALUES(7, 8);

    INSERT INTO category_group_option (category_group_id, category_option_id)
    VALUES(12, 14);

    INSERT INTO category_group_option (category_group_id, category_option_id)
    VALUES(12, 15);

    INSERT INTO category_group_option (category_group_id, category_option_id)
    VALUES(12, 16);
--- 