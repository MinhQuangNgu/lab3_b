const product = require('./product')
function router(app){
    app.use('/product',product);
}
module.exports = router;