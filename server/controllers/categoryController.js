const {Category} = require('../models/index')


class categoryController {

    static async showCategories (req, res, next) {
        try {
            
            const categories = await Category.findAll();
            console.log('MASUK SERVER FETCH CATEGORY')
            res.status(200).json(categories)
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    static async addCategory (req, res, next) {
        try {

            const { name } = req.body
            console.log(req.body, '<<<<<<<<<< MASUK KE ADD CATEGORY DI SINI ')

            
            const category = await Category.create({
                name
            })
            
            res.status(201).json({message:'New category added'})
            
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    static async getCategory (req, res, next) {
        try {

            const {id} = req.params
            const category = await Category.findByPk(id)

            if(!category) {
                throw {name: 'Category not found'}
            }

            res.status(200).json(category)
            
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    static async editCategory (req, res, next) {
        try {
            const {name} = req.body
            const {id} = req.params
            const editedCategory = await Category.findByPk(id)

            if(!editedCategory) {
                throw {name: 'Category not found'} //error 1
            }

            const category = await Category.update({
                name,
            }, {
                where: {id}
            })

            res.status(201).json({message: 'Success edit category'})

        } catch (error) {
            console.log(error)
            next(error)
            
        }
    }

    static async deleteCategory (req, res, next) {
        try {
            const {id} = req.params
            const findCategory = await Category.findByPk(id);

            if(!findCategory) {
                throw {name: 'Category not found'}
            }

            await Category.destroy({
                where: {id}
            })

            res.status(200).json({message: 'Delete category success'})

        } catch (error) {
            console.log(error)
            next(error)
        }
    }

}

module.exports = categoryController