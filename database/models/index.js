
// This file registers models sets up the associations between tables and generates barrel file for the models


const Task = require('./Task');
const Employee = require('./Employee');

Task.belongsTo(Employee);
Employee.hasMany(Task);

module.exports = {
    Task,
    Employee
};
