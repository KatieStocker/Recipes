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
        sequelize,
        modelName: 'recipe_time'
    });

    return RecipeTime;
}