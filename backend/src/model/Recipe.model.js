module.exports = (sequelize, DataTypes, Model) => {

    class Recipe extends Model { }

    Recipe.init({
        // Model attributes are defined here
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image_url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        web_link: {
            type: DataTypes.DATE
        },
        is_vegetarian: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        is_vegan: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        is_seasonal: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        is_occasional: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        },
        created_by: {
            type: DataTypes.STRING
        },
        updated_by: {
            type: DataTypes.STRING
        },
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'recipe' // We need to choose the model name
    });

    return Recipe;
}