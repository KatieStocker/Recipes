module.exports = (sequelize, DataTypes, Model) => {

    class RecipeTime extends Model { }

    RecipeTime.init({
        recipe_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        prep_minutes: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        prep_hours: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cook_minutes: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cook_hours: {
            type: DataTypes.INTEGER,
            allowNull: false
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
        modelName: 'recipe_time' // We need to choose the model name
    });

    return RecipeTime;
}