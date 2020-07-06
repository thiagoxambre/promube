const bcrypt = require('bcrypt');

module.exports = (sequelize,DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        username: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
            set(value) {
                this.setDataValue('password', bcrypt.hashSync(value,10));
            }
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    })
    
    return User;
}

