const Category = require('../models/CategoryModel')
const categoryControllers = {}

categoryControllers.create = (req,res) =>{
    const data = req.body
    const category = new Category(data)
    category.userId = req.user.id
    category.save()
    .then((category) =>{
        res.json(category)
    })
    .catch((err) =>{
        res.json(err)
    })
}

categoryControllers.show = (req,res) =>{
    const id = req.params.id
    Category.findById(id)
    .then((Category) =>{
        res.json(Category)
    })
    .catch((err) =>{
        res.json(err)
    })
}

categoryControllers.showAll = (req,res) =>{
    Category.find()
    .then((Category) =>{
        res.json(Category)
    })
    .catch((err) =>{
        res.json(err)
    })
}
categoryControllers.update = (req,res) =>{
    const id = req.params.id
    const data = req.body
    Category.findByIdAndUpdate(id,data,{new:true,runValidators:true})
    .then((Category) =>{
        res.json(Category)
    })
    .catch((err) =>{
        res.json(err)
    })
}

categoryControllers.delete = (req,res) =>{
    const id = req.params.id
    Category.findByIdAndDelete(id)
    .then((Category) =>{
        res.json(Category)
    })
    .catch((err) =>{
        res.json(err)
    })
}

module.exports = categoryControllers