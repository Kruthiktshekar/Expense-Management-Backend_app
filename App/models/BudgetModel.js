const mongoose = require('mongoose')
const Schema = mongoose.Schema

const budgetSchema = new Schema({
    totalBudget : {
        type : String
    },
    createdAt : {
        type : Date,
        default : Date.now()
    },
    userId : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    }
})

const Budget = mongoose.model('Budget',budgetSchema)

module.exports = Budget