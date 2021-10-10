/**
 * CompanyAuth.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'company_auths',
  attributes: {
    id: {
      columnName: 'company_auth_id',
      columnType: 'serial',
      type: 'number',
      autoIncrement: true,
      unique: true,
    },
    companyId: {
      model: 'company',
      required: true,
      columnName: 'company_id',
      columnType: 'integer'
    },
    userId: {
      model: 'user',
      required: true,
      columnName: 'user_id',
      columnType: 'integer'
    },

  },

};
