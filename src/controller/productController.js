const Product = require('../model/product');
const Category = require('../model/category');
const Brand = require('../model/brand');
class ProductController{
    async getAllProduct(req,res){
        try{
            const search = req.query?.search || '';
            let product = await Product.find();
            const category = await Category.find();
            const brand = await Brand.find();
            let products = [];
            product.forEach(item => {
                let categoryTemp = {};
                let brandTemp = {};
                category.forEach(c => {
                    if(c.id == item.category){
                        categoryTemp = c;
                    }
                })
                brand.forEach(b => {
                    if(b.id == item.brand){
                        brandTemp = b;
                    }
                })
                if(item?.title?.toLowerCase()?.includes(search.toLowerCase())){
                    products.push({
                        ...item._doc,
                        category:categoryTemp,
                        brand:brandTemp
                    });
                }
            });
            return res.status(200).json({products:products});
        }
        catch(err){
            console.log(err)
            return res.status(500).json({
                message:err.toString()
            })
        }
    }

    async getAllBrand(req,res){
        try{
            const brand = await Brand.find();
            return res.status(200).json({brands:brand});
        }
        catch(err){
            return res.status(500).json({
                message:err.toString()
            })
        }
    }

    async getAllCategory(req,res){
        try{
            const category = await Category.find();
            return res.status(200).json({categories:category});
        }
        catch(err){
            return res.status(500).json({
                message:err.toString()
            })
        }
    }

    async getAllProductBrand(req,res){
        try{
            const {id} = req.params;
            const search = req.query?.search || "";
            let product = await Product.find();
            const category = await Category.find();
            const brand = await Brand.find();
            let products = product.filter(item => {
                let categoryTemp = {};
                let brandTemp = {};
                category.forEach(c => {
                    if(c.id == item.category){
                        categoryTemp = c;
                    }
                })
                brand.forEach(b => {
                    if(b.id == item.brand){
                        brandTemp = b;
                    }
                })
                if(item.brand == id && item.title?.includes(search)){
                    return {
                        ...item._doc,
                        category:categoryTemp,
                        brand:brandTemp
                    }
                }
            });
            return res.status(200).json({products:products});
        }
        catch(err){
            return res.status(500).json({
                message:err.toString()
            })
        }
    }

    async createNewProduct(req,res){
        try{
            const {title,price,discountPercentage,rating,stock,brand,category,description} = req.body;
            console.log({
                title,price,discountPercentage,rating,stock,brand,category,description
            })
            const product = await Product.find().sort({ id: 'desc' });
            const newProduct = new Product({
                title,price,discountPercentage,rating,stock,brand,category,description
            })
            await newProduct.save();
            return res.status(200).json({message:"Tạo mới thành công"});
        }
        catch(err){
            console.log(err);
            return res.status(500).json({
                message:err.toString()
            })
        }
    }
}

module.exports = new ProductController();