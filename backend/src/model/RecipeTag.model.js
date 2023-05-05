module.exports = (sequelize, DataTypes, Model) => {

    class RecipeTag extends Model { }

    RecipeTag.init({
        recipe_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tag_id: {
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
        modelName: 'recipe_tag'
    });

    return RecipeTag;
}