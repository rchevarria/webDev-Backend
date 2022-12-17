const Sequelize = require('sequelize');
const db = require('../db');

const Task = db.define("task", {
    
    description:{
        type: Sequelize.STRING,
        allowNull: false
    },
    
    priority: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    completion: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

module.exports = Task;
