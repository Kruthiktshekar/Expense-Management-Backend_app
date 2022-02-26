const express = require('express')
const budgetControllers = require('../App/controllers/budgetControllers')
const categoryControllers = require('../App/controllers/categoryControllers')
const userControllers = require('../App/controllers/userControllers')
const authMiddleware = require('../App/middlewares/AuthMiddleware')
const route = express.Router()

// user
route.post('/register',userControllers.create)
route.post('/login',userControllers.login)
route.get('/user',authMiddleware,userControllers.show)
route.delete('/deleteUser',authMiddleware,userControllers.delete)
route.put('/updateUser',authMiddleware,userControllers.update)

// budget
route.post('/createBudget',authMiddleware,budgetControllers.create)
route.get('/getAllBudget',authMiddleware,budgetControllers.showAll)
route.get('/showBudget/:id',authMiddleware,budgetControllers.show)
route.delete('/deleteBudget/:id',authMiddleware,budgetControllers.delete)
route.put('/updateBudget/:id',authMiddleware,budgetControllers.update)


route.post('/createCategory',authMiddleware,categoryControllers.create)
route.get('/getAllCategory',authMiddleware,categoryControllers.showAll)
route.get('/showCategory/:id',authMiddleware,categoryControllers.show)
route.delete('/deleteCategory/:id',authMiddleware,categoryControllers.delete)
route.put('/updateCategory/:id',authMiddleware,categoryControllers.update)
module.exports = route