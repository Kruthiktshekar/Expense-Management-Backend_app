const Budget = require('../models/BudgetModel')
const budgetControllers = {}

budgetControllers.create = (req,res) =>{
    const data = req.body
    const budget = new Budget(data)
    budget.userId = req.user.id
    budget.save()
    .then((budget) =>{
        res.json(budget)
    })
    .catch((err) =>{
        res.json(err)
    })
}

budgetControllers.show = (req,res) =>{
    const id = req.params.id
    Budget.findById(id)
    .then((budget) =>{
        res.json(budget)
    })
    .catch((err) =>{
        res.json(err)
    })
}

budgetControllers.showAll = (req,res) =>{
    Budget.find()
    .then((budget) =>{
        res.json(budget)
    })
    .catch((err) =>{
        res.json(err)
    })
}
budgetControllers.update = (req,res) =>{
    const id = req.params.id
    const data = req.body
    Budget.findByIdAndUpdate(id,data,{new:true,runValidators:true})
    .then((budget) =>{
        res.json(budget)
    })
    .catch((err) =>{
        res.json(err)
    })
}

budgetControllers.delete = (req,res) =>{
    const id = req.params.id
    Budget.findByIdAndDelete(id)
    .then((budget) =>{
        res.json(budget)
    })
    .catch((err) =>{
        res.json(err)
    })
}

module.exports = budgetControllers