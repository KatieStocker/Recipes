module.exports = (sequelize, DataTypes, Model) => {

    class Tag extends Model { }

    Tag.init({
        name: {
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
        sequelize,
        modelName: 'tag'
    });

    return Tag;
}