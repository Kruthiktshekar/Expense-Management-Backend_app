const mongoose = require('mongoose')

const ConfigDb = () =>{
    mongoose.connect('mongodb://localhost:27017/expenseManagment')
    .then(() =>{
        console.log('db is connected')
    })
    .catch(() =>{
        console.log('err occured')
    })
}

module.exports = ConfigDb