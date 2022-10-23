const { Item, User, Category, ItemIngredient, Ingredient, sequelize} = require('../models/index')
class itemController {

    static async showItems (req, res, next) {
        try {
            let item = await Item.findAll({
                include : [
                    {model: User},
                    {model: Category},
                    // {model: ItemIngredient},
                    {model: Ingredient}
                ]
            })

            res.status(200).json(item)
            
        } catch (error) {
            next(error) //error 1 (ISE)
            // error authen
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
                throw {name: 'Item not found'}  //error 1
            }

            res.status(200).json(item)
        } catch (error) {
            next(error) //error 2 (authen)   
        }
    }

    static async addItem (req, res, next) {
        const t = await sequelize.transaction();
        try {

            let userId = req.user.id

            const { name, description, price, imgUrl, categoryId, ingredientsChoices } = req.body
            console.log(req.body, 'ini reqbodynya dari client')

            if(ingredientsChoices.lenght === 0) {
                throw {name: 'ingredients is required'} //error 1
            }

            if(!categoryId) {
                throw {name: 'category is required'} //error 2
            }

            const category = await Category.findByPk(categoryId)

            if(!category) {
                throw {name:'category not found'} // error 3
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
                throw {name: 'category is required'} //error 1
            }

            const category = await Category.findByPk(categoryId)
            
            if(!category) {
                throw {name:'category not found'} // error 2
            }

            let editedItem = await Item.findByPk(itemId)

            if(!editedItem) {
                throw {name: 'item not found'} // error 3
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
                throw {name: 'item not found'} //error 1
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
            
        } catch (error) {
            console.log(error)
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