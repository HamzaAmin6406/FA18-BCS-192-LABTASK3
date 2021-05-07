var mongoose = require(mongoose);
var products_schema=mongoose.Schema({
    product:String,
email:String
});
var products=mongoose.model('api-crudee', products_schema);
module.exports=product;

