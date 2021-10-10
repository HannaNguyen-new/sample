/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'users_master',
  attributes: {
    id: {
      columnName: 'user_id',
      columnType: 'serial',
      type: 'number',
      autoIncrement: true,
      unique: true,
    },
    userName: {
      type: 'string',
      required: true,
      description: "Full representation of the user's name.",
      maxLength: 50,
      columnName: 'user_name',
      example: 'Mary Sue van der McHenst',
      columnType: 'varchar(50)',
    },
    activeFlag: {
      type: 'boolean',
      columnName: 'active_flag',
      columnType: 'boolean',
    },
    companies: {
      collection: 'company',
      via: 'userId',
      through: 'companyauth'
    },
    companyAuths: {
      collection: 'companyauth',
      via: 'userId',
    },
  },

};
