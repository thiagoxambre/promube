'use strict';

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
        },
        dataNascimento: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM('Administrador','Prefeitura','Faculdade','Candidato','Aluno'),
        },
        cpf: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true,
        },
        alterarSenha: {
            type:DataTypes.BOOLEAN
        },
        ultimaAlteracaoSenha: {
            type: DataTypes.DATE,
        },
        expiracaoSenha: {
            type: DataTypes.DATE,
        },
        aceiteTermos: {
            type: DataTypes.BOOLEAN,
        },
        dataAceitouTermos: {
            type: DataTypes.DATE,
        }
    }, {     
        freezeTableName: true,
    })
    
    User.isValidPassword = function(user, password) {
        const compare = bcrypt.compareSync(password , user.password);
        return compare;
    }

    return User;
}

