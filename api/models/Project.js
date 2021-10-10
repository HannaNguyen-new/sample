/**
 * Project.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'projects_master',
  attributes: {
    id: {
      columnName: 'project_id',
      columnType: 'serial',
      type: 'number',
      autoIncrement: true,
      unique: true,
    },
    projectName: {
      columnName: 'project_name',
      columnType: 'varchar(50)',
      type: 'string',
      maxLength: 50,
    },
    company: {
      columnName: 'company_id',
      model: 'company',
      columnType: 'integer'
    },
  },

};
