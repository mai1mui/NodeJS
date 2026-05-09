const db = require('./db')
function getProduct(callback){
    const sql = "SELECT * FROM products";
    db.query(sql,callback)
}
function addProduct(data,callback){
    const sql = "INSERT INTO products(name,price,des) VALUES(?,?,?)";
    const {name,price,des} = data;
    db.query(sql,[name,price,des],callback)
}
function deleteOneProduct(id, callback){
    const sql = "DELETE FROM products WHERE id = ?";
    db.query(sql,[id],callback)
}
function getOneProduct(id, callback){
    const sql = "SELECT * FROM products WHERE id = ?";
    db.query(sql,[id],callback)
}
function updateProduct(data,callback){
    const sql = "UPDATE products SET name = ?, price=?, des=? WHERE id = ?";
    const {name, price,des,id} = data;
    db.query(sql,[name,price,des,id],callback)

}
module.exports = {
    getProduct,
    addProduct,
    deleteOneProduct,
    getOneProduct,
    updateProduct
}