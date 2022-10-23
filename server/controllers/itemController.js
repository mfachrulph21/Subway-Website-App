const { Item, User, Category, ItemIngredient, Ingredient, sequelize} = require('../models/index')
class itemController {

    static async showItems (req, res, next) {
        try {
            let item = await Item.findAll({
                include : [
                    {model: User},
                    {model: Category},
                    {model: Ingredient}
                ]
            })

            res.status(200).json(item)
            
        } catch (error) {
            next(error) 
        }
    }

    static async getItem (req, res, next) {
        try {
            let itemId = req.params.id

            let item = await Item.findByPk(itemId, {
                include : [
                    {model: User},
                    {model: Category}
                ]
            })

            if (!item) {
                throw {
                    code : 404,
                    msg : 'Item not found'
                }
            }

            res.status(200).json(item)
        } catch (error) {
            next(error) 
        }
    }

    static async addItem (req, res, next) {
        const t = await sequelize.transaction();
        try {

            let userId = req.user.id

            const { name, description, price, imgUrl, categoryId, ingredientsChoices } = req.body

            if(ingredientsChoices.lenght === 0) {
                throw {
                    code: 400,
                    msg : 'ingredients is required'
                }
            }

            if(!categoryId) {
                throw {
                    code: 400,
                    msg : 'category is required'
                }
            }

            const category = await Category.findByPk(categoryId)

            if(!category) {
                throw {
                    code: 404,
                    msg : 'category not found'
                }
            }

            let item = await Item.create({
                name,
                description,
                price,
                imgUrl,
                categoryId,
                userId
            }, { transaction: t })

            await ItemIngredient.bulkCreate(ingredientsChoices, { transaction: t })

            await t.commit();
            res.status(201).json(item)
        } catch (error) {
            await t.rollback();
            next(error);
        }
    }

    static async editItem (req, res, next) {
        try {
            let itemId = req.params.id
            let userId = req.user.id
            
            const { name, description, price, imgUrl, categoryId} = req.body
            
            
            if(!categoryId) {
                throw {
                    code : 400,
                    msg: 'category is required'
                }
            }

            const category = await Category.findByPk(categoryId)
            
            if(!category) {
                throw {
                    code: 404,
                    msg: 'category not found'
                }
            }

            let editedItem = await Item.findByPk(itemId)

            if(!editedItem) {
                throw {
                    code: 404,
                    msg: 'item not found'
                }
            }
            
            let item = await Item.update({
                name,
                description,
                price,
                imgUrl,
                categoryId,
                userId
            },{
                where: {id: itemId}
            })

            res.status(200).json({message: `Item ${editedItem.name} updated`})
        } catch (error) {
            next(error)
        }
    }

    static async deleteItem (req, res, next) {
        try {
            let itemId = req.params.id

            let item = await Item.findByPk(itemId)

            if(!item) {
                throw {
                    code: 404,
                    msg: 'item not found'
                }
            }

            await Item.destroy({
                where : {
                    id : itemId
                }
            })

            res.status(200).json({message: `Item ${item.name} deleted`})
        } catch (error) {
            next(error)
        }
    }

    static async showItemsByCategory (req, res, next) {
        try {
            const name = req.query.name

            let category = await Category.findOne({
                where : {
                    name
                }
            })
            
            res.status(200).json(category)
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    static async showIngredients (req, res, next) {
        try {
            let ingredients = await Ingredient.findAll()

            res.status(200).json(ingredients)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = itemController