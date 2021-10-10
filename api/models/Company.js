/**
 * Company.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'companies_master',
  attributes: {
    id: {
      columnName: 'company_id',
      columnType: 'serial',
      type: 'number',
      autoIncrement: true,
      unique: true,
    },
    companyName: {
      type: 'string',
      maxLength: 20,
      required: true,
      isNotEmptyString: true,
      columnName: 'company_name',
      columnType: 'varchar(20)',
    },
    activeFlag: {
      type: 'boolean',
      columnName: 'active_flag',
      columnType: 'boolean',
    },
    users: {
      collection: 'user',
      via: 'companyId',
      through: 'companyauth',
    },
    projects: {
      collection: 'Project',
      via: 'company',
    }
  },

};
