const { Model } = require('sequelize');
const Sequelize = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password: Sequelize.VIRTUAL,
                password_hash: Sequelize.STRING
            },
            {
                sequelize,
            }
        );

        return this;
    }
}

module.exports = User;
