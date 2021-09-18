module.exports = (sequelize, DataType) => {
    const Media = sequelize.define('Media', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        image: {
            type: DataType.STRING,
            allowNull: false,
        },
        createdAt: {
            field: 'created_at',
            type: DataType.DATE,
            allowNull: false,
        },
        updatedAt: {
            field: 'updated_at',
            type: DataType.DATE,
            allowNull: false,
        },
    })

    return Media;
}